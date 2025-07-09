import React from 'react';
import bannerImage from '../assets/HeroBanner.png';
import '../App.css';

function Aim() {
  return (
    <section id="aim" className="parallax-section">
  {/* Blurred Background Image */}
  <div
    id="parallax-bg"
    className='zoom-animate'
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `url(${bannerImage})`,
      backgroundSize: '100%',
      backgroundPosition: 'center 0',
      backgroundRepeat: 'repeat',
      backgroundAttachment: 'fixed',
      filter: 'blur(2px)',
      transform: 'scale(1.1)',
      zIndex: 1,
    }}
  />

  {}
  <div
    className="parallax-overlay"
    style={{
      position: 'relative',
      zIndex: 2,
      color: 'white',
      textAlign: 'center',
      padding: '20vh 5vw',
    }}
  >
    <h1 className="parallax-title mb-5">Helping Farmers with Simple Technology</h1>
    <p className="parallax-subtitle">
      This project is about making a cheap, solar-powered collar for cows. It helps farmers see where
      their animals are and check if they are moving normally. The collar charges using sunlight, so there's no need to change
      batteries.
      <br /><br />
      It uses a technology called <b>LoRa</b> to send data wirelessly to a nearby device. Farmers can see the information on
      their phone or computer, and they’ll get alerts if something seems wrong. It’s easy to use and made for farmers in villages.
    </p>
  </div>
</section>
  );
}

export default Aim;
