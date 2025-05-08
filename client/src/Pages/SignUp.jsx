import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      setMessage({ text: '❌ Please enter your name', type: 'error' });
    } else if (!formData.email.includes('@')) {
      setMessage({ text: '❌ Please enter a valid email', type: 'error' });
    } else if (formData.password.length < 6) {
      setMessage({ text: '❌ Password must be at least 6 characters', type: 'error' });
    } else if (formData.password !== formData.confirmPassword) {
      setMessage({ text: '❌ Passwords do not match', type: 'error' });
    } else {
      setMessage({ text: '✅ Account created successfully!', type: 'success' });
      console.log('Form submitted:', formData);
    }

    setTimeout(() => setMessage({ text: '', type: '' }), 3000);
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1 className="auth-title">Create Account</h1>
        
        {message.text && (
          <div className={`auth-message ${message.type}`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="auth-input"
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
          
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="auth-input"
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
          
          <input
            type="password"
            name="password"
            placeholder="Password (min 6 characters)"
            className="auth-input"
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            required
          />
          
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="auth-input"
            onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
            required
          />
          
          <button type="submit" className="auth-button">
            Sign Up
          </button>
        </form>

        <div className="auth-links">
          Already have an account? <Link to="/sign-in" className="auth-link">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;