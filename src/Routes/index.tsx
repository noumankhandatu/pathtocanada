import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/Organism/Header";
import Home from "../Pages/Home/index";
import Footer from "../components/Organism/Footer/index";
import Error from "../Pages/Error/index";
import Employee from "../Pages/Employee/index";
import Employers from "../Pages/Employers/index";
import Jobs from "../Pages/Jobs/index";
import FAQS from "../Pages/FAQS/index";
import AboutUs from "../Pages/aboutus/index";
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
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/employer" element={<Employers />} />
          <Route path="/faqs" element={<FAQS />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default Routing;
