import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Agg from "../components/Agg";
import Comidas from "../components/Comidas";
import Nav from "../components/Nav";

export const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Comidas/>} />
          <Route path="/Agg" element={<Agg/>} />
          <Route path="/*" element={<Navigate to="/"/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
