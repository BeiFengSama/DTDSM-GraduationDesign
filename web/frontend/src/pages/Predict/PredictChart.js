import React, { useState, useEffect } from 'react';
import ReactEcharts from 'echarts-for-react';
export default function PredictChart({dataset}){
    let url = ''
    if(dataset === 'ETTh1'){
        url = '/predict_ETTh1'
    };
    if(dataset === 'ETTm1'){
        url = '/predict_ETTm1'
    };
    if(dataset === 'Exchange_rate'){
        url = '/predict_Exchange_rate'
    };
    if(dataset === 'National_illness'){
        url = '/predict_National_illness'
    };
    if(dataset === 'weather'){
        url = '/predict_weather'
    };
    const [data, setData] = useState(null);

    useEffect(() => {
        // 从后端获取数据
        fetch(url)
        .then(response => response.json())
        .then(responseData => setData(responseData))
        .catch(error => console.error('Error fetching data:', error));
    }, [url]);
    let parsedata = JSON.parse(data)
    return (
        <>
        {data && <LinePlot data={parsedata} />}
        </>
    );
};
const LinePlot = ({ data }) => {
    if (!data) return null;
    let trues = []
    let DTDSM = []
    let iTransformer = []
    let TimesNet = []
    let Informer = []
    for(let i = 0 ; i < data.data.length; i++){
        trues.push(data.data[i][0])
        DTDSM.push(data.data[i][1]);
        iTransformer.push(data.data[i][2]);
        TimesNet.push(data.data[i][3]);
        Informer.push(data.data[i][4]);
    }
    const getOption = () => {
        return {
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['trues', 'DTDSM', 'iTransformer', 'TimesNet', 'Informer']
          },
          xAxis: {
            type: 'category',
            data: Array.from({ length: data.length }, (_, i) => i + 1) // 假设 x 轴是数据点的索引
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
                name: '真实值',
                type: 'line',
                data: trues
            },
            {
              name: 'DTDSM',
              type: 'line',
              data: DTDSM
            },
            {
              name: 'iTransformer',
              type: 'line',
              data: iTransformer
            },
            {
              name: 'TimesNet',
              type: 'line',
              data: TimesNet
            },
            {
              name: 'Informer',
              type: 'line',
              data: Informer
            }
          ]
        };
      };
    
      return <ReactEcharts option={getOption()} style={{ height: '400px', width: '100%' }} />; 
};