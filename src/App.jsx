// import React, { useState, useEffect } from 'react';
// import { DotLoader } from 'react-spinners';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import SocialLinks from './components/SocialLinks';
import Works from './components/Works';
import 'focus-visible/dist/focus-visible';

function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const handleLoad = () => {
  //     setLoading(false);
  //   };

  //   window.addEventListener('load', handleLoad);

  //   return () => {
  //     window.removeEventListener('load', handleLoad);
  //   };
  // }, []);

  return (
    // <div>
    //   {loading ? (
    //     <div className='DotLoader'>
    //       <DotLoader loading={loading} size={150} color={'#036977'} />
    //     </div>
    //   ) : (
    //     <>
    //       <NavBar />
    //       <Home />
    //       <About />
    //       <Portfolio />
    //       <Experience />
    //       <Works />
    //       <Contact />
    //       <SocialLinks />
    //     </>
    //   )}
    // </div>
    <div>
    <>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Works />
      <Contact />
      <SocialLinks />
    </>
</div>
  );
}

export default App;
