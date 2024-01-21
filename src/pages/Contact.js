import React from 'react';
import SmilesContact from '../assets/SmilesContact.jpeg';
import '../styles/Contact.css';



function ContactPage() {
  return (
    <div className='contact'>
      <div className='leftSide' style={{ backgroundImage: `url(${SmilesContact})` }}>
        {/* Content for the left side */}
      </div>
      <div className='rightSide'>
        <h1> Contact Us </h1>
        <form id='contact-form' method="POST">
          <label htmlFor='name'>Full Name</label>
          <label name='name' placeholder="Enter full name..." typeof='text' /> 
          <label htmlFor='email'>Email</label>
          <label name='emial' placeholder="Enter email..." typeof='email' />
          <label htmlFor='message'>Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          >
          </textarea>
          <button type="submit"> Send Message</button>

        </form>
      </div>
    </div>
  );
}

export default ContactPage;
