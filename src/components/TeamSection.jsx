import React, { useRef, useEffect, useState } from 'react';

const teamMembers = [
  { name: 'Kavith', role: 'Team Head', image: '/Team/Kavith.jpeg' },
  { name: 'Shashika', role: 'APP Developer', image: '/Team/Sashika.jpeg' },
  { name: 'Roshan', role: 'Frontend Developer', image: '/Team/Roshan.jpeg' },
  { name: 'Imalka', role: 'Backend Developer', image: '/Team/Imalka.jpeg' },
  { name: 'Naduni', role: 'Documentation Specialist', image: '/Team/Naduni.jpeg' },
  { name: 'Yohan', role: 'Database Administrator', image: '/Team/Yohan.jpeg' },
  { name: 'Chrishen', role: 'UI/UX Designer', image: '/Team/Chrishen.jpeg' },
];

function TeamSection() {
  const carouselRef = useRef(null);
  const scrollIntervalRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const autoScrollSpeed = 1.5;
  const autoScrollIntervalTime = 20;
  const fastScrollAmount = 700;

  const startAutoScroll = () => {
    if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current);

    scrollIntervalRef.current = setInterval(() => {
      if (carouselRef.current && !isHovering) {
        const { scrollWidth, scrollLeft } = carouselRef.current;
        const singleSetWidth = scrollWidth / 2;

        if (scrollLeft >= singleSetWidth) {
          carouselRef.current.scrollLeft = 0;
        } else {
          carouselRef.current.scrollLeft += autoScrollSpeed;
        }
      }
    }, autoScrollIntervalTime);
  };

  const stopAutoScroll = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = null;
    }
  };

  useEffect(() => {
    if (!isHovering) {
      startAutoScroll();
    } else {
      stopAutoScroll();
    }

    return () => stopAutoScroll();
  }, [isHovering]);

  const scrollLeftFaster = () => {
    if (carouselRef.current) {
      stopAutoScroll();
      const { scrollLeft, scrollWidth } = carouselRef.current;
      const singleSetWidth = scrollWidth / 2;

      if (scrollLeft - fastScrollAmount <= 0) {
        carouselRef.current.scrollLeft = singleSetWidth + scrollLeft;
      }

      carouselRef.current.scrollBy({
        left: -fastScrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const scrollRightFaster = () => {
    if (carouselRef.current) {
      stopAutoScroll();
      const { scrollLeft, scrollWidth } = carouselRef.current;
      const singleSetWidth = scrollWidth / 2;

      if (scrollLeft + fastScrollAmount >= singleSetWidth) {
        carouselRef.current.scrollLeft = scrollLeft - singleSetWidth;
      }

      carouselRef.current.scrollBy({
        left: fastScrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="Team-Section" className="team-section">
      <div className="container">
        <h2 className="section-title">The Minds Behind the Mission</h2>

        <div className="carousel-wrapper">
          <div
            ref={carouselRef}
            className="carousel"
          >
            <div className="carousel-track">
              {[...teamMembers, ...teamMembers].map((member, index) => (
                <div
                  className="team-member"
                  key={index}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <div className="profile-image-wrapper">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="profile-image"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://placehold.co/150x150/CCCCCC/333333?text=${member.name.charAt(0)}`;
                      }}
                    />
                  </div>
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          <button onClick={scrollLeftFaster} className="nav-button left">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>
          <button onClick={scrollRightFaster} className="nav-button right">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;