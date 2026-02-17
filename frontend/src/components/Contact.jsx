import React, { useState } from 'react';
import { sendContact } from '../api/api';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: null, message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });
    try {
      await sendContact(formData);
      setStatus({ type: 'success', message: 'Thank you! We will get back to you soon.' });
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus({
        type: 'error',
        message: err.response?.data?.message || 'Failed to send message. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            className="form-input"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          {status.message && (
            <p style={{
              marginTop: '1rem',
              color: status.type === 'success' ? '#16a34a' : '#dc2626',
            }}>
              {status.message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
