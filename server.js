// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/shopco", {})
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Cart Schema
const cartSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  items: [
    {
      id: Number,
      name: String,
      size: String,
      color: String,
      price: Number,
      quantity: Number,
      image: String,
    },
  ],
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Cart = mongoose.model("Cart", cartSchema);

// User Schema (for authentication)
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);

// ==================== ROUTES ====================

// Test Route
app.get("/", (req, res) => {
  res.json({ message: "SHOP.CO API is running!" });
});

// ==================== CART ROUTES ====================

// GET - Fetch user's cart
app.get("/api/cart/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    let cart = await Cart.findOne({ userId });

    // If cart doesn't exist, create empty cart
    if (!cart) {
      cart = new Cart({ userId, items: [] });
      await cart.save();
    }

    res.json({
      success: true,
      cart: cart.items,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching cart",
      error: error.message,
    });
  }
});

// POST - Add item to cart
app.post("/api/cart/:userId/add", async (req, res) => {
  try {
    const { userId } = req.params;
    const newItem = req.body;

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, items: [newItem] });
    } else {
      // Check if item already exists
      const existingItemIndex = cart.items.findIndex(
        (item) =>
          item.id === newItem.id &&
          item.size === newItem.size &&
          item.color === newItem.color
      );

      if (existingItemIndex > -1) {
        // Update quantity if item exists
        cart.items[existingItemIndex].quantity += newItem.quantity || 1;
      } else {
        // Add new item
        cart.items.push(newItem);
      }
    }

    cart.updatedAt = Date.now();
    await cart.save();

    res.json({
      success: true,
      message: "Item added to cart",
      cart: cart.items,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error adding item to cart",
      error: error.message,
    });
  }
});

// PUT - Update item quantity
app.put("/api/cart/:userId/update/:itemId", async (req, res) => {
  try {
    const { userId, itemId } = req.params;
    const { quantity } = req.body;

    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found",
      });
    }

    const itemIndex = cart.items.findIndex(
      (item) => item.id === parseInt(itemId)
    );

    if (itemIndex === -1) {
      return res.status(404).json({
        success: false,
        message: "Item not found in cart",
      });
    }

    // Update quantity (minimum 1)
    cart.items[itemIndex].quantity = Math.max(1, quantity);
    cart.updatedAt = Date.now();
    await cart.save();

    res.json({
      success: true,
      message: "Quantity updated",
      cart: cart.items,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating quantity",
      error: error.message,
    });
  }
});

// DELETE - Remove item from cart
app.delete("/api/cart/:userId/remove/:itemId", async (req, res) => {
  try {
    const { userId, itemId } = req.params;

    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found",
      });
    }

    cart.items = cart.items.filter((item) => item.id !== parseInt(itemId));
    cart.updatedAt = Date.now();
    await cart.save();

    res.json({
      success: true,
      message: "Item removed from cart",
      cart: cart.items,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error removing item",
      error: error.message,
    });
  }
});

// DELETE - Clear entire cart
app.delete("/api/cart/:userId/clear", async (req, res) => {
  try {
    const { userId } = req.params;

    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found",
      });
    }

    cart.items = [];
    cart.updatedAt = Date.now();
    await cart.save();

    res.json({
      success: true,
      message: "Cart cleared",
      cart: cart.items,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error clearing cart",
      error: error.message,
    });
  }
});

// ==================== USER ROUTES (Basic Auth) ====================

// POST - Register user
app.post("/api/auth/register", async (req, res) => {
  try {
    const { email, password, name } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // Create new user (Note: In production, hash the password!)
    const user = new User({ email, password, name });
    await user.save();

    res.json({
      success: true,
      message: "User registered successfully",
      userId: user._id,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error registering user",
      error: error.message,
    });
  }
});

// POST - Login user
app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    res.json({
      success: true,
      message: "Login successful",
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error logging in",
      error: error.message,
    });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
