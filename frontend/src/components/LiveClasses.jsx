import React from 'react';
import { FaPlay, FaCalendarAlt, FaChalkboardTeacher, FaUserFriends, FaRegClock } from 'react-icons/fa';
import './LiveClasses.css';

const LiveClasses = () => {
  const liveClasses = [
    {
      id: 1,
      subject: 'Physics - Thermodynamics',
      teacher: 'Alakh Pandey',
      time: 'Live Now',
      duration: '1h 30m',
      students: '2.5k watching',
      status: 'live',
      topic: 'Laws of Thermodynamics and Applications',
      color: '#FF6B6B'
    },
    {
      id: 2,
      subject: 'Chemistry - Organic Chemistry',
      teacher: 'Neeraj Chauhan',
      time: 'Starting in 30m',
      duration: '2h',
      students: '1.8k registered',
      status: 'upcoming',
      topic: 'Named Reactions and Mechanisms',
      color: '#4ECDC4'
    },
    {
      id: 3,
      subject: 'Mathematics - Calculus',
      teacher: 'Rajesh Kumar',
      time: 'Tomorrow, 10 AM',
      duration: '2h 15m',
      students: '3.2k registered',
      status: 'upcoming',
      topic: 'Differential Equations',
      color: '#FFD166'
    },
    {
      id: 4,
      subject: 'Biology - Genetics',
      teacher: 'Sunita Yadav',
      time: 'Today, 4 PM',
      duration: '1h 45m',
      students: '1.5k registered',
      status: 'live',
      topic: 'Mendelian Genetics',
      color: '#06D6A0'
    }
  ];

  const upcomingClasses = [
    { id: 1, subject: 'Physics', topic: 'Optics', time: '10:00 AM', date: 'Today' },
    { id: 2, subject: 'Chemistry', topic: 'Chemical Kinetics', time: '2:00 PM', date: 'Today' },
    { id: 3, subject: 'Mathematics', topic: 'Probability', time: '5:00 PM', date: 'Today' },
    { id: 4, subject: 'Biology', topic: 'Ecology', time: '7:00 PM', date: 'Today' }
  ];

  return (
    <section className="live-classes-section">
      <div className="container">
        <div className="section-header">
          <h2>लाइव क्लासेज</h2>
          <p>विशेषज्ञ शिक्षकों के साथ इंटरएक्टिव लाइव क्लासेज में शामिल हों</p>
        </div>

        <div className="live-classes-container">
          <div className="live-classes-grid">
            {liveClasses.map(cls => (
              <div className="live-class-card" key={cls.id}>
                <div className="class-header" style={{ backgroundColor: cls.color }}>
                  <div className="class-status">
                    <span className={`status-badge ${cls.status}`}>
                      {cls.status === 'live' ? 'LIVE' : 'UPCOMING'}
                    </span>
                    <span className="class-duration">
                      <FaRegClock /> {cls.duration}
                    </span>
                  </div>
                  <h3 className="class-subject">{cls.subject}</h3>
                  <p className="class-topic">{cls.topic}</p>
                </div>
                
                <div className="class-body">
                  <div className="teacher-info">
                    <FaChalkboardTeacher />
                    <span>{cls.teacher}</span>
                  </div>
                  
                  <div className="class-details">
                    <div className="detail">
                      <FaCalendarAlt />
                      <span>{cls.time}</span>
                    </div>
                    <div className="detail">
                      <FaUserFriends />
                      <span>{cls.students}</span>
                    </div>
                  </div>
                  
                  <div className="class-actions">
                    <button className={`join-btn ${cls.status}`}>
                      <FaPlay /> {cls.status === 'live' ? 'Join Now' : 'Set Reminder'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="upcoming-classes">
            <h3 className="upcoming-title">आगामी क्लासेज</h3>
            <div className="upcoming-list">
              {upcomingClasses.map(cls => (
                <div className="upcoming-item" key={cls.id}>
                  <div className="upcoming-time">
                    <span className="time">{cls.time}</span>
                    <span className="date">{cls.date}</span>
                  </div>
                  <div className="upcoming-details">
                    <h4>{cls.subject}</h4>
                    <p>{cls.topic}</p>
                  </div>
                  <button className="notify-btn">
                    Notify Me
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="schedule-section">
          <button className="btn-schedule">
            View Complete Schedule →
          </button>
        </div>
      </div>
    </section>
  );
};

export default LiveClasses;