
import React, { useState } from 'react';
import './Header.css';

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What technologies do you use?",
      answer: "I use React, Tailwind CSS, Node.js, MongoDB, and more.",
    },
    {
      question: "How can I contact you?",
      answer: "You can use the contact form on this site or email me directly.",
    },
  ]);

  const [openIndex, setOpenIndex] = useState(null);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleAddFAQ = (e) => {
    e.preventDefault();
    if (newQuestion.trim() && newAnswer.trim()) {
      setFaqs([...faqs, { question: newQuestion, answer: newAnswer }]);
      setNewQuestion('');
      setNewAnswer('');
    }
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
 <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
            </button>
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
        <textarea
          placeholder="Enter your answer"
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.target.value)}
          className="faq-textarea"
          required
        />
        <button type="submit" className="faq-button">Add FAQ</button>
      </form>
    </div>
  );
};

export default FAQ;
=======
import React, { useState } from 'react';
import './Header.css';

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What technologies do you use?",
      answer: "I use React, Tailwind CSS, Node.js, MongoDB, and more.",
    },
    {
      question: "How can I contact you?",
      answer: "You can use the contact form on this site or email me directly.",
    },
  ]);

  const [openIndex, setOpenIndex] = useState(null);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleAddFAQ = (e) => {
    e.preventDefault();
    if (newQuestion.trim() && newAnswer.trim()) {
      setFaqs([...faqs, { question: newQuestion, answer: newAnswer }]);
      setNewQuestion('');
      setNewAnswer('');
    }
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
 <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
            </button>
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
        <textarea
          placeholder="Enter your answer"
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.target.value)}
          className="faq-textarea"
          required
        />
        <button type="submit" className="faq-button">Add FAQ</button>
      </form>
    </div>
  );
};

export default FAQ;
>>>>>>> e3db1cc9a680c61042b24e4db72e76ef8043f153
