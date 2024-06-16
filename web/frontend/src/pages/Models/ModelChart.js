import React from 'react';
import ReactEcharts from 'echarts-for-react';

const ModelChart = ({ dataset }) => {
  let mse = []
  let mae = []
  if(dataset === 'ETTh1'){
      mse = [0.37, 0.37, 0.43, 0.69, 0.45, 0.59, 0.56, 1.14, 2.39]
      mae = [0.49, 0.48, 0.53, 0.67, 0.55, 0.67, 0.65, 0.92, 1.32]
  };
  if(dataset === 'ETTm1'){
    mse = [0.51, 0.44, 0.48, 0.45, 0.43, 0.52, 0.57, 0.86, 2.27]
    mae = [0.53, 0.49, 0.52, 0.50, 0.50, 0.60, 0.67, 0.79, 1.32]
  };
  if(dataset === 'Exchange_rate'){
    mse = [0.95, 1.26, 1.06, 1.18, 0.97, 0.95, 1.69, 0.50, 5.09]
    mae = [0.73, 0.83, 0.75, 0.79, 0.73, 0.82, 1.11, 0.61, 1.87]
  };
  if(dataset === 'National_illness'){
    mse = [0.51, 0.50, 0.76, 0.66, 0.59, 2.44, 1.68, 0.92, 1.24]
    mae = [0.56, 0.55, 0.68, 0.65, 0.61, 1.31, 1.10, 0.72, 0.87]
  };
  if(dataset === 'weather'){
    mse = [1.13, 1.06, 1.25, 1.13, 1.40, 1.58, 1.54, 0.46, 4.10]
    mae = [0.75, 0.72, 0.80, 0.78, 0.88, 0.98, 0.98, 0.49, 1.66]
  };
  let option = {
    title: {
      text: '算法性能评估'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01]
    },
    yAxis: {
      type: 'category',
      data: ['DTDSM', 'iTransformer', 'TimesNet', 'FEDformer', 'Autoformer', 'Informer', 'Reformer', 'XGBoost', 'Prophet']
    },
    series: [
      {
        name: 'mse',
        type: 'bar',
        data: mse
      },
      {
        name: 'mae',
        type: 'bar',
        data: mae
      }
    ]
  };
  return <ReactEcharts option={option} style={{ height: '400px', width: '100%' }} />;
};

export default ModelChart;
