import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home/> } />
          <Route path="/menu" element={<Menu /> } />
        </Routes>
    </div>
  );
}

export default App;
