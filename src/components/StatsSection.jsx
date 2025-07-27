import { useEffect, useRef, useState } from "react";
import { FaUsers, FaNetworkWired } from "react-icons/fa";
import { GiCow } from "react-icons/gi";

function StatsSection() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [displayedValues, setDisplayedValues] = useState([0, 0, 0]);
  const sectionRef = useRef(null);

  const stats = [
    {
      id: 1,
      icon: <FaUsers size={90} className="icon" />,
      label: "Registered Users",
      value: 125,
    },
    {
      id: 2,
      icon: <GiCow size={90} className="icon" />,
      label: "Cattles Tracked",
      value: 89,
    },
    {
      id: 3,
      icon: <FaNetworkWired size={90} className="icon" />,
      label: "Gateways Online",
      value: 12,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          startCountAnimation();
          setHasAnimated(true);
        }
      },
      { threshold: 0.4 } // adjust visibility percentage
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const startCountAnimation = () => {
    const duration = 2500; // 
    const frameRate = 30;
    const totalFrames = Math.round(duration / (1000 / frameRate));

    stats.forEach((stat, index) => {
      let frame = 0;
      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const value = Math.round(stat.value * progress);
        setDisplayedValues((prev) => {
          const updated = [...prev];
          updated[index] = value;
          return updated;
        });
        if (frame === totalFrames) clearInterval(counter);
      }, 1000 / frameRate);
    });
  };

  return (
    <section className="stats-section" id="stats" ref={sectionRef}>
      <div className="stats-container">
        {stats.map((item, index) => (
          <div key={item.id} className="stat-tile" data-aos="fade-up" data-aos-delay={index * 100}>
            {item.icon}
            <h2 className="stat-value">{displayedValues[index]}</h2>
            <p className="stat-label " data-aos="fade-up" data-aos-offset="-200">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;
