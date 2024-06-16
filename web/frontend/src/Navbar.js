import { Link } from 'react-router-dom';
const PageNavbar=({activeTab})=> {
    return (
      <>
        <div className="contanier">
          <div className="navbar">
              <ul>
                  <li><Link>长时间序列预测算法研究与实现可视化</Link></li>
                  <li className={activeTab === "数据集介绍" ? "active" : ""}><Link to="/">数据集介绍</Link></li>
                  <li className={activeTab === "数据预处理" ? "active" : ""}><Link to="/preop">数据预处理</Link></li>
                  <li className={activeTab === "特征工程" ? "active" : ""}><Link to="/feature">特征工程</Link></li>
                  <li className={activeTab === "数据预测结果" ? "active" : ""}><Link to="/predictinfo">数据预测结果</Link></li>
                  <li className={activeTab === "模型评估" ? "active" : ""}><Link to="/modeleval">模型评估</Link></li>
                  {/* <li className={activeTab === "关于" ? "active" : ""}><Link to="/about">关于</Link></li> */}
                  <li>
                      <div className="theme-change"></div>
                  </li>
              </ul>
          </div>
        </div>
      </>
    );
  }
export default PageNavbar;