import pandas as pd


def read_pre(dataset):
    error = pd.read_csv('D:\\codefiled\\Graduation_Design\\Long-Time-Series-Forcasting\\web\\backend\\datas\\preop\\' + dataset + '_error.csv', index_col=0)
    normal = pd.read_csv('D:\\codefiled\\Graduation_Design\\Long-Time-Series-Forcasting\\web\\backend\\datas\\preop\\' + dataset + '_normal.csv', index_col=0)
    merged_df = normal.merge(error, how='outer', left_index=True, right_index=True)
    merged_df.reset_index(inplace=True)
    merged_df = merged_df.rename(columns={'OT_x': 'normal', 'OT_y': 'error'})
    merged_json = merged_df.to_json(orient='split')
    return merged_json


def read_feature(dataset):
    cor = pd.read_csv('D:\\codefiled\\Graduation_Design\\Long-Time-Series-Forcasting\\web\\backend\\datas\\feature\\feature_' + dataset + '.csv')
    cor = cor.rename(columns={'0': 'feature', 'OT': 'cor'})
    cor_json = cor.to_json(orient='split')
    return cor_json


def read_predict(dataset):
    pred = pd.read_csv('D:\\codefiled\\Graduation_Design\\Long-Time-Series-Forcasting\\web\\backend\\datas\\predict\\' + dataset + '.csv')
    pred_json = pred.to_json(orient='split')
    return pred_json
