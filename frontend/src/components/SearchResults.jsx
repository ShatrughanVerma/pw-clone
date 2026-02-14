import React, { useState, useEffect } from 'react';
import { FiX, FiBook, FiVideo, FiUsers, FiStar, FiClock } from 'react-icons/fi';
import './SearchResults.css';

const SearchResults = ({ query, courses = [], liveClasses = [], toppers = [], onClose }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    setLoading(true);
    
    // Simulate API call delay
    const timer = setTimeout(() => {
      const searchLower = query.toLowerCase();
      let allResults = [];

      // 1. Search in Courses
      const filteredCourses = courses.filter(course => 
        course.title.toLowerCase().includes(searchLower) ||
        course.category.toLowerCase().includes(searchLower) ||
        course.description.toLowerCase().includes(searchLower)
      ).map(course => ({
        ...course,
        type: 'course',
        icon: course.icon || '📚',
        badge: 'Course'
      }));

      // 2. Search in Live Classes
      const filteredClasses = liveClasses.filter(cls =>
        cls.subject.toLowerCase().includes(searchLower) ||
        cls.teacher.toLowerCase().includes(searchLower) ||
        cls.topic.toLowerCase().includes(searchLower)
      ).map(cls => ({
        ...cls,
        type: 'liveclass',
        title: cls.subject,
        category: cls.teacher,
        description: cls.topic,
        icon: '📡',
        badge: cls.status === 'live' ? 'LIVE' : 'Upcoming',
        badgeColor: cls.status === 'live' ? '#dc2626' : '#f59e0b'
      }));

      // 3. Search in Toppers
      const filteredToppers = toppers.filter(topper =>
        topper.name.toLowerCase().includes(searchLower) ||
        topper.exam.toLowerCase().includes(searchLower)
      ).map(topper => ({
        ...topper,
        type: 'topper',
        title: topper.name,
        category: topper.exam,
        description: topper.story,
        icon: topper.image || '👨‍🎓',
        badge: `Rank ${topper.rank}`,
        badgeColor: '#ffd700'
      }));

      // Add results based on active tab
      if (activeTab === 'all' || activeTab === 'courses') {
        allResults = [...allResults, ...filteredCourses];
      }
      if (activeTab === 'all' || activeTab === 'liveclasses') {
        allResults = [...allResults, ...filteredClasses];
      }
      if (activeTab === 'all' || activeTab === 'toppers') {
        allResults = [...allResults, ...filteredToppers];
      }

      setResults(allResults);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [query, courses, liveClasses, toppers, activeTab]);

  // Get counts for tabs
  const getCourseCount = () => {
    return courses.filter(c => 
      c.title.toLowerCase().includes(query.toLowerCase()) ||
      c.category.toLowerCase().includes(query.toLowerCase())
    ).length;
  };

  const getLiveClassCount = () => {
    return liveClasses.filter(c => 
      c.subject.toLowerCase().includes(query.toLowerCase()) ||
      c.teacher.toLowerCase().includes(query.toLowerCase())
    ).length;
  };

  const getTopperCount = () => {
    return toppers.filter(t => 
      t.name.toLowerCase().includes(query.toLowerCase()) ||
      t.exam.toLowerCase().includes(query.toLowerCase())
    ).length;
  };

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.classList.contains('search-results-overlay')) {
        onClose();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [onClose]);

  return (
    <div className="search-results-overlay">
      <div className="search-results-container">
        <div className="search-results-header">
          <div className="search-info">
            <h2>Search Results for "{query}"</h2>
            <p className="results-count">{results.length} results found</p>
          </div>
          <button className="close-btn" onClick={onClose}>
            <FiX />
          </button>
        </div>

        {/* Search Tabs */}
        <div className="search-tabs">
          <button 
            className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All ({results.length})
          </button>
          <button 
            className={`tab-btn ${activeTab === 'courses' ? 'active' : ''}`}
            onClick={() => setActiveTab('courses')}
          >
            Courses ({getCourseCount()})
          </button>
          <button 
            className={`tab-btn ${activeTab === 'liveclasses' ? 'active' : ''}`}
            onClick={() => setActiveTab('liveclasses')}
          >
            Live Classes ({getLiveClassCount()})
          </button>
          <button 
            className={`tab-btn ${activeTab === 'toppers' ? 'active' : ''}`}
            onClick={() => setActiveTab('toppers')}
          >
            Toppers ({getTopperCount()})
          </button>
        </div>

        {/* Search Results */}
        <div className="search-results-body">
          {loading ? (
            <div className="search-loading">
              <div className="spinner"></div>
              <p>Searching...</p>
            </div>
          ) : results.length > 0 ? (
            <div className="results-list">
              {results.map((item, index) => (
                <div key={`${item.type}-${item.id}`} className="result-item">
                  <div className="result-icon" style={{ backgroundColor: getColor(index) }}>
                    {item.icon}
                  </div>
                  <div className="result-info">
                    <div className="result-title">
                      <h3>{item.title || item.subject || item.name}</h3>
                      <span 
                        className="badge" 
                        style={{ 
                          backgroundColor: item.badgeColor ? `${item.badgeColor}20` : '#e0e7ff',
                          color: item.badgeColor || '#4f46e5'
                        }}
                      >
                        {item.badge || item.type}
                      </span>
                    </div>
                    
                    <p className="result-category">
                      {item.category || item.exam || item.teacher}
                    </p>
                    
                    <p className="result-description">
                      {item.description || item.story || item.topic}
                    </p>
                    
                    <div className="result-meta">
                      {item.rating && (
                        <span className="meta-item">
                          <FiStar /> {item.rating}
                        </span>
                      )}
                      {item.students && (
                        <span className="meta-item">
                          <FiUsers /> {item.students.toLocaleString()}+
                        </span>
                      )}
                      {item.duration && (
                        <span className="meta-item">
                          <FiClock /> {item.duration}
                        </span>
                      )}
                      {item.price && (
                        <span className="meta-item price">
                          ₹{item.price.toLocaleString()}
                        </span>
                      )}
                      {item.rank && (
                        <span className="meta-item rank">
                          Rank {item.rank}
                        </span>
                      )}
                    </div>
                    
                    <button className="view-btn">
                      View Details →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <div className="no-results-icon">🔍</div>
              <h3>No results found</h3>
              <p>We couldn't find any matches for "{query}"</p>
              <p className="suggestion">Try different keywords or check your spelling</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Helper function for colors
const getColor = (index) => {
  const colors = ['#FF6B6B', '#4ECDC4', '#FFD166', '#06D6A0', '#118AB2', '#EF476F'];
  return colors[index % colors.length];
};

export default SearchResults;