import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./components/about/About";
import Home from "./components/home/Home";
import Store from "./components/store/Store";

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
