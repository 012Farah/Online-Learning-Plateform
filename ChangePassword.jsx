import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { FaEye, FaEyeSlash, FaLock } from 'react-icons/fa';
import './ChangePassword.css';

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false
  });
  const [requirements, setRequirements] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false,
    different: false
  });

  const togglePasswordVisibility = (field) => {
    setShowPasswords(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const validatePassword = (password) => {
    const currentRequirements = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /\d/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      different: password !== formData.currentPassword
    };
    setRequirements(currentRequirements);
    return Object.values(currentRequirements).every(Boolean);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (name === 'newPassword') {
      validatePassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validatePassword(formData.newPassword) && formData.newPassword === formData.confirmPassword) {
      // Handle password update logic here
      console.log('Password update successful');
    }
  };

  return (
    <div className="change-password-container">
      <div className="lock-icon">
        <FaLock size={24} />
      </div>
      <h2>Change Your Password</h2>
      <Form onSubmit={handleSubmit}>
        <div className="password-field">
          <Form.Label>Current Password</Form.Label>
          <div className="password-input-container">
            <Form.Control
              type={showPasswords.current ? "text" : "password"}
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
              placeholder="Enter current password"
            />
            <button
              type="button"
              className="toggle-visibility"
              onClick={() => togglePasswordVisibility('current')}
            >
              {showPasswords.current ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        <div className="password-field">
          <Form.Label>New Password</Form.Label>
          <div className="password-input-container">
            <Form.Control
              type={showPasswords.new ? "text" : "password"}
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              placeholder="Enter new password"
            />
            <button
              type="button"
              className="toggle-visibility"
              onClick={() => togglePasswordVisibility('new')}
            >
              {showPasswords.new ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        <div className="password-field">
          <Form.Label>Confirm New Password</Form.Label>
          <div className="password-input-container">
            <Form.Control
              type={showPasswords.confirm ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm new password"
            />
            <button
              type="button"
              className="toggle-visibility"
              onClick={() => togglePasswordVisibility('confirm')}
            >
              {showPasswords.confirm ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        <div className="requirements-section">
          <div className="requirements-header">
            <span className="info-icon">ⓘ</span>
            Password Requirements
          </div>
          <ul className="requirements-list">
            <li className={requirements.length ? 'met' : ''}>
              <span className="requirement-circle"></span>
              At least 8 characters long
            </li>
            <li className={requirements.uppercase ? 'met' : ''}>
              <span className="requirement-circle"></span>
              Contains uppercase letter
            </li>
            <li className={requirements.lowercase ? 'met' : ''}>
              <span className="requirement-circle"></span>
              Contains lowercase letter
            </li>
            <li className={requirements.number ? 'met' : ''}>
              <span className="requirement-circle"></span>
              Contains a number
            </li>
            <li className={requirements.special ? 'met' : ''}>
              <span className="requirement-circle"></span>
              Contains special character
            </li>
            <li className={requirements.different ? 'met' : ''}>
              <span className="requirement-circle"></span>
              Different from current password
            </li>
          </ul>
        </div>

        <Button 
          type="submit" 
          className="update-button"
          variant="custom"
          disabled={!Object.values(requirements).every(Boolean)}
        >
          Update Password
        </Button>
      </Form>
    </div>
  );
};

export default ChangePassword; 