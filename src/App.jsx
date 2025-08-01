import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import TeamShowcase from "./pages/TeamShowcase/TeamShowcase";
import OurHistory from "./pages/OurHistory/OurHistory";
import Footer from "./components/Footer/Footer";
import TermsConditions from "./pages/Terms-Conditions";
import ReturnRefund from "./pages/Return-Refund";
import OurKnowledge3 from "./pages/OurKnowledge";
import ContactUs from "./components/ContactUs/ContactUs";

function App() {
  const location = useLocation();
  const hiddenHeaderPaths = ["/return-refund", "/terms-conditions"];
  const shouldShowHeader = !hiddenHeaderPaths.includes(location.pathname);

  return (
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

export default App;
