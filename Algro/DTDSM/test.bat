@echo
python -u run.py --task_name long_term_forecast --is_training 1 --root_path ./data/ --data_path illness.csv --model_id illness_90 --model SiTransformer --data illness --features MS --seq_len 96 --label_len 48 --pred_len 90 --e_layers 2 --d_layers 1 --factor 3 --enc_in 7 --dec_in 7 --c_out 1 --des 'Exp' --itr 1