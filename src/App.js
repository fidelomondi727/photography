import React from "react";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from "./components/About";
import Gallery from "./components/Gallery";
import datamain from "./components/data";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
       <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery heading={datamain.heading} title={datamain.title} data={datamain.data} />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="footer" element={<Footer />} />
          </Route>  
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
