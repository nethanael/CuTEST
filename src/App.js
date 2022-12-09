import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import NotFound from './components/notfound';
import Header from './components/header';
import Footer from './components/footer';
import NavBar from './components/navBar';
import MenuADSL from './components/menuADSL';
import MenuVDSL from './components/menuVDSL';
import './App.css';
import ADSLSamsung from './components/adsl_samsung';
import ADSLImap from './components/adsl_imap';
import ADSLNam from './components/adsl_nam';
import ADSLMsanHuawei from './components/adsl_msan_huawei';
import ADSLMsanCalix from './components/adsl_msan_calix';
import VDSLMsanCalix from './components/vdsl_msan_calix';
import VDSLMsanHuawei from './components/vdsl_msan_huawei';

function App() {
  return (
    <div className="container is-max-desktop mi_cont">
      <Header />
      <Router>
      <NavBar />
        <Routes>
          <Route path="/cutest/" element={<Home />} />
          <Route path="/cutest/adsl" element={<MenuADSL/>} />
          <Route path="/cutest/vdsl" element={<MenuVDSL />} />
          <Route path="/cutest/about" element={<About />} />
          <Route path="/cutest/adsl_samsung" element={<ADSLSamsung />} />
          <Route path="/cutest/adsl_imap" element={<ADSLImap />} />
          <Route path="/cutest/adsl_nam" element={<ADSLNam />} />
          <Route path="/cutest/adsl_msan_huawei" element={<ADSLMsanHuawei />} />
          <Route path="/cutest/adsl_msan_calix" element={<ADSLMsanCalix />} />
          <Route path="/cutest/vdsl_msan_calix" element={<VDSLMsanCalix />} />
          <Route path="/cutest/vdsl_msan_huawei" element={<VDSLMsanHuawei />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
