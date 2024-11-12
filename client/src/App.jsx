import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home.jsx";
import Skills from "./Components/Skills.jsx";
import Footer from "./Components/Footer.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="sm:flex h-screen">
        <Sidebar />
        <div className="flex-1 p-4 font-inter font-normal">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
