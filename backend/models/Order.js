import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [{
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course'
    },
    title: String,
    price: Number,
    quantity: Number
  }],
  totalAmount: Number,
  subtotal: Number,
  gst: Number,
  paymentMethod: {
    type: String,
    enum: ['razorpay', 'card', 'upi'],
    required: true
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'paid', 'failed'],
    default: 'pending'
  },
  orderStatus: {
    type: String,
    enum: ['processing', 'completed', 'cancelled'],
    default: 'processing'
  },
  razorpayOrderId: String,
  razorpayPaymentId: String
}, {
  timestamps: true
});

export default mongoose.model('Order', orderSchema);