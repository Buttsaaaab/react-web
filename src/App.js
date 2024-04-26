import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/aboutus';
import Contact from './pages/contact';
import Seminar from './pages/siminar';
import Training from './pages/training';
import Gettingstarted from './pages/gettingstarted';
import Funding from './pages/funding';
import Header from './components/Header';
import DriveTest from './pages/driveTest'
import TTSAO from './pages/TTSAO';
import OntarioLeague from './pages/OntarioLeague';
import RightResponsibility from './pages/RightResponsibility';
import SexualPolicy from './pages/SexualPolicy';
import ClassALicense from './pages/ClassALicense';
import ClassDLicense from './pages/ClassDLicense';
import AirBreak from './pages/AirBreak';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    console.log("Toggle function called");
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  //    const toggleMobileMenu = () => {
  //     console.log("Toggle function called");
  //     setIsMobileMenuOpen(false); // Always close the menu
  //  };

  return (
    <div className={`page-wrapper`}>
      <Router>

        <Header />

        {/* Mobile wrapper */}
        <Routes>
          <Route index element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/aboutus" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/license-class-a" element={<ClassALicense />} />
          <Route exact path="/license-class-d" element={<ClassDLicense />} />
          <Route exact path="/air-break" element={<AirBreak />} />
          <Route exact path="/seminar" element={<Seminar />} />
          <Route exact path="/training_programmes" element={<Training />} />
          <Route exact path="/getting_started" element={<Gettingstarted />} />
          <Route exact path="/funding" element={<Funding />} />
          <Route exact path="/drive_test" element={<DriveTest />} />
          <Route exact path="/ttsao" element={<TTSAO />} />
          <Route exact path="/ontario_safety_league" element={<OntarioLeague />} />
          <Route exact path="/right_responsibility" element={<RightResponsibility />} />
          <Route exact path="/sexual_policy" element={<SexualPolicy />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
