import React, { useState, useEffect } from 'react';
import ReactEcharts from 'echarts-for-react';
export default function FeatureChart({dataset}){
    let url = ''
    if(dataset === 'ETTh1'){
        url = '/feature_ETTh1'
    };
    if(dataset === 'ETTm1'){
        url = '/feature_ETTm1'
    };
    if(dataset === 'Exchange_rate'){
        url = '/feature_Exchange_rate'
    };
    if(dataset === 'National_illness'){
        url = '/feature_National_illness'
    };
    if(dataset === 'weather'){
        url = '/feature_weather'
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
        {data && <BarPlot data={parsedata} />}
        </>
    );
};

const BarPlot = ({ data }) => {
    if (!data) return null;
    let feature = []
    let cor = []
    for(let i = 0 ; i < data.data.length; i++){
        feature.push(data.data[i][0]);
        cor.push(data.data[i][1]);
    }
    const getOption = () => {
        return {
          title: {
            text: '特征相关性筛选'
          },
          tooltip: {},
          xAxis: {
            name: '特征',
            data: feature
          },
          yAxis: {},
          series: [{
            name: '相关性',
            type: 'bar',
            data: cor
          }]
        };
    };
    return (
        <ReactEcharts option={getOption()} style={{ height: '400px', width: '100%' }} />
    );
  };