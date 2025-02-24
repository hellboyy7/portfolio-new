import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/home/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Skills from "./Pages/Skills";

import "./App.css";
import { AnimatePresence } from "motion/react";

const App = () => {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/skill" element={<Skills />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
