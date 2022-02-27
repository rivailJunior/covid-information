import React from "react";
import { Routes, Route } from "react-router-dom";

import { About, Home, Dashboard } from "../pages";

const RoutesPages = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route exact path="/home" element={<Home />} />
    </Routes>
  );
};

export default RoutesPages;
