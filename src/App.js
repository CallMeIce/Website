import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu";
import About from "./components/About"
import Contact from "./components/Contact";
import MeetUs from "./components/Meet";
import Drinks from "./components/Drinks";
import './components/style.css'

function App() {
  return (
    <div className="routesContainer">
        <Routes>
          <Route path="/menu" element={<Menu /> } />
          <Route path="/" element={<About /> } />
          <Route path="/About" element={<About /> } />
          <Route path="/contact" element={<Contact /> } />
          <Route path="/meetus" element={<MeetUs /> } />
          <Route path="/drinks" element={<Drinks/>} />
        </Routes>
    </div>
  );
}

export default App;
