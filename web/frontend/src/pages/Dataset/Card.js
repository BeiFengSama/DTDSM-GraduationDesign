export default function Card({name}){
    let text = "";
    if(name === 'ETTh1数据集'){
        text = "该数据集记录了现实工业地区的电力数据，ETTh1提供了小时级别粒度的数据记录,包含8维数据特征，包括记录时间、目标预测值“油温”和6个负载特征。"
    };
    if(name === 'ETTm1数据集'){
        text = "该数据集记录了现实工业地区的电力数据，ETTm1提供了15分钟级别粒度的数据记录,包含8维数据特征，包括记录时间、目标预测值“油温”和6个负载特征。"
    };
    if(name === 'Exchange_rate数据集'){
        text = "Exchange_rate数据集收集了1990年至2010年8个国家的每日汇率。该数据集提供了daily级别的数据记录，提供了每日间隔级别的数据记录，包含时间列和目标预测值和其他6个特征。"
    };
    if(name === 'National_illness数据集'){
        text = "National_illness数据集收集了2002年至2021年美国疾病控制和预防中心记录的患有流感疾病的患者数量。该数据集提供了7天间隔级别的数据记录，包含时间列和目标预测值患者数和6个特征。"
    };
    if(name === 'weather数据集'){
        text = "Weather数据集收集了21个天气指标，提供了10分钟级别粒度的数据记录，包含时间记录和目标预测值和19个特征。"
    };
    return (
        <>
        <div className="card">
            <h3>{name}</h3>
            <p>{text}</p>
        </div>
        </>
    );
};