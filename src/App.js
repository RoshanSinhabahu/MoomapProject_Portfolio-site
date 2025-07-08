import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Problem from './components/Problem';
import Solution from './components/Solution';
import CowImage from './components/CowImage';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import './App.css';


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
      <CowImage />
      <Services />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
      
    </>
  );
}

export default App;
