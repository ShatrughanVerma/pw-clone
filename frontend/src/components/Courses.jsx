import React, { useState } from 'react';
import { FaStar, FaClock, FaUsers, FaBookOpen, FaShoppingCart } from 'react-icons/fa';
import './Courses.css';

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'medical', name: 'Medical' },
    { id: 'civil_services', name: 'Civil Services' },
    { id: 'banking', name: 'Banking' },
    { id: 'govt_exams', name: 'Government Exams' }
  ];

  const courses = [
    {
      id: 1,
      title: 'JEE Main & Advanced',
      category: 'engineering',
      description: 'Complete preparation for JEE exams with Physics, Chemistry, and Mathematics',
      duration: '12 Months',
      price: '₹12,999',
      originalPrice: '₹15,999',
      rating: 4.8,
      students: '25,000+',
      features: ['Live Classes', 'Mock Tests', 'Doubt Support', 'Study Material'],
      color: '#FF6B6B',
      icon: '⚛️'
    },
    {
      id: 2,
      title: 'NEET UG',
      category: 'medical',
      description: 'Complete NEET UG preparation with expert faculty',
      duration: '12 Months',
      price: '₹14,999',
      originalPrice: '₹17,999',
      rating: 4.9,
      students: '32,000+',
      features: ['Video Lectures', 'Previous Year Papers', 'Mock Tests', 'Anatomy Charts'],
      color: '#4ECDC4',
      icon: '🩺'
    },
    {
      id: 3,
      title: 'UPSC CSE',
      category: 'civil_services',
      description: 'Comprehensive UPSC Civil Services Examination preparation',
      duration: '18 Months',
      price: '₹24,999',
      originalPrice: '₹29,999',
      rating: 4.7,
      students: '15,000+',
      features: ['GS Papers', 'Optional Subjects', 'Current Affairs', 'Answer Writing'],
      color: '#FFD166',
      icon: '🏛️'
    },
    {
      id: 4,
      title: 'Banking Exams',
      category: 'banking',
      description: 'Preparation for SBI, IBPS and other banking exams',
      duration: '6 Months',
      price: '₹8,999',
      originalPrice: '₹11,999',
      rating: 4.6,
      students: '45,000+',
      features: ['Quantitative Aptitude', 'Reasoning', 'English', 'General Awareness'],
      color: '#06D6A0',
      icon: '💰'
    },
    {
      id: 5,
      title: 'SSC CGL',
      category: 'govt_exams',
      description: 'Complete SSC Combined Graduate Level exam preparation',
      duration: '8 Months',
      price: '₹7,999',
      originalPrice: '₹9,999',
      rating: 4.5,
      students: '38,000+',
      features: ['Tier-1 & Tier-2', 'Mock Test Series', 'Study Notes', 'Online Tests'],
      color: '#118AB2',
      icon: '📋'
    },
    {
      id: 6,
      title: 'GATE',
      category: 'engineering',
      description: 'Graduate Aptitude Test in Engineering preparation',
      duration: '10 Months',
      price: '₹15,999',
      originalPrice: '₹19,999',
      rating: 4.8,
      students: '22,000+',
      features: ['Technical Subjects', 'Practice Sessions', 'Previous Year Papers', 'Mock Tests'],
      color: '#EF476F',
      icon: '🎓'
    }
  ];

  const filteredCourses = activeCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  return (
    <section className="courses-section">
      <div className="container">
        <div className="section-header">
          <h2>हमारे कोर्सेज</h2>
          <p>आपकी परीक्षा तैयारी के लिए व्यापक कोर्सेज</p>
        </div>

        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="courses-grid">
          {filteredCourses.map(course => (
            <div className="course-card" key={course.id}>
              <div className="course-header" style={{ backgroundColor: course.color }}>
                <div className="course-icon">{course.icon}</div>
                <div className="course-badge">Bestseller</div>
              </div>
              
              <div className="course-body">
                <h3>{course.title}</h3>
                <p className="course-description">{course.description}</p>
                
                <div className="course-features">
                  <div className="feature">
                    <FaClock />
                    <span>{course.duration}</span>
                  </div>
                  <div className="feature">
                    <FaUsers />
                    <span>{course.students}</span>
                  </div>
                  <div className="feature">
                    <FaStar />
                    <span>{course.rating}</span>
                  </div>
                </div>

                <div className="course-features-list">
                  {course.features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <FaBookOpen />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="course-footer">
                <div className="course-price">
                  <span className="current-price">{course.price}</span>
                  <span className="original-price">{course.originalPrice}</span>
                  <span className="discount">20% OFF</span>
                </div>
                <button className="enroll-btn">
                  <FaShoppingCart /> Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all-courses">
          <button className="btn-view-all">
            View All Courses →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;