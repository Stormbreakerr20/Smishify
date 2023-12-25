
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React from 'react';
import Login from "./components/Login";
import Navbar from './components/Navbar';
import News from './components/Newscomp/News';
import Weather from './components/Weathercomp/Weather';
import Textform from './components/Text/Textform'
import Alert from './components/Text/Alert';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Note from './components/Notes/Note';

function App() {
  let [alert,setalert]=useState(null)

  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 3000);
  }

  return (
    <div className="App">

      <Router>
          <Navbar></Navbar>
          {alert!==null&&<Alert alert={alert}></Alert>}
        <Routes>
           <Route path='/' element={<Login />} />
           
           <Route path='/text' element={<Textform showAlert={showalert} />} />
           <Route path="/weather" element={<Weather />} />
           <Route path="/note" element={<Note />} />

           <Route path='/news' element={<News  key="1" country='in' cat='general'/>} />
           <Route path='/gen' element={<News  key="1" country='in' cat='general'/>} />
            <Route path='/sports' element={<News  key="2" country='in' cat='sports'></News>} />
            <Route path='/health' element={<News  key="3" country='in' cat='health'></News>} />
            <Route path='/business' element={<News  key="4" country='in' cat='business'></News>} />
            <Route path='/entertainment' element={<News  key="5" country='in' cat='entertainment'></News>} />
            <Route path='/technology' element={<News  key="6" country='in' cat='technology'></News>} />
            <Route path='/science' element={<News  key="7" country='in' cat='science'></News>} />

        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
