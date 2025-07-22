import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import TeamShowcase from "./pages/TeamShowcase/TeamShowcase";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<TeamShowcase />} />
      </Routes>
    </>
  );
}

export default App;
