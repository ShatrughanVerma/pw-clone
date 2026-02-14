import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Page.css';

const AboutPage = () => {
  return (
    <div className="page">
      <Header />
      <main className="page-main">
        <div className="container">
          <h1 className="page-title">हमारे बारे में</h1>
          <p className="page-subtitle">भारत का सबसे भरोसेमंद लर्निंग प्लेटफॉर्म</p>
          
          <div className="about-content">
            <div className="about-card">
              <h2>हमारी कहानी</h2>
              <p>Physics Wallah की शुरुआत 2016 में अलख पांडेय जी ने की थी। आज यह भारत का सबसे बड़ा एड-टेक प्लेटफॉर्म है, जहाँ लाखों छात्र गुणवत्तापूर्ण शिक्षा प्राप्त कर रहे हैं।</p>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <span className="stat-number">10 लाख+</span>
                <span className="stat-label">सफल छात्र</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">1000+</span>
                <span className="stat-label">विशेषज्ञ शिक्षक</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">50+</span>
                <span className="stat-label">कोर्सेज</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">24/7</span>
                <span className="stat-label">सपोर्ट</span>
              </div>
            </div>

            <div className="mission-card">
              <h2>हमारा मिशन</h2>
              <p>"हर छात्र तक गुणवत्तापूर्ण शिक्षा पहुंचाना, चाहे वह कहीं भी हो।"</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;