import React, { useState } from 'react';
import PageNavbar from '../../Navbar';
import Info from './Info';
import FeatureChart from './FeatureChart';
import './feature.css'

export default function Feature() {
    const [selectedButton, setSelectedButton] = useState('ETTh1');
    const [key, setKey] = useState(0); // 添加 key 状态

    const handleButtonClick = (dataset) => {
        setSelectedButton(dataset);
        setKey(prevKey => prevKey + 1); // 每次按钮点击时更新 key
    };

    return (
        <>
            <PageNavbar activeTab="特征工程" />
            <div className='feature_container'>
                <div className='feature_btn_group'>
                    <button 
                        className={`feature_btn ${selectedButton === 'ETTh1' ? 'active' : ''}`} 
                        onClick={() => handleButtonClick('ETTh1')}
                    >
                        ETTh1
                    </button>
                    <button 
                        className={`feature_btn ${selectedButton === 'ETTm1' ? 'active' : ''}`} 
                        onClick={() => handleButtonClick('ETTm1')}
                    >
                        ETTm1
                    </button>
                    <button 
                        className={`feature_btn ${selectedButton === 'Exchange_rate' ? 'active' : ''}`} 
                        onClick={() => handleButtonClick('Exchange_rate')}
                    >
                        Exchange_rate
                    </button>
                    <button 
                        className={`feature_btn ${selectedButton === 'National_illness' ? 'active' : ''}`} 
                        onClick={() => handleButtonClick('National_illness')}
                    >
                        National_illness
                    </button>
                    <button 
                        className={`feature_btn ${selectedButton === 'weather' ? 'active' : ''}`} 
                        onClick={() => handleButtonClick('weather')}
                    >
                        weather
                    </button>
                </div>
                <div className='feature_info'>
                    <Info />
                </div>
                <div className='feature_show'>
                    <FeatureChart key={key} dataset={selectedButton} />
                </div>
            </div>
        </>
    )
};
