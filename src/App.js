
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home.js"
import Tobistheater from "./pages/Tobistheater"
import CheckImposter from "./pages/CheckImposter"
import Calender from './pages/Calender';
import SecretSignUpPage from './pages/SecretPage';

function App() {
  return (<Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='tobis-theater' element={<Tobistheater />}/>
      <Route path='AssignImposter' element={<CheckImposter />}/>
      <Route path='Planner' element={<Calender/>}/>
      <Route path='SecretSignUpPage' element={<SecretSignUpPage/>}/>

    </Routes>)
  
}

export default App
