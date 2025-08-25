// middleware/authMiddleware.js
import jwt from "jsonwebtoken";
import User from "../models/User.js";


export const protect = async (req, res, next) => {
  // console.log("Entered protect middleware");

  let token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    // console.log(" No token provided");
    return res.status(401).json({ message: "Not authorized, token missing" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log("Decoded token:", decoded);

    // Check if token belongs to fake admin first
    if (decoded.id === "000000000000000000admin") {
      req.user = {
        _id: decoded.id,
        name: "Admin",
        email: "admin@example.com",
        role: "admin",
      };
      // console.log("Using hardcoded admin user");
      return next();
    }
    //  Only fetch from DB if not fake admin
    const user = await User.findById(decoded.id).select("-password");
    // console.log(" User from DB:", user);

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user;
    next();
  } catch (err) {
    // console.log(" JWT error:", err.message);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
export const adminOnly = (req, res, next) => {
  // console.log(" Entered adminOnly middleware");
  // console.log("Checking admin access for user:", req.user);

  if (req.user && req.user.role === "admin") {
    return next();
  }

  return res.status(403).json({ message: "Access denied, admin only" });
};
