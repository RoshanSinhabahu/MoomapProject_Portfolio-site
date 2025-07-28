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
