import React, { useEffect } from 'react';
import './Stars.css';

const Stars = () => {
  useEffect(() => {
    const starField = document.querySelector('.star-field');

    const createStars = () => {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
      star.style.animationDuration = Math.random() * 4 + 3 + 's'; // Random duration between 3s to 7s
      star.style.animationDelay = Math.random() * 2 + 's'; // Random delay to stagger their start time
      starField.appendChild(star);

      // Remove the star after its animation duration
      setTimeout(() => {
        star.remove();
      }, parseFloat(star.style.animationDuration) * 1000);
    };

    // Create stars every 200ms for more stars
    const starInterval = setInterval(createStars, 200);

    // Clear the interval on component unmount
    return () => clearInterval(starInterval);
  }, []);

  return <div className="star-field"></div>;
};

export default Stars;
