export default function Info(){
    let text = "常见的时间序列预测模型评估是基于误差的评估方法，误差评估指标指数越低，则模型的性能表现越好，预测的准确率越高。本实验采用的评估指标为平均绝对误差（mean absolue error，MAE）和均方误差（mean square error，MSE），规定指数越低，则预测性能越好。"
    return (
        <>
        <p>{text}</p>
        </>
    );
};