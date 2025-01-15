import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import "./index.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import AnimatedBackground from "./components/Background";
import Navbar from "./components/Navbar";
import Portofolio from "./Pages/Portofolio";
import WelcomeScreen from "./Pages/WelcomeScreen";
import { AnimatePresence } from 'framer-motion';

const LandingPage = ({ showWelcome, setShowWelcome }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <>
          <Navbar />
          <AnimatedBackground />
          <Home />
          <About />
          <Portofolio />
          <footer>
            <center>
              <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
              <h1 className="Get text-xl pb-5 text-gray-500 text-center dark:text-gray-400">Get In Touch</h1>
              <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
                  138st, Sangkat Teuk Thla, Khan Sensok, Phnom Penh
              </span>
              <a href="https://t.me/Pha_Rie" className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
                  Phone: 0979534329
              </a>
              <a href="tansophary@gmail.com" className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
                  Email: tansophary@gmail.com
              </a>
              
            </center>
          </footer>
        </>
      )}
    </>
  );
};

const ProjectPageLayout = () => (
  <>
    <footer>
      <center>
        <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
        <h1 className="Get text-xl pb-5 text-gray-500 text-center dark:text-gray-400">Get In Touch</h1>
        <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
          138st, Sangkat Teuk Thla, Khan Sensok, Phnom Penh
        </span>
        <a href="https://t.me/Pha_Rie" className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
          Phone: 0979534329
        </a>
        <a href="tansophary@gmail.com" className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
          Email: tansophary@gmail.com
        </a>       
      </center>
    </footer>
  </>
);

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage showWelcome={showWelcome} setShowWelcome={setShowWelcome} />} />
        <Route path="/project/:id" element={<ProjectPageLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;