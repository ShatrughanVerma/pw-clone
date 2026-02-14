import Course from '../models/Course.js';

// @desc    Get all courses
// @route   GET /api/courses
export const getCourses = async (req, res) => {
  try {
    const { category, search } = req.query;
    let query = { isPublished: true };

    if (category && category !== 'all') {
      query.category = category;
    }

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    const courses = await Course.find(query).sort({ createdAt: -1 });

    res.json({
      success: true,
      count: courses.length,
      courses
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Get single course
// @route   GET /api/courses/:id
export const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    
    if (!course) {
      return res.status(404).json({
        success: false,
        message: 'Course not found'
      });
    }

    res.json({
      success: true,
      course
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Seed courses (for development)
// @route   POST /api/courses/seed
export const seedCourses = async (req, res) => {
  try {
    const mockCourses = [
      {
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
      }
    ];

    await Course.deleteMany({});
    const courses = await Course.insertMany(mockCourses);

    res.status(201).json({
      success: true,
      message: 'Courses seeded successfully',
      courses
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};