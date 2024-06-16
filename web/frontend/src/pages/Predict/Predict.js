import PageNavbar from '../../Navbar';
import PredictChart from './PredictChart';
import Info from './Info';
import './predict.css'
import React, { useState } from 'react';
//import '../index.css'

export default function Predict(){
    const [selectedButton, setSelectedButton] = useState('ETTh1');
    const [key, setKey] = useState(0); // 添加 key 状态

    const handleButtonClick = (dataset) => {
        setSelectedButton(dataset);
        setKey(prevKey => prevKey + 1); // 每次按钮点击时更新 key
    };

    return (
        <>
            <PageNavbar activeTab="数据预测结果" />
            <div className='predict_container'>
                <div className='predict_btn_group'>
                    <button 
                        className={`predict_btn ${selectedButton === 'ETTh1' ? 'active' : ''}`} 
                        onClick={() => handleButtonClick('ETTh1')}
                    >
                        ETTh1
                    </button>
                    <button 
                        className={`predict_btn ${selectedButton === 'ETTm1' ? 'active' : ''}`} 
                        onClick={() => handleButtonClick('ETTm1')}
                    >
                        ETTm1
                    </button>
                    <button 
                        className={`predict_btn ${selectedButton === 'Exchange_rate' ? 'active' : ''}`} 
                        onClick={() => handleButtonClick('Exchange_rate')}
                    >
                        Exchange_rate
                    </button>
                    <button 
                        className={`predict_btn ${selectedButton === 'National_illness' ? 'active' : ''}`} 
                        onClick={() => handleButtonClick('National_illness')}
                    >
                        National_illness
                    </button>
                    <button 
                        className={`predict_btn ${selectedButton === 'weather' ? 'active' : ''}`} 
                        onClick={() => handleButtonClick('weather')}
                    >
                        weather
                    </button>
                </div>
                <div className='predict_info'>
                    <Info />
                </div>
                <div className='predict_show'>
                    <PredictChart key={key} dataset={selectedButton} />
                </div>
            </div>
        </>
    )
};