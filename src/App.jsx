import {Home} from './components/Home';
import Login from './components/Login';
import { Detector } from './components/Detector';
import { Scanner } from './components/Scanner';
import { Profile } from './components/Profile';
import Register from './components/Register';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Nav } from './components/Nav/Nav';

function App() {

  return (
    <div >
      <BrowserRouter >
      {/* <Nav/> */}
        <Routes>
          <Route path="/" element ={<Register/>} />
          <Route path="/register" element ={<Register/>} />
          <Route path="/login" element ={<Login/>} />
          <Route path="/home" element ={<Home/>} />
          <Route path="/detector" element ={<Detector/>} />
          <Route path="/scanner" element ={<Scanner/>} />
          <Route path="/profile" element ={<Profile/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App