<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Privacypolicy from './components/Privacypolicy';
import ReturnRefund from './components/Return-Refund';
import TermsConditions from './components/Terms-Conditions';
=======
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";



function App() {
  const location = useLocation();
  const hiddenHeaderPaths = ["/return-refund", "/terms-conditions"];
  const shouldShowHeader = !hiddenHeaderPaths.includes(location.pathname);

  return (
<<<<<<< HEAD
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/privacypolicy" element={<Privacypolicy />} />
        <Route path="/return" element={<ReturnRefund />} />
         <Route path="/terms" element={<TermsConditions />} />
      </Routes>
    </Router>
  );
}

export default App;
=======
    <>
      {shouldShowHeader && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-history" element={<TeamShowcase />} />
        <Route path="/about" element={<OurHistory />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/return-refund" element={<ReturnRefund />} />
        <Route path="/our-knowledge" element={<OurKnowledge3 />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about-careers" element={<Career/>} />
      </Routes>

      <Footer />
      <footer>
        <p style={{ textAlign: "center" }}>
          &copy; {new Date().getFullYear()} PCS Global. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default App
