import React from 'react';

const Navbar = () => {
  const handleBackgroundChange = (sectionId) => {
    const backgrounds = {
      about: 'url("/images/about-bg.jpg")',
      skills: 'url("/images/skills-bg.jpg")',
      projects: 'url("/images/projects-bg.jpg")',
      hobbies: 'url("/images/hobbies-bg.jpg")',
      contact: 'url("/images/contact-bg.jpg")',
    };

    document.body.style.backgroundImage = backgrounds[sectionId] || 'none';
  };

  return (
    <nav>
      <ul>
        {['about', 'skills', 'projects', 'hobbies', 'contact'].map((section) => (
          <li key={section}>
            <a href={`#${section}`} onClick={() => handleBackgroundChange(section)}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
