import React, { useState } from 'react';
import './portfolio.css';
import portfolioItems from './portfolioItemsData'; 

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filterItems = (category) => {
    setSelectedCategory(category);
  };

  const filteredItems = selectedCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="portfolio-section">
      <div className="portfolio-header">
        <h2>Featured <span>Portfolio</span></h2>
        <ul className="portfolio-filters">
          <li
            className={`filter ${selectedCategory === 'All' ? 'active' : ''}`}
            onClick={() => filterItems('All')}
          >
            All
          </li>
          <li
            className={`filter ${selectedCategory === 'iOS Development' ? 'active' : ''}`}
            onClick={() => filterItems('iOS Development')}
          >
            iOS Development
          </li>
          <li
            className={`filter ${selectedCategory === 'Android Development' ? 'active' : ''}`}
            onClick={() => filterItems('Android Development')}
          >
            Android Development
          </li>
          <li
            className={`filter ${selectedCategory === 'Web Development' ? 'active' : ''}`}
            onClick={() => filterItems('Web Development')}
          >
            Web Development
          </li>
          <li
            className={`filter ${selectedCategory === 'Research' ? 'active' : ''}`}
            onClick={() => filterItems('Research')}
          >
            Research
          </li>
        </ul>
      </div>
      <div className="portfolio-grid">
        {filteredItems.map((item, index) => (
          <div className="portfolio-item" key={index} onClick={() => window.open(item.repoLink, "_blank")}>
            <div className="portfolio-info">
              <h3>{item.title}</h3>
              <p>{item.category}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="icons-section">
        <h3>Technologies & Tools</h3>
        <div className="icons-container">
          <i className="fab fa-js"></i>
          <i className="fab fa-java"></i>
          <i className="fab fa-python"></i>
          <i className="fab fa-html5"></i>
          <i className="fab fa-css3-alt"></i>
          <i className="fab fa-php"></i>
          <i className="fab fa-github"></i>
          <i className="fab fa-docker"></i>
          <i className="fab fa-figma"></i>
          <i className="fab fa-android"></i>
          <i className="fab fa-swift"></i>
          <i className="fab fa-slack"></i>
          <i className="fab fa-jira"></i>
          <i className="fab fa-microsoft"></i>

        </div>
      </div>
    </div>
  );
};

export default Portfolio;
