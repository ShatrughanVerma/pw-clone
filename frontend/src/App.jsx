import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Courses from './components/Courses';
import LiveClasses from './components/LiveClasses';
import Toppers from './components/Toppers';
import StudyMaterial from './components/StudyMaterial';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [courses, setCourses] = useState([]);
  const [liveClasses, setLiveClasses] = useState([]);
  const [toppers, setToppers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock data for initial development
  const mockCourses = [
    {
      id: 1,
      title: "JEE Main & Advanced",
      category: "engineering",
      description: "Complete preparation for JEE exams with Physics, Chemistry, and Mathematics",
      duration: "12 Months",
      price: 12999,
      originalPrice: 15999,
      rating: 4.8,
      students: 25000,
      features: ["Live Classes", "Mock Tests", "Doubt Support", "Study Material"],
      color: "#FF6B6B",
      icon: "⚛️"
    },
    {
      id: 2,
      title: "NEET UG",
      category: "medical",
      description: "Complete NEET UG preparation with expert faculty",
      duration: "12 Months",
      price: 14999,
      originalPrice: 17999,
      rating: 4.9,
      students: 32000,
      features: ["Video Lectures", "Previous Year Papers", "Mock Tests", "Anatomy Charts"],
      color: "#4ECDC4",
      icon: "🩺"
    },
    {
      id: 3,
      title: "UPSC CSE",
      category: "civil_services",
      description: "Comprehensive UPSC Civil Services Examination preparation",
      duration: "18 Months",
      price: 24999,
      originalPrice: 29999,
      rating: 4.7,
      students: 15000,
      features: ["GS Papers", "Optional Subjects", "Current Affairs", "Answer Writing"],
      color: "#FFD166",
      icon: "🏛️"
    },
    {
      id: 4,
      title: "Banking Exams",
      category: "banking",
      description: "Preparation for SBI, IBPS and other banking exams",
      duration: "6 Months",
      price: 8999,
      originalPrice: 11999,
      rating: 4.6,
      students: 45000,
      features: ["Quantitative Aptitude", "Reasoning", "English", "General Awareness"],
      color: "#06D6A0",
      icon: "💰"
    },
    {
      id: 5,
      title: "SSC CGL",
      category: "govt_exams",
      description: "Complete SSC Combined Graduate Level exam preparation",
      duration: "8 Months",
      price: 7999,
      originalPrice: 9999,
      rating: 4.5,
      students: 38000,
      features: ["Tier-1 & Tier-2", "Mock Test Series", "Study Notes", "Online Tests"],
      color: "#118AB2",
      icon: "📋"
    },
    {
      id: 6,
      title: "GATE",
      category: "engineering",
      description: "Graduate Aptitude Test in Engineering preparation",
      duration: "10 Months",
      price: 15999,
      originalPrice: 19999,
      rating: 4.8,
      students: 22000,
      features: ["Technical Subjects", "Practice Sessions", "Previous Year Papers", "Mock Tests"],
      color: "#EF476F",
      icon: "🎓"
    }
  ];

  const mockLiveClasses = [
    {
      id: 1,
      subject: "Physics - Thermodynamics",
      teacher: "Alakh Pandey",
      time: "10:00 AM",
      duration: "1h 30m",
      students: 2500,
      status: "live",
      topic: "Laws of Thermodynamics and Applications"
    },
    {
      id: 2,
      subject: "Chemistry - Organic Chemistry",
      teacher: "Neeraj Chauhan",
      time: "2:00 PM",
      duration: "2h",
      students: 1800,
      status: "upcoming",
      topic: "Named Reactions and Mechanisms"
    },
    {
      id: 3,
      subject: "Mathematics - Calculus",
      teacher: "Rajesh Kumar",
      time: "5:00 PM",
      duration: "2h 15m",
      students: 3200,
      status: "upcoming",
      topic: "Differential Equations"
    },
    {
      id: 4,
      subject: "Biology - Genetics",
      teacher: "Sunita Yadav",
      time: "4:00 PM",
      duration: "1h 45m",
      students: 1500,
      status: "live",
      topic: "Mendelian Genetics"
    }
  ];

  const mockToppers = [
    {
      id: 1,
      name: "Rahul Sharma",
      exam: "JEE Advanced",
      rank: 1,
      year: 2023,
      story: "With PW's help, I achieved AIR 1 in JEE Advanced.",
      image: "👨‍🎓"
    },
    {
      id: 2,
      name: "Priya Patel",
      exam: "NEET UG",
      rank: 3,
      year: 2023,
      story: "Physics Wallah teachers made my NEET preparation easy.",
      image: "👩‍🎓"
    },
    {
      id: 3,
      name: "Amit Kumar",
      exam: "UPSC CSE",
      rank: 12,
      year: 2022,
      story: "PW's current affairs course was very helpful for UPSC success.",
      image: "👨‍💼"
    },
    {
      id: 4,
      name: "Sonal Singh",
      exam: "SSC CGL",
      rank: 5,
      year: 2023,
      story: "PW's mock tests helped me a lot in SSC CGL preparation.",
      image: "👩‍💼"
    }
  ];

  useEffect(() => {
    // Simulate API call delay
    const timer = setTimeout(() => {
      setCourses(mockCourses);
      setLiveClasses(mockLiveClasses);
      setToppers(mockToppers);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <p>Loading Physics Wallah...</p>
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      <main>
        <HeroSection />
        <Courses courses={courses} />
        <LiveClasses liveClasses={liveClasses} />
        <Toppers toppers={toppers} />
        <StudyMaterial />
      </main>
      <Footer />
    </div>
  );
}

export default App;