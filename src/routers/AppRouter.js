import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Agg from "../components/Agg";
import Comidas from "../components/Food/Comidas";
import Nav from "../components/Nav/Nav";


export const AppRouter = () => {
  return (
    <div className="container-main-router">
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
