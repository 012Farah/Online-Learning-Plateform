import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'; // Add this import

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!email.includes('@')) {
      setMessage({ text: 'Please enter a valid email', type: 'error' });
    } else {
      console.log('Email submitted:', email);
      setMessage({ 
        text: 'Password reset link sent to your email', 
        type: 'success' 
      });
      setEmail('');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1 className="auth-title">Forgot Password?</h1>
        
        {message.text && (
          <div className={`auth-message ${message.type}`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              id="email"
              className="auth-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="your@email.com"
            />
          </div>
          
          <button type="submit" className="auth-button">
            Send Reset Link
          </button>
        </form>

        <div className="auth-links">
          Remember your password? <Link to="/sign-in" className="auth-link">Sign In</Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;