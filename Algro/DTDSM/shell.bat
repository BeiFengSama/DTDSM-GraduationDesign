@echo
python -u run.py --task_name long_term_forecast --is_training 1 --root_path ./data/ --data_path rate.csv --model_id rate_720 --model SiTransformer --data rate --features MS --seq_len 96 --label_len 48 --pred_len 720 --e_layers 2 --d_layers 1 --factor 3 --enc_in 8 --dec_in 8 --c_out 1 --des 'Exp' --itr 1
python -u run.py --task_name long_term_forecast --is_training 1 --root_path ./data/ --data_path ETTh1.csv --model_id ETTh1_720 --model SiTransformer --data ETTh1 --features MS --seq_len 96 --label_len 48 --pred_len 720 --e_layers 2 --d_layers 1 --factor 3 --enc_in 7 --dec_in 7 --c_out 1 --des 'Exp' --itr 1
python -u run.py --task_name long_term_forecast --is_training 1 --root_path ./data/ --data_path weather.csv --model_id weather_720 --model SiTransformer --data weather --features MS --seq_len 96 --label_len 48 --pred_len 720 --e_layers 2 --d_layers 1 --factor 3 --enc_in 16 --dec_in 16 --c_out 1 --des 'Exp' --itr 1
python -u run.py --task_name long_term_forecast --is_training 1 --root_path ./data/ --data_path ETTm1.csv --model_id ETTm1_720 --model SiTransformer --data ETTm1 --features MS --seq_len 96 --label_len 48 --pred_len 720 --e_layers 2 --d_layers 1 --factor 3 --enc_in 7 --dec_in 7 --c_out 1 --des 'Exp' --itr 1






