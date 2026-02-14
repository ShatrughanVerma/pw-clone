import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    unique: true
  },
  category: {
    type: String,
    required: true,
    enum: ['engineering', 'medical', 'civil_services', 'banking', 'govt_exams']
  },
  description: String,
  duration: String,
  price: Number,
  originalPrice: Number,
  discount: Number,
  rating: {
    type: Number,
    default: 4.5
  },
  students: Number,
  features: [String],
  color: String,
  icon: String,
  teacher: {
    name: String,
    experience: String
  },
  isPublished: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Create slug from title
courseSchema.pre('save', function(next) {
  this.slug = this.title.toLowerCase().replace(/[^a-z0-9]/g, '-');
  this.discount = Math.round(((this.originalPrice - this.price) / this.originalPrice) * 100);
  next();
});

export default mongoose.model('Course', courseSchema);