import Cart from '../models/Cart.js';
import Course from '../models/Course.js';

// @desc    Get user cart
// @route   GET /api/cart
export const getCart = async (req, res) => {
  try {
    let cart = await Cart.findOne({ user: req.user.id }).populate('items.course');
    
    if (!cart) {
      cart = await Cart.create({
        user: req.user.id,
        items: []
      });
    }

    res.json({
      success: true,
      cart
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Add to cart
// @route   POST /api/cart/add
export const addToCart = async (req, res) => {
  try {
    const { courseId, quantity = 1 } = req.body;

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({
        success: false,
        message: 'Course not found'
      });
    }

    let cart = await Cart.findOne({ user: req.user.id });
    if (!cart) {
      cart = new Cart({ user: req.user.id, items: [] });
    }

    const existingItem = cart.items.find(item => 
      item.course.toString() === courseId
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({
        course: courseId,
        title: course.title,
        price: course.price,
        originalPrice: course.originalPrice,
        icon: course.icon,
        color: course.color,
        quantity
      });
    }

    await cart.save();

    res.json({
      success: true,
      message: 'Added to cart',
      cart
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Remove from cart
// @route   DELETE /api/cart/remove/:courseId
export const removeFromCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id });
    
    if (!cart) {
      return res.status(404).json({
        success: false,
        message: 'Cart not found'
      });
    }

    cart.items = cart.items.filter(item => 
      item.course.toString() !== req.params.courseId
    );

    await cart.save();

    res.json({
      success: true,
      message: 'Removed from cart',
      cart
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};