import React, { useState } from 'react';
import { FiX, FiMail, FiLock } from 'react-icons/fi';
import './LoginModal.css';

const LoginModal = ({ isOpen, onClose, onSwitchToSignup }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    // Clear error for this field
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Login form submitted:', formData);
      alert('Login successful! 🎉\nWelcome back to Physics Wallah!');
      onClose();
      // Reset form
      setFormData({
        email: '',
        password: '',
        rememberMe: false
      });
    }
  };

  const handleForgotPassword = () => {
    alert('Password reset link sent to your email! (Demo)');
  };

  if (!isOpen) return null;

  return (
    <div className="login-modal-overlay" onClick={onClose}>
      <div className="login-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="login-modal-close" onClick={onClose}>
          <FiX />
        </button>

        <div className="login-modal-header">
          <div className="login-modal-logo">PW</div>
          <h2>Welcome Back!</h2>
          <p>Login to continue your learning journey</p>
        </div>

        <form className="login-modal-form" onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="login-form-group">
            <label>
              <FiMail />
              <span>Email Address</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          {/* Password Field */}
          <div className="login-form-group">
            <label>
              <FiLock />
              <span>Password</span>
            </label>
            <div className="login-password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? 'error' : ''}
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="login-form-options">
            <div className="remember-me">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <button 
              type="button" 
              className="forgot-password"
              onClick={handleForgotPassword}
            >
              Forgot Password?
            </button>
          </div>

          {/* Submit Button */}
          <button type="submit" className="login-submit-btn">
            Login
          </button>

          {/* Signup Link */}
          <div className="login-footer">
            <p>
              Don't have an account?{' '}
              <button 
                type="button"
                className="switch-btn"
                onClick={() => {
                  onClose();
                  onSwitchToSignup();
                }}
              >
                Sign Up Free
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;