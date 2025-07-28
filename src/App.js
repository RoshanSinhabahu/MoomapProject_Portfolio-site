import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Aim from './components/Aim';
import StatsSection from './components/StatsSection';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// ==== Manrope (100 to 900) ====
import '@fontsource/manrope/200.css';
import '@fontsource/manrope/300.css';
import '@fontsource/manrope/400.css';
import '@fontsource/manrope/500.css';
import '@fontsource/manrope/600.css';
import '@fontsource/manrope/700.css';
import '@fontsource/manrope/800.css';

// ==== Raleway (100 to 900) ====
import '@fontsource/raleway/100.css';
import '@fontsource/raleway/200.css';
import '@fontsource/raleway/300.css';
import '@fontsource/raleway/400.css';
import '@fontsource/raleway/500.css';
import '@fontsource/raleway/600.css';
import '@fontsource/raleway/700.css';
import '@fontsource/raleway/800.css';
import '@fontsource/raleway/900.css';

// ==== Saira (100 to 900) ====
import '@fontsource/saira/100.css';
import '@fontsource/saira/200.css';
import '@fontsource/saira/300.css';
import '@fontsource/saira/400.css';
import '@fontsource/saira/500.css';
import '@fontsource/saira/600.css';
import '@fontsource/saira/700.css';
import '@fontsource/saira/800.css';
import '@fontsource/saira/900.css';





function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 120,
      once: true,
    });
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Aim />
      <StatsSection />
      <Footer />
    </>
  );
}

export default App;
