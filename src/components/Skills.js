import React from 'react';

const skills = [
  { name: 'C/C++', image: '/images/cpp.png' },
  { name: 'Java', image: '/images/java.png' },
  { name: 'Javascript', image: '/images/javascript.png' },
  { name: 'React-JS', image: '/images/react.png' },
];

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill" key={skill.name}>
            <img src={skill.image} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
