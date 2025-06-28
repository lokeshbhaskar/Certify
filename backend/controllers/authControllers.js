import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

//Generate JWT token
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// Register Controller
export const registerUser = async (req, res) => {
  try {
    const { name, email, password, profileImageUrl , adminToken } = req.body;

    // check if user exist
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }
 // check if admin token is provided
    let role = 'member';
    if(adminToken === process.env.ADMIN_TOKEN){
      role = 'admin';
    }
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    //create user
    const user = await User.create({
      name,
      email,
      password: hashPassword,
      profileImageUrl,
      role
    });
    // return userdata with jwt
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      profileImageUrl: user.profileImageUrl,
      token: generateToken(user._id),
    });
  } catch (error) {
    console.error("Register Error:", error);
    return res.status(500).json({ msg: "Server error during registration" });
  }
};
//login controller
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // check user
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  //hash password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: " Invalid email or password " });
  }
  //return user data with jwt
  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    profileImageUrl: user.profileImageUrl,
    token: generateToken(user._id),
  });
};

// get user profile controller
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error("Get Profile Error:", error);
    return res.status(500).json({ msg: "Server error while fetching profile" });
  }
};
// Admin login controller
export const adminLogin = async (req, res) => {
  const { token } = req.body;
  //  console.log("Recieved token:", token);
  //  console.log("Expected token:", process.env.ADMIN_TOKEN);
   if (token === process.env.ADMIN_TOKEN) {
       const fakeAdmin = {
      _id: "000000000000000000admin", // valid 24-character dummy ObjectId
      name: "Admin",
      email: "admin@example.com",
      role: "admin",
    };
     // Generate JWT for this fake user
    const jwtToken = jwt.sign({ id: fakeAdmin._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    // console.log("Generated JWT for admin:", jwtToken);
    return res.status(200).json({
      success: true,
      message: "Login successful",
      token: jwtToken,
      user: fakeAdmin,
    });
  }
  return res.status(401).json({ success: false, message: "Invalid admin token" })
}
