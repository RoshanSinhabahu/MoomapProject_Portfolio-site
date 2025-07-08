import { useEffect } from 'react';

function ImageSection() {
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY * 0.3; 
      document.getElementById('image-section').style.backgroundPosition = `center ${offset}px`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="image-section" className="m-0 p-0">
    </section>
  );
}

export default ImageSection;
