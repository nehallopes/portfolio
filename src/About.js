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
          As a passionate Computer Science graduate student at DePaul University, I am actively seeking full-time opportunities in Software Development, with a focus on both web and mobile applications. My expertise spans front-end and back-end technologies, with hands-on experience in React.js, Angular, JavaScript, HTML, CSS and Node.js. With 1.5 years at Accenture, I specialized in full-stack development using React.js, Node.js, and MongoDB, designing responsive and high-performing web applications.
          </p>
          <p>
          In addition to my web development experience, I have a strong foundation in iOS and Android development, having built mobile applications with Swift and Java. My technical skills extend to automating CI/CD pipelines, improving deployment efficiency, and delivering secure, scalable solutions in industries such as healthcare, education, and consumer sectors.
          </p>
          <p>
          With a deep understanding of Agile methodologies, I am adept at problem-solving, delivering high-quality solutions, and collaborating effectively with cross-functional teams. I am eager to apply my technical expertise in web and mobile application development to contribute to innovative and impactful projects that drive real-world results.          
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
