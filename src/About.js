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
          I am a graduate student at DePaul University, pursuing an MS in Computer Science with a focus on web and mobile application development. With hands-on experience in both academic and professional settings, I have developed robust web and mobile applications using JavaScript, React.js, Swift, and Java. My technical acumen extends to backend development, database management, and cloud technologies, having implemented efficient solutions using REST APIs, MongoDB, and Firebase.
          <p>
          In my role as a Course Online Technician at DePaul University, I streamlined processes, optimized website performance, and resolved technical issues, maintaining a 99.9% uptime for classroom monitoring systems. Previously, at Accenture, I engineered client-focused applications and automated CI/CD pipelines, enhancing deployment efficiency by 30%.
          </p>
          <p>
          I thrive on creating user-centric, responsive applications and have a passion for tackling complex problems through innovative software solutions. I am actively seeking full-time opportunities in software development, where I can leverage my skills in building high-quality, scalable applications. Let's connect!          </p>
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
