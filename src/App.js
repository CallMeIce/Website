import {BrowserRouter as Router, Routes, Route} from "react-router";
import React from "react";
import './App.css';
import Menu from "./components/Menu";
import Home from "./components/Home";



function App() {
  return (
    <div className="App">
      <Router>
          <Routes> 
            <Route path="/" element={<Home/>} />
            <Route path="/menu" element={<Menu/>} />
          </Routes>
          </Router>
    </div>
  );
}

export default App;
