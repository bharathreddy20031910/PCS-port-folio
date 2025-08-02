import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Privacypolicy from './components/Privacypolicy';
import ReturnRefund from './components/Return-Refund';
import TermsConditions from './components/Terms-Conditions';



function App() {
  return (
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
