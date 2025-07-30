import React, { useState } from 'react';
import './Header.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [faqs, setFaqs] = useState([
    {
      question: "What hosting solutions does PCS Global provide?",
      answer: "We offer stable and secure hosting solutions for businesses of all sizes. Whether you're launching a new website or migrating an existing one, our cloud-backed infrastructure ensures maximum uptime and performance.",
    },
    {
      question: "Do you develop custom web applications?",
      answer: "Yes. We build scalable and secure web applications using Java, Python, and the MERN stack. We also support platforms like WordPress, Shopify, and WooCommerce to meet diverse business needs.",
    },
    {
      question: "Can you help with SSL certificate setup and renewal?",
      answer: "Absolutely. We handle the complete SSL process—from installation to timely renewal—so your website stays secure and trusted by users and search engines.",
    },
        {
      question: "What IoT solutions do you offer?",
      answer: "Our IoT services include designing and deploying custom device networks that improve operational efficiency, enable real-time data insights, and automate decision-making processes for businesses.",
    },
    {
      question: "Do you offer legal services for new businesses?",
      answer: "Yes, we assist with legal setup for startups and small businesses, including registering Private Limited and Proprietorship firms, so you can focus on growth while we handle the paperwork.",
    },
        {
      question: "What digital marketing services do you provide?",
      answer: "We create and manage content-driven digital marketing campaigns, including social media marketing, ad creatives, posters, and lead generation to boost your brand’s online presence.",
    },
  ]);

  const [editingIndex, setEditingIndex] = useState(null);
  const [editedQuestion, setEditedQuestion] = useState('');
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  const { name, email, phone, message } = form;
  const data = { name, email, phone, message };

  try {
    const res = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data), // ✅ using correct variable
    });

    const response = await res.json();

    if (res.ok) {
      alert("Message sent successfully!");
      setForm({ name: '', email: '', phone: '', message: '' }); // reset form
    } else {
      alert("Error: " + response.error);
    }
  } catch (error) {
    alert("Network error.");
    console.error(error);
  }
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

  return (
    <div className='complete'>
      <h1 className='text-4xl p-3 text-gray-800 text-center' style={{ fontWeight: 'bold' }}>
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
                    <div className="faq-question">{faq.question}</div>
                    {hoverIndex === index && (
                      <p className="faq-answer">{faq.answer}</p>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;