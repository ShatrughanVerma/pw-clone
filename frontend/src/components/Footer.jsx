import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaApple, FaGooglePlay } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const quickLinks = [
    {
      title: 'Courses',
      links: ['JEE', 'NEET', 'UPSC', 'Banking', 'SSC', 'GATE', 'Defence', 'State Exams']
    },
    {
      title: 'Resources',
      links: ['Blog', 'Study Material', 'Test Series', 'Success Stories', 'FAQs', 'PW Store']
    },
    {
      title: 'Company',
      links: ['About Us', 'Our Team', 'Careers', 'Contact Us', 'PW Centers', 'Privacy Policy']
    },
    {
      title: 'Legal',
      links: ['Terms of Service', 'Refund Policy', 'Disclaimer', 'Cookie Policy', 'GDPR']
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon">PW</div>
              <div className="logo-text">
                <h2>Physics Wallah</h2>
                <p>The Heaven of Learning</p>
              </div>
            </div>
            <p className="brand-description">
              India's most trusted learning platform for competitive exam preparation. 
              Join millions of successful students who have achieved their dreams with PW.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <FaFacebookF />
              </a>
              <a href="#" className="social-link">
                <FaTwitter />
              </a>
              <a href="#" className="social-link">
                <FaInstagram />
              </a>
              <a href="#" className="social-link">
                <FaYoutube />
              </a>
              <a href="#" className="social-link">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="footer-links-grid">
            {quickLinks.map((section) => (
              <div className="footer-section" key={section.title}>
                <h3 className="section-title">{section.title}</h3>
                <ul className="section-links">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href={`/${link.toLowerCase().replace(' ', '-')}`}>{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="footer-apps">
            <h3 className="apps-title">Download Our App</h3>
            <div className="app-buttons">
              <button className="app-btn google-play">
                <FaGooglePlay />
                <div className="btn-text">
                  <span>GET IT ON</span>
                  <strong>Google Play</strong>
                </div>
              </button>
              <button className="app-btn app-store">
                <FaApple />
                <div className="btn-text">
                  <span>Download on the</span>
                  <strong>App Store</strong>
                </div>
              </button>
            </div>
            <div className="contact-info">
              <h4>Contact Us</h4>
              <p>📞 1800-123-4567</p>
              <p>📧 support@physicswallah.com</p>
              <p>📍 Delhi, India</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>© 2023 Physics Wallah Pvt. Ltd. All rights reserved.</p>
            <div className="bottom-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="/sitemap">Sitemap</a>
            </div>
          </div>
          <div className="made-with">
            <p>Made with ❤️ for Indian Students</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;