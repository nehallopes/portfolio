import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="overlay"></div>
      <div className="content">
        <h1>Hello, I'm <span className="name-highlight">Nehal Lopes</span></h1>
        <h2>Software Developer</h2>
        <p>Building modern applications with cutting-edge technology.</p>
      </div>
    </div>
  );
};

export default Home;
