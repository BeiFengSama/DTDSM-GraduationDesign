import { Route, Routes } from 'react-router-dom';
import Dataset from './pages/Dataset/Dataset';
import PreOp from './pages/PreOp/PreOp';
import Feature from './pages/Feature/Feature';
import Models from './pages/Models/Models';
import About from './pages/About/About';
import Predict from './pages/Predict/Predict';
import './index.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dataset />} />
      <Route path="/preop" element={<PreOp />} />
      <Route path="/feature" element={<Feature />} />
      <Route path="/predictinfo" element={<Predict />} />
      <Route path="/modeleval" element={<Models />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
