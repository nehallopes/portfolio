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
          I’m a passionate software developer with a master’s in Computer Science from DePaul University, dedicated to building high-quality, user-centered applications. With hands-on experience in both web and mobile development, I’ve developed scalable and efficient systems using a range of modern technologies, including React, JavaScript, and Swift. At DePaul, I contributed to ensuring the seamless functioning of our classroom monitoring platform, boosting performance and user experience through strategic optimizations. My time at Accenture further strengthened my technical foundation, where I designed responsive applications, automated CI/CD processes, and collaborated in Agile environments to meet ambitious project goals.
          </p>
          <p>
          Driven by a commitment to continuous improvement, I excel at turning complex problems into intuitive solutions. I thrive in collaborative settings, mentoring peers, and promoting best practices in code quality, testing, and deployment. I’m excited to bring my skills in front-end and full-stack development to a forward-thinking team and contribute to impactful projects that make a difference.
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
