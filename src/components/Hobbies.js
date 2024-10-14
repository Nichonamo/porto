import React from 'react';

const hobbies = ['Reading', 'Coding', 'Gaming', 'Playing music'];

const Hobbies = () => {
  return (
    <section id="hobbies">
      <h2>Hobbies</h2>
      <div className="hobbies-container">
        {hobbies.map((hobby) => (
          <div className="hobby" key={hobby}>
            {hobby}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;
