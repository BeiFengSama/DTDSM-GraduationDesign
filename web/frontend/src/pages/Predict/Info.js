export default function Info(){
    let text1 = "DTDSM在5个数据集上的预测评估结果均有提升。其中在ETTh1和national_illness两个数据集上提升最大，以Informer为基准，DTDSM在两个数据集上分别取得了超30%和超50%的预测性能提升。"
    let text2 = "相较于Informer和TimesNet，DTDSM和iTransformer在整体趋势拟合上表现相对较好，预测结果更贴合真实数据的整体变化，在数据出现较大的幅度变化时也能实现精准预测，因此整体预测效果较好。"
    return (
        <>
        <p>{text1}</p>
        <p>{text2}</p>
        </>
    );
};