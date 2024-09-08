import React, { useEffect, useRef, useState } from 'react';
import './About.css';
import profileImage from './Linkedin Photo.png'; 

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true); 
          observer.disconnect();
        }
      },
      {
        threshold: 0.3, 
      }
    );

    if (aboutSectionRef.current) {
      observer.observe(aboutSectionRef.current);
    }

    return () => {
      if (aboutSectionRef.current) {
        observer.unobserve(aboutSectionRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`about-section ${isVisible ? 'fade-in' : ''}`}
      ref={aboutSectionRef}
    >
      <div className="about-image">
        <img src={profileImage} alt="Profile" />
      </div>
      <div className="about-content">
        <h2>About <span>Me</span></h2>
        <div className="about-card">
          <p>
            As a passionate Computer Science graduate student at DePaul University, I am actively seeking full-time opportunities in Software Development with a focus on web and mobile applications. With a solid foundation in React.js, Angular, JavaScript, HTML, CSS, and JSON, I bring 1.5 years of hands-on experience at Accenture, where I specialized in full-stack development using React.js, Node.js, and MySQL. My technical expertise also extends in developing iOS and Android applications with Swift and Java. I am adept at problem-solving, delivering high-quality solutions, and collaborating effectively with cross-functional teams. I am eager to apply my skills and experience to contribute to innovative and impactful projects.
          </p>
        </div>
        <div className="about-buttons">
          <a href="/Nehal Marshal Lopes Resume.pdf" download className="btn">Download Resume</a>
        </div>
      </div>
    </div>
  );
};

export default About;
