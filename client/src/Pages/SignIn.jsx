import { useState } from 'react';

const SignIn = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.email.includes('@')) {
      setMessage({ text: '❌ Please enter a valid email', type: 'error' });
    } else if (formData.password.length < 6) {
      setMessage({ text: '❌ Password must be at least 6 characters', type: 'error' });
    } else {
      setMessage({ text: '✅ Login successful!', type: 'success' });
      console.log(formData);
    }

    setTimeout(() => setMessage({ text: '', type: '' }), 3000);
  };

  return (
    <div className="signin-page">
      <div className="signin-container">
        <h1 className="signin-title">Login</h1>
        
        {message.text && (
          <div className={`signin-message ${message.type}`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="signin-form">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="signin-input"
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
          
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="signin-input"
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            required
          />
          
          <button type="submit" className="signin-button">
            Sign In
          </button>
        </form>

        <div className="signin-links">
          <a href="/forget-password" className="signin-link">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

  