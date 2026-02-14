import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Link और useNavigate import करें
import { FiSearch, FiUser, FiShoppingCart, FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import SignupModal from './SignupModal';
import LoginModal from './LoginModal';
import SearchResults from './SearchResults';
import './Header.css';

const Header = ({ courses, liveClasses, toppers }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses', dropdown: true },
    { name: 'Live Classes', path: '/live-classes' },
    { name: 'Test Series', path: '/test-series' },
    { name: 'Study Material', path: '/study-material' },
    { name: 'Results', path: '/results' },
    { name: 'About Us', path: '/about' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setShowSearchResults(true);
    }
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (!query.trim()) {
      setShowSearchResults(false);
    }
  };

  const closeSearch = () => {
    setShowSearchResults(false);
    setSearchQuery('');
  };

  const openLogin = () => {
    setIsLoginOpen(true);
    setIsSignupOpen(false);
  };

  const openSignup = () => {
    setIsSignupOpen(true);
    setIsLoginOpen(false);
  };

  // Handle navigation with keyboard
  const handleKeyPress = (e, path) => {
    if (e.key === 'Enter' || e.key === ' ') {
      navigate(path);
    }
  };

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="contact-info">
              <span><FaWhatsapp /> +91 98765 43210</span>
              <span>📧 support@physicswallah.com</span>
            </div>
            <div className="top-links">
              {/* Scholarship Link */}
              <Link to="/scholarship" className="top-link">Scholarship</Link>
              <Link to="/blog" className="top-link">Blog</Link>
              <Link to="/careers" className="top-link">Careers</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="main-header">
        <div className="container">
          <div className="header-main-content">
            {/* Logo - Home page link */}
            <Link to="/" className="logo-link">
              <div className="logo">
                <div className="logo-icon">PW</div>
                <div className="logo-text">
                  <h1>Physics Wallah</h1>
                  <p>The Heaven of Learning</p>
                </div>
              </div>
            </Link>

            {/* Search Bar */}
            <form className="search-bar" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search courses, teachers, or topics..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button type="submit" className="search-btn">
                <FiSearch />
              </button>
            </form>

            {/* User Actions */}
            <div className="user-actions">
              <button className="cart-btn">
                <FiShoppingCart />
                <span className="cart-count">0</span>
              </button>
              <button 
                className="login-btn" 
                onClick={openLogin}
              >
                <FiUser />
                <span>Login</span>
              </button>
              <button 
                className="signup-btn" 
                onClick={openSignup}
              >
                Sign Up Free
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="mobile-menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
        <div className="container">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.name} className="nav-item">
                {/* Use Link instead of a tag */}
                <Link 
                  to={item.path} 
                  className="nav-link"
                  onClick={() => setIsMenuOpen(false)} // Mobile menu close on click
                >
                  {item.name}
                  {item.dropdown && <FiChevronDown className="dropdown-icon" />}
                </Link>
                
                {/* Dropdown for Courses */}
                {item.dropdown && (
                  <div className="dropdown-menu">
                    <div className="dropdown-content">
                      <h4>Course Categories</h4>
                      <div className="course-categories">
                        <Link to="/courses/engineering" onClick={() => setIsMenuOpen(false)}>
                          ⚛️ Engineering (JEE)
                        </Link>
                        <Link to="/courses/medical" onClick={() => setIsMenuOpen(false)}>
                          🩺 Medical (NEET)
                        </Link>
                        <Link to="/courses/upsc" onClick={() => setIsMenuOpen(false)}>
                          🏛️ UPSC CSE
                        </Link>
                        <Link to="/courses/banking" onClick={() => setIsMenuOpen(false)}>
                          💰 Banking Exams
                        </Link>
                        <Link to="/courses/ssc" onClick={() => setIsMenuOpen(false)}>
                          📋 SSC CGL
                        </Link>
                        <Link to="/courses/gate" onClick={() => setIsMenuOpen(false)}>
                          🎓 GATE
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Search Results Modal */}
      {showSearchResults && (
        <SearchResults 
          query={searchQuery}
          courses={courses}
          liveClasses={liveClasses}
          toppers={toppers}
          onClose={closeSearch}
        />
      )}

      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)}
        onSwitchToSignup={openSignup}
      />

      {/* Signup Modal */}
      <SignupModal 
        isOpen={isSignupOpen} 
        onClose={() => setIsSignupOpen(false)}
        onSwitchToLogin={openLogin}
      />
    </header>
  );
};

export default Header;