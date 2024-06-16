import torch
import torch.nn as nn
import torch.nn.functional as F
from layers.Autoformer_EncDec import  series_decomp
from layers.Transformer_EncDec import Encoder, EncoderLayer
from layers.SelfAttention_Family import AttentionLayer, ProbAttention
from layers.Embed import DataEmbedding_inverted


class Model(nn.Module):
    """
    Autoformer is the first method to achieve the series-wise connection,
    with inherent O(LlogL) complexity
    Paper link: https://openreview.net/pdf?id=I55UqU-M11y
    """

    def __init__(self, configs):
        super(Model, self).__init__()
        self.task_name = configs.task_name
        self.seq_len = configs.seq_len
        self.label_len = configs.label_len
        self.pred_len = configs.pred_len
        self.output_attention = configs.output_attention

        # Decomp
        kernel_size = configs.moving_avg
        self.decomp = series_decomp(kernel_size)

        # Embedding
        self.enc_embedding = DataEmbedding_inverted(configs.seq_len, configs.d_model, configs.embed, configs.freq,
                                                    configs.dropout)
        # Encoder
        self.encoder = Encoder(
            [
                EncoderLayer(
                    AttentionLayer(
                        ProbAttention(False, configs.factor, attention_dropout=configs.dropout,
                                      output_attention=configs.output_attention), configs.d_model, configs.n_heads),
                    configs.d_model,
                    configs.d_ff,
                    dropout=configs.dropout,
                    activation=configs.activation
                ) for l in range(configs.e_layers)
            ],
            norm_layer=torch.nn.LayerNorm(configs.d_model)
        )
        self.projector = nn.Linear(configs.d_model, configs.pred_len, bias=True)

    def forecast(self, x_enc, x_mark_enc, x_dec, x_mark_dec):
        # decomp init
        seasonal_init, trend_init = self.decomp(x_enc)

        # seasonal
        means = seasonal_init.mean(1, keepdim=True).detach()
        seasonal_init = seasonal_init - means
        stdev = torch.sqrt(torch.var(seasonal_init, dim=1, keepdim=True, unbiased=False) + 1e-5)
        seasonal_init /= stdev

        _, _, N = seasonal_init.shape

        # Embedding
        seasonal_trend = self.enc_embedding(seasonal_init, x_mark_enc)
        seasonal_trend, attns = self.encoder(seasonal_trend, attn_mask=None)

        dec_out1 = self.projector(seasonal_trend).permute(0, 2, 1)[:, :, :N]
        # De-Normalization from Non-stationary Transformer
        dec_out1 = dec_out1 * (stdev[:, 0, :].unsqueeze(1).repeat(1, self.pred_len, 1))
        dec_out1 = dec_out1 + (means[:, 0, :].unsqueeze(1).repeat(1, self.pred_len, 1))

        # trend
        means = trend_init.mean(1, keepdim=True).detach()
        trend_init = trend_init - means
        stdev = torch.sqrt(torch.var(trend_init, dim=1, keepdim=True, unbiased=False) + 1e-5)
        trend_init /= stdev

        _, _, N = trend_init.shape

        # Embedding
        trend_trend = self.enc_embedding(trend_init, x_mark_enc)
        trend_trend, attns = self.encoder(trend_trend, attn_mask=None)

        dec_out2 = self.projector(trend_trend).permute(0, 2, 1)[:, :, :N]
        # De-Normalization from Non-stationary Transformer
        dec_out2 = dec_out2 * (stdev[:, 0, :].unsqueeze(1).repeat(1, self.pred_len, 1))
        dec_out2 = dec_out2 + (means[:, 0, :].unsqueeze(1).repeat(1, self.pred_len, 1))

        dec_out = dec_out1 + dec_out2
        return dec_out

    def forward(self, x_enc, x_mark_enc, x_dec, x_mark_dec, mask=None):
        if self.task_name == 'long_term_forecast' or self.task_name == 'short_term_forecast':
            dec_out = self.forecast(x_enc, x_mark_enc, x_dec, x_mark_dec)
            return dec_out[:, -self.pred_len:, :]  # [B, L, D]
        if self.task_name == 'imputation':
            dec_out = self.imputation(
                x_enc, x_mark_enc, x_dec, x_mark_dec, mask)
            return dec_out  # [B, L, D]
        if self.task_name == 'anomaly_detection':
            dec_out = self.anomaly_detection(x_enc)
            return dec_out  # [B, L, D]
        if self.task_name == 'classification':
            dec_out = self.classification(x_enc, x_mark_enc)
            return dec_out  # [B, N]
        return None
