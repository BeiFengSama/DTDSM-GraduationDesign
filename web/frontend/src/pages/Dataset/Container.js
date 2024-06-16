import Card from "./Card";
export default function Container(){
    return (
        <>
            <div className="con">
                <Card name='ETTh1数据集' />
                <Card name='ETTm1数据集' />
                <Card name='Exchange_rate数据集' />
                <Card name='National_illness数据集' />
                <Card name='weather数据集' />
            </div>
        </>
    );
};