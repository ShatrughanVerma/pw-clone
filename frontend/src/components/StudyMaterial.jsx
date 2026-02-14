import React from 'react';
import { FaBook, FaFilePdf, FaVideo, FaDownload, FaPrint, FaEye, FaStar } from 'react-icons/fa';
import './StudyMaterial.css';

const StudyMaterial = () => {
  const materials = [
    {
      id: 1,
      type: 'PDF',
      title: 'Physics Formula Sheet',
      subject: 'Physics',
      pages: 50,
      downloads: '10k+',
      rating: 4.8,
      icon: <FaFilePdf />,
      color: '#FF6B6B'
    },
    {
      id: 2,
      type: 'Video',
      title: 'Chemistry Reactions Complete Guide',
      subject: 'Chemistry',
      duration: '2h 30m',
      views: '25k+',
      rating: 4.9,
      icon: <FaVideo />,
      color: '#4ECDC4'
    },
    {
      id: 3,
      type: 'Notes',
      title: 'Mathematics Shortcuts & Tricks',
      subject: 'Mathematics',
      pages: 30,
      downloads: '15k+',
      rating: 4.7,
      icon: <FaBook />,
      color: '#FFD166'
    },
    {
      id: 4,
      type: 'PDF',
      title: 'Biology Diagrams & Charts',
      subject: 'Biology',
      pages: 40,
      downloads: '8k+',
      rating: 4.6,
      icon: <FaFilePdf />,
      color: '#06D6A0'
    }
  ];

  const resources = [
    { id: 1, name: 'Previous Year Papers', count: '500+', icon: '📄', color: '#FF6B6B' },
    { id: 2, name: 'Practice Questions', count: '10,000+', icon: '❓', color: '#4ECDC4' },
    { id: 3, name: 'Mock Tests', count: '200+', icon: '📝', color: '#FFD166' },
    { id: 4, name: 'Revision Notes', count: '1000+', icon: '📒', color: '#06D6A0' },
    { id: 5, name: 'Important Formulas', count: '500+', icon: '🧮', color: '#118AB2' },
    { id: 6, name: 'Solved Examples', count: '2000+', icon: '💡', color: '#EF476F' }
  ];

  return (
    <section className="study-material-section">
      <div className="container">
        <div className="section-header">
          <h2>स्टडी मटेरियल</h2>
          <p>मुफ्त स्टडी मटेरियल और संसाधनों के साथ अपनी तैयारी को बढ़ावा दें</p>
        </div>

        <div className="featured-materials">
          <h3 className="featured-title">Featured Study Material</h3>
          <div className="materials-grid">
            {materials.map(material => (
              <div className="material-card" key={material.id}>
                <div className="material-header" style={{ backgroundColor: material.color }}>
                  <div className="material-icon">
                    {material.icon}
                  </div>
                  <span className="material-type">{material.type}</span>
                  <div className="material-rating">
                    <FaStar />
                    <span>{material.rating}</span>
                  </div>
                </div>
                
                <div className="material-body">
                  <h3>{material.title}</h3>
                  <div className="material-subject">{material.subject}</div>
                  
                  <div className="material-info">
                    {material.pages && (
                      <div className="info-item">
                        <span>Pages:</span>
                        <span>{material.pages}</span>
                      </div>
                    )}
                    {material.duration && (
                      <div className="info-item">
                        <span>Duration:</span>
                        <span>{material.duration}</span>
                      </div>
                    )}
                    <div className="info-item">
                      <span>Downloads/Views:</span>
                      <span>{material.downloads || material.views}</span>
                    </div>
                  </div>
                </div>
                
                <div className="material-actions">
                  <button className="btn-preview">
                    <FaEye /> Preview
                  </button>
                  <button className="btn-download">
                    <FaDownload /> Download
                  </button>
                  <button className="btn-print" title="Print">
                    <FaPrint />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="resources-section">
          <h3 className="resources-title">अन्य संसाधन</h3>
          <div className="resources-grid">
            {resources.map(resource => (
              <div className="resource-card" key={resource.id} style={{ borderTopColor: resource.color }}>
                <div className="resource-icon" style={{ color: resource.color }}>
                  {resource.icon}
                </div>
                <h4>{resource.name}</h4>
                <p>{resource.count} Files</p>
                <button className="btn-resource">
                  Explore
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="material-cta">
          <button className="btn-cta">
            Explore All Study Material →
          </button>
        </div>
      </div>
    </section>
  );
};

export default StudyMaterial;