import React from 'react';
import { FaPlay, FaDownload, FaUsers, FaChalkboardTeacher, FaAward, FaClock } from 'react-icons/fa';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              <span className="highlight">भारत का सबसे भरोसेमंद</span>
              <br />
              लर्निंग प्लेटफॉर्म
            </h1>
            <p className="subtitle">
              10 लाख+ सफल छात्र, 50+ कोर्सेज, और 1000+ विशेषज्ञ शिक्षकों के साथ 
              अपनी सफलता की यात्रा शुरू करें
            </p>
            
            <div className="hero-buttons">
              <button className="btn btn-primary">
                <FaPlay /> फ्री क्लासेज ज्वाइन करें
              </button>
              <button className="btn btn-secondary">
                <FaDownload /> एप डाउनलोड करें
              </button>
            </div>
            
            <div className="hero-features">
              <div className="feature">
                <div className="feature-icon">
                  <FaUsers />
                </div>
                <div className="feature-text">
                  <h3>10 लाख+</h3>
                  <p>सफल छात्र</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <FaChalkboardTeacher />
                </div>
                <div className="feature-text">
                  <h3>1000+</h3>
                  <p>विशेषज्ञ शिक्षक</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <FaAward />
                </div>
                <div className="feature-text">
                  <h3>50+</h3>
                  <p>कोर्सेज</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <FaClock />
                </div>
                <div className="feature-text">
                  <h3>24/7</h3>
                  <p>डाउट सपोर्ट</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="hero-card">
              <div className="card-header">
                <h3>📡 आज की लाइव क्लासेज</h3>
                <span className="live-badge">LIVE</span>
              </div>
              <div className="card-content">
                <div className="live-class">
                  <div className="class-info">
                    <span className="subject">Physics</span>
                    <span className="time">10:00 AM - 11:30 AM</span>
                  </div>
                  <button className="join-btn">Join Now</button>
                </div>
                <div className="live-class">
                  <div className="class-info">
                    <span className="subject">Chemistry</span>
                    <span className="time">2:00 PM - 3:30 PM</span>
                  </div>
                  <button className="join-btn">Join Now</button>
                </div>
                <div className="live-class">
                  <div className="class-info">
                    <span className="subject">Mathematics</span>
                    <span className="time">5:00 PM - 6:30 PM</span>
                  </div>
                  <button className="join-btn">Join Now</button>
                </div>
              </div>
              <div className="card-footer">
                <a href="/live-classes">View All Classes →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;