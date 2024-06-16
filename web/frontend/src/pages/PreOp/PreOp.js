import React, { useState } from 'react';
import PageNavbar from '../../Navbar';
import Info from './Info';
import './preop.css'
import PreChart from './PreChart'

export default function PreOp() {
    const [selectedButton, setSelectedButton] = useState('ETTh1');
    const [key, setKey] = useState(0); // 添加 key 状态

    const handleButtonClick = (dataset) => {
        setSelectedButton(dataset);
        setKey(prevKey => prevKey + 1); // 每次按钮点击时更新 key
    };

    return (
        <>
            <PageNavbar activeTab="数据预处理" />
            <div className='pre_container'>
                <div className='pre_btn_group'>
                    <button 
                        className={`pre_btn ${selectedButton === 'ETTh1' ? 'active' : ''}`} 
                        onClick={() => handleButtonClick('ETTh1')}
                    >
                        ETTh1
                    </button>
                    <button 
                        className={`pre_btn ${selectedButton === 'ETTm1' ? 'active' : ''}`} 
                        onClick={() => handleButtonClick('ETTm1')}
                    >
                        ETTm1
                    </button>
                    <button 
                        className={`pre_btn ${selectedButton === 'Exchange_rate' ? 'active' : ''}`} 
                        onClick={() => handleButtonClick('Exchange_rate')}
                    >
                        Exchange_rate
                    </button>
                    <button 
                        className={`pre_btn ${selectedButton === 'National_illness' ? 'active' : ''}`} 
                        onClick={() => handleButtonClick('National_illness')}
                    >
                        National_illness
                    </button>
                    <button 
                        className={`pre_btn ${selectedButton === 'weather' ? 'active' : ''}`} 
                        onClick={() => handleButtonClick('weather')}
                    >
                        weather
                    </button>
                </div>
                <div className='pre_info'>
                    <Info />
                </div>
                <div className='pre_show'>
                <PreChart key={key} dataset={selectedButton} /> {/* 使用 key 属性 */}
                </div>
            </div>
        </>
    )
};
