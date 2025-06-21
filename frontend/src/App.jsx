import React, { useContext, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Result from './pages/Result';
import BuyCredit from './pages/BuyCredit';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Login';
import { AppContext } from './context/AppContext';
import Verify from './pages/Verify';

import AnimatedBackground from './components/AnimatedBackground';

const App = () => {
  const { showLogin } = useContext(AppContext);
  const [isMobile, setIsMobile] = useState(null); // initially null (not known)

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // 👇 Prevent any render until isMobile is determined
  if (isMobile === null) return null;

  return (
    <>
      {!isMobile && <AnimatedBackground />}
      <div className='relative z-10 px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen'>
        <ToastContainer position='bottom-right' />
        <Navbar />
        {showLogin && <Login />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/result' element={<Result />} />
          <Route path='/buy' element={<BuyCredit />} />
          <Route path='/verify' element={<Verify />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
