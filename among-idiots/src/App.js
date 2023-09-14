
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home.js"
//import headerImg from '../public/images/AmongIdiotsFrame.png';


function App() {
  return <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  
}

export default App
