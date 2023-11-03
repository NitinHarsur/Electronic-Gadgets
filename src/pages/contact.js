import React, { useState } from 'react';
import "./contact.css";


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
  };

  return (
    <div className='contact'>
      <h2>Contact Us</h2>
      <br /><br />
      <p>If you have any questions or need assistance, feel free to get in touch with us.</p>
<br /><br />
      <div>
        <h3>Contact Form</h3><br />
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
      <br /><br />
    </div>
  );
}

export default Contact;

