import PageNavbar from '../../Navbar';
import ModelChart from './ModelChart';
import './model.css'
import Info from './Info';
import React, { useState } from 'react';
//import '../index.css'

export default function Models(){
    const [selectedButton, setSelectedButton] = useState('ETTh1');
    const [key, setKey] = useState(0); // 添加 key 状态

    const handleButtonClick = (dataset) => {
        setSelectedButton(dataset);
        setKey(prevKey => prevKey + 1); // 每次按钮点击时更新 key
    };

    return (
        <>
            <PageNavbar activeTab="模型评估" />
            <div className='model_container'>
                <div className='model_btn_group'>
                    <button 
                        className={`model_btn ${selectedButton === 'ETTh1' ? 'active' : ''}`} 
                        onClick={() => handleButtonClick('ETTh1')}
                    >
                        ETTh1
                    </button>
                    <button 
                        className={`model_btn ${selectedButton === 'ETTm1' ? 'active' : ''}`} 
                        onClick={() => handleButtonClick('ETTm1')}
                    >
                        ETTm1
                    </button>
                    <button 
                        className={`model_btn ${selectedButton === 'Exchange_rate' ? 'active' : ''}`} 
                        onClick={() => handleButtonClick('Exchange_rate')}
                    >
                        Exchange_rate
                    </button>
                    <button 
                        className={`model_btn ${selectedButton === 'National_illness' ? 'active' : ''}`} 
                        onClick={() => handleButtonClick('National_illness')}
                    >
                        National_illness
                    </button>
                    <button 
                        className={`model_btn ${selectedButton === 'weather' ? 'active' : ''}`} 
                        onClick={() => handleButtonClick('weather')}
                    >
                        weather
                    </button>
                </div>
                <div className='model_info'>
                    <Info />
                </div>
                <div className='model_show'>
                    <ModelChart key={key} dataset={selectedButton} />
                </div>
            </div>
        </>
    )
};