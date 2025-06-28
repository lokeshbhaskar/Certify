import user from "../models/User.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await user.find().select("-password"); // Exclude password field
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Server error while fetching users" });
  }
}