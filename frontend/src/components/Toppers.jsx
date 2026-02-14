import React from 'react';
import { FaTrophy, FaGraduationCap, FaQuoteLeft, FaStar, FaChalkboardTeacher } from 'react-icons/fa';
import './Toppers.css';

const Toppers = () => {
  const toppers = [
    {
      id: 1,
      name: 'राहुल शर्मा',
      exam: 'JEE Advanced',
      rank: 1,
      year: 2023,
      story: 'PW की मदद से मैंने JEE Advanced में AIR 1 प्राप्त किया। विशेष रूप से Physics और Chemistry के concepts को समझने में PW के teachers ने बहुत मदद की।',
      image: '👨‍🎓',
      color: '#FF6B6B'
    },
    {
      id: 2,
      name: 'प्रिया पटेल',
      exam: 'NEET UG',
      rank: 3,
      year: 2023,
      story: 'फिजिक्स वालेह के शिक्षकों ने मेरी NEET तैयारी को आसान बना दिया। Daily live classes और doubt solving sessions बहुत helpful थे।',
      image: '👩‍🎓',
      color: '#4ECDC4'
    },
    {
      id: 3,
      name: 'अमित कुमार',
      exam: 'UPSC CSE',
      rank: 12,
      year: 2022,
      story: 'UPSC में सफलता के लिए PW का करंट अफेयर्स कोर्स बहुत उपयोगी था। Answer writing practice और mock interviews ने confidence बढ़ाया।',
      image: '👨‍💼',
      color: '#FFD166'
    },
    {
      id: 4,
      name: 'सोनल सिंह',
      exam: 'SSC CGL',
      rank: 5,
      year: 2023,
      story: 'SSC CGL की तैयारी में PW के मॉक टेस्ट ने मुझे बहुत मदद की। Time management और accuracy improve करने में बहुत useful थे।',
      image: '👩‍💼',
      color: '#06D6A0'
    }
  ];

  const achievements = [
    { count: '5000+', label: 'Top 100 Rankers', icon: '🏆' },
    { count: '10000+', label: 'Selection in Govt Jobs', icon: '💼' },
    { count: '2000+', label: 'Medical College Selections', icon: '🏥' },
    { count: '95%', label: 'Success Rate', icon: '📈' }
  ];

  return (
    <section className="toppers-section">
      <div className="container">
        <div className="section-header">
          <h2>हमारे टॉपर्स</h2>
          <p>PW के मेधावी छात्र जिन्होंने राष्ट्रीय स्तर पर सफलता प्राप्त की</p>
        </div>

        <div className="toppers-grid">
          {toppers.map(topper => (
            <div className="topper-card" key={topper.id}>
              <div className="topper-header">
                <div className="topper-image" style={{ backgroundColor: topper.color }}>
                  {topper.image}
                </div>
                <div className="topper-rank">
                  <FaTrophy />
                  <span>Rank {topper.rank}</span>
                </div>
              </div>
              
              <div className="topper-body">
                <h3>{topper.name}</h3>
                <div className="topper-exam">
                  <FaGraduationCap />
                  <span>{topper.exam} - {topper.year}</span>
                </div>
                
                <div className="topper-quote">
                  <FaQuoteLeft className="quote-icon" />
                  <p>{topper.story}</p>
                </div>
                
                <div className="topper-stats">
                  <div className="stat">
                    <span className="stat-value">4.9</span>
                    <span className="stat-label">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">500+</span>
                    <span className="stat-label">Hours</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">100%</span>
                    <span className="stat-label">Completion</span>
                  </div>
                </div>
              </div>
              
              <div className="topper-footer">
                <button className="btn-story">
                  Success Story
                </button>
                <button className="btn-mentorship">
                  <FaChalkboardTeacher /> Book Mentorship
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="achievements-section">
          <h3 className="achievements-title">हमारी उपलब्धियाँ</h3>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div className="achievement-card" key={index}>
                <div className="achievement-icon">
                  {achievement.icon}
                </div>
                <div className="achievement-content">
                  <h4>{achievement.count}</h4>
                  <p>{achievement.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Toppers;