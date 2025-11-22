import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../layout/Header";
import routes from "./routes";
import Footer from "../layout/Footer";

const Nagivation = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Nagivation;
