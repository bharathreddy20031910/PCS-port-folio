import React, { useState } from 'react';
import './Header.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [faqs, setFaqs] = useState([
    {
      question: "What technologies do you use?",
      answer: "I use React, Tailwind CSS, Node.js, MongoDB, and more.",
    },
    {
      question: "How can I contact you?",
      answer: "You can use the contact form on this site or email me directly.",
    },
    {
      question: "What is your return policy?",
      answer: "You can return any item within 30 days.",
    },
  ]);

  const [openIndex, setOpenIndex] = useState(null);
  const [newQuestion, setNewQuestion] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedQuestion, setEditedQuestion] = useState('');
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleAddFAQ = (e) => {
    e.preventDefault();
    if (newQuestion.trim()) {
      setFaqs([...faqs, {
        question: newQuestion.trim(),
        answer: 'Answer will be added soon.',
        isUserAdded: true
      }]);
      setNewQuestion('');
    } else {
      alert("FAQ question can't be empty.");
    }
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setEditedQuestion(faqs[index].question);
  };

  const saveEditedQuestion = (index) => {
    if (editedQuestion.trim()) {
      const updatedFaqs = [...faqs];
      updatedFaqs[index].question = editedQuestion.trim();
      setFaqs(updatedFaqs);
      setEditingIndex(null);
      setEditedQuestion('');
    } else {
      alert("Edited question can't be empty.");
    }
  };

  const deleteFAQ = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this FAQ?");
    if (confirmDelete) {
      setFaqs(faqs.filter((_, i) => i !== index));
    }
  };

  return (
    <div className='complete'>
      <h1 className='text-5xl p-3 text-sky-500 text-center' style={{ fontFamily: 'Bradley Hand, cursive' }}>
        Connect with us
      </h1>

      <div className="contact">

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} required />

            <label>Email:</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required />

            <label>Phone:</label>
            <input type="text" name="phone" value={form.phone} onChange={handleChange} required />

            <label>Message:</label>
            <textarea name="message" value={form.message} onChange={handleChange} required />

            <button type="submit">Send</button>
          </form>
        </div>

        
        <div className="faq-container">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="faq-item"
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                {editingIndex === index ? (
                  <>
                    <input
                      type="text"
                      value={editedQuestion}
                      onChange={(e) => setEditedQuestion(e.target.value)}
                      className="faq-input"
                    />
                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                      <button className="faq-button" onClick={() => saveEditedQuestion(index)}>Save</button>
                      <button className="faq-button" onClick={() => setEditingIndex(null)}>Cancel</button>
                    </div>
                  </>
                ) : (
                  <>
                    <button className="faq-question" onClick={() => toggleFAQ(index)}>
                      {faq.question}
                    </button>
                    {faq.isUserAdded && hoverIndex === index && (
                      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                        <button className="faq-button" onClick={() => startEditing(index)}>Edit</button>
                        <button className="faq-button" onClick={() => deleteFAQ(index)}>Delete</button>
                      </div>
                    )}
                  </>
                )}
                {openIndex === index && (
                  <p className="faq-answer">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>

         
          <form onSubmit={handleAddFAQ} className="faq-form">
            <input
              type="text"
              placeholder="Enter your question"
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
              className="faq-input"
              required
            />
            <button type="submit" className="faq-button">Add FAQ</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
