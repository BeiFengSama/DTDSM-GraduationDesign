# Filename - server.py
from flask import Flask, jsonify
from flask_cors import CORS
import function

# Initializing flask app
app = Flask(__name__)
CORS(app)


# 获取预测数据接口
@app.route('/predict_ETTh1', methods=['GET'])
def get_predict_ETTh1():
    data = function.read_predict('ETTh1')
    return jsonify(data)


@app.route('/predict_ETTm1', methods=['GET'])
def get_predict_ETTm1():
    data = function.read_predict('ETTm1')
    return jsonify(data)


@app.route('/predict_Exchange_rate', methods=['GET'])
def get_predict_Exchange_rate():
    data = function.read_predict('rate')
    return jsonify(data)


@app.route('/predict_National_illness', methods=['GET'])
def get_predict_National_illness():
    data = function.read_predict('illness')
    return jsonify(data)


@app.route('/predict_weather', methods=['GET'])
def get_predict_weather():
    data = function.read_predict('weather')
    return jsonify(data)


# 获取特征相关数据接口
@app.route('/feature_ETTh1', methods=['GET'])
def get_feature_ETTh1():
    data = function.read_feature('ETTh1')
    return jsonify(data)


@app.route('/feature_ETTm1', methods=['GET'])
def get_feature_ETTm1():
    data = function.read_feature('ETTm1')
    return jsonify(data)


@app.route('/feature_Exchange_rate', methods=['GET'])
def get_feature_Exchange_rate():
    data = function.read_feature('rate')
    return jsonify(data)


@app.route('/feature_National_illness', methods=['GET'])
def get_feature_National_illness():
    data = function.read_feature('illness')
    return jsonify(data)


@app.route('/feature_weather', methods=['GET'])
def get_feature_weather():
    data = function.read_feature('weather')
    return jsonify(data)


# 获取预处理相关数据接口
@app.route('/pre_ETTh1', methods=['GET'])
def get_pre_ETTh1():
    data = function.read_pre('ETTh1')
    return jsonify(data)


@app.route('/pre_ETTm1', methods=['GET'])
def get_pre_ETTm1():
    data = function.read_pre('ETTm1')
    return jsonify(data)


@app.route('/per_Exchange_rate', methods=['GET'])
def get_pre_rate():
    data = function.read_pre('rate')
    return jsonify(data)


@app.route('/pre_National_illness', methods=['GET'])
def get_pre_illness():
    data = function.read_pre('illness')
    return jsonify(data)


@app.route('/pre_weather', methods=['GET'])
def get_pre_weather():
    data = function.read_pre('weather')
    return jsonify(data)


# Running app
if __name__ == '__main__':
    app.run(debug=True)
