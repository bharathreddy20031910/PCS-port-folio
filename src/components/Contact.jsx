import React, { useState } from 'react';
import './Header/Header.css'
import ContactForm from './ContactForm.json'
import Lottie from 'lottie-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '',phone:'', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    alert('Message sent!');
    setForm({ name: '', email: '',phone:'', message: '' });
  };
  const questions = [
  { q: 'What is your return policy?', a: 'You can return any item within 30 days.' },
  { q: 'How do I contact support?', a: 'Use the contact form above or email us directly.' },
  { q: 'Where are you located?', a: 'We are based in Bangalore, India.' }
];
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='complete'>
        <h1 className='text-5xl p-3  flex text-sky-500 'style={{ fontFamily: 'Bradley Hand, cursive' }}>Connect with us</h1>
  <div className='contact'>
    
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" name="name" value={form.name} onChange={handleChange} required />

      <label>Email:</label>
      <input type="email" name="email" value={form.email} onChange={handleChange} required />

      <label>Phone:</label>
      <input type="integer" name="phone" value={form.phone} onChange={handleChange} required />

      <label>Message:</label>
      <textarea name="message" value={form.message} onChange={handleChange} required />

      <button type="submit">Send</button>
    </form>
    </div>
    <div className='lottie-wrapper'>
    <Lottie animationData={ContactForm} loop={true} />
  </div>
    </div>
    </div>
  );
};

export default Contact;