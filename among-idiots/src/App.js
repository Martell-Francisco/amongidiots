
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home.js"
import Tobistheater from "./pages/Tobistheater"
//import headerImg from '../public/images/AmongIdiotsFrame.png';


function App() {
  return <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='tobis-theater' element={<Tobistheater />}/>
    </Routes>
  
}

export default App
