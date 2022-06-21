import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/Organism/Header";
import Home from "../Pages/Home/index";
import Footer from "../components/Organism/Footer/index";
import Error from "../Pages/Error/index";
import ScrollTopButton from "../components/Molecules/scrollTopButton";
import Employee from "../Pages/Employee/index";
const Routing = () => {
  return (
    <div>
      <Router>
        <Header />

        <Routes>
          {["/", "/home"].map((path) => (
            <Route path={path} element={<Home />} />
          ))}
          <Route path="/employee" element={<Employee />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default Routing;
