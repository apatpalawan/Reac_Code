import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./componenrs/about/About";
import Home from "./componenrs/home/Home";
import Store from "./componenrs/store/Store";
import './App.css';
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/store" element={<Store />}/>
      </Routes>
    </Router>
  );
}
