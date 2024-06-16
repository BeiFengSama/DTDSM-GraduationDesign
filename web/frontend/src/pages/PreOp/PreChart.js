import React, { useState, useEffect } from 'react';
import ReactEcharts from 'echarts-for-react';

export default function PreChart({ dataset }) {
  let url = '';
  if (dataset === 'ETTh1') {
    url = '/pre_ETTh1';
  } else if (dataset === 'ETTm1') {
    url = '/pre_ETTm1';
  } else if (dataset === 'Exchange_rate') {
    url = '/per_Exchange_rate';
  } else if (dataset === 'National_illness') {
    url = '/pre_National_illness';
  } else if (dataset === 'weather') {
    url = '/pre_weather';
  }

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
    <div>
      {data && <ScatterPlot data={parsedata} />}
    </div>
  );
};

const ScatterPlot = ({ data }) => {
  if (!data) return null;

  // 解析JSON数据
  let index = [];
  let normal = [];
  let error = [];
  for (let i = 0; i < data.data.length; i++) {
    index.push(data.data[i][0]);
    normal.push(data.data[i][1]);
    error.push(data.data[i][2]);
  }

  const chartData = index.map((index, i) => {
    return [index, normal[i], error[i]];
  });

  const option = {
    title: {
      text: '异常值检测'
    },
    xAxis: {
      type: 'value'
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      name: 'Normal',
      type: 'scatter',
      data: chartData.map(([index, normal]) => {
        if (normal !== 0 && normal !== null) {
          return [index, normal];
        } else {
          return null;
        }
      }).filter(point => point !== null),
      symbolSize: 3, // 设置散点的大小为3
      itemStyle: { // 设置正常值散点图系列的样式
        color: 'blue' // 设置颜色为蓝色
      }
    }, {
      name: 'Error',
      type: 'scatter',
      data: chartData.map(([index, _, error]) => {
        if (error !== 0 && error !== null) {
          return [index, error];
        } else {
          return null;
        }
      }).filter(point => point !== null),
      symbolSize: 3, // 设置散点的大小为3
      itemStyle: { // 设置正常值散点图系列的样式
        color: 'red' // 设置颜色为红色
      }
    }]
  };

  return <ReactEcharts option={option} style={{ height: '400px', width: '100%' }} />;
};
