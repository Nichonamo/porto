import React from 'react';

const contacts = [
  { link: 'mailto:nicholaskentx@gmail.com', image: '/images/gmail.png', alt: 'Email' },
  { link: 'https://www.linkedin.com/in/nicholas-kent-840273330/', image: '/images/linkedin.png', alt: 'LinkedIn' },
  { link: 'https://www.instagram.com/nicholaskent_/', image: '/images/instagram.png', alt: 'Instagram' },
];

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>You can reach me via:</p>
      <div className="contact-container">
        {contacts.map((contact) => (
          <div className="contact-box" key={contact.link} onClick={() => window.open(contact.link, '_blank')}>
            <img src={contact.image} alt={contact.alt} className="contact-icon" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
