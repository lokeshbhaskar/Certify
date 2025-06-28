import Task from "../models/Task.js";
import User from "../models/User.js";

// 🟢 1. Get all tasks for a specific user
export const getTasksByUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const tasks = await Task.find({ user: userId }).populate(
      "user",
      "name email"
    );
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Error getting tasks:", error);
    res.status(500).json({ message: "Failed to fetch tasks for user" });
  }
};

// 🟢 2. Update task status (e.g., mark as completed)
export const updateTaskStatus = async (req, res) => {
  const { taskId } = req.params;
  const { status } = req.body;

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      { status },
      { new: true }
    );
    if (!updatedTask)
      return res.status(404).json({ message: "Task not found" });

    res.status(200).json(updatedTask);
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ message: "Failed to update task status" });
  }
};

// task submission controller
export const submitTask = async (req, res) => {
  const { github, liveLink, taskField } = req.body;
  const pdfUrl = req.file?.path; // Assuming you're using multer for file uploads
  if (!github || !liveLink || !pdfUrl || !taskField) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const userId = req.user._id; // Assuming user ID is available in req.user
  try {
    const newSubmission = new Task({
      github,
      liveLink,
      pdfUrl,
      user: userId,
      taskField,
    });
    await newSubmission.save();
    res.status(201).json(newSubmission);
  } catch (error) {
    console.error("Error submitting task:", error);
    res.status(500).json({ message: "Failed to submit task" });
  }
};

// 🟢 3. Get all users with their task statuses for admin view
export const getUsersWithTaskStatuses = async (req, res) => {
  // try {
  //   const users = await User.find().lean()
  //   const userWithStatus = await Promise.all(
  //     users.map(async (user) => {
  //       const task = await Task.findOne({ user: user._id });
  //       return {
  //         _id: user._id,
  //         name: user.name,
  //         email: user.email,
  //         profileImageUrl: user.profileImageUrl || null,
  //         status: task?.status || "pending", // default to "pending"
  //       }
  //     })
  //   );
  //   res.status(200).json(userWithStatus);
  // } catch (error) {
  //    res.status(500).json({ message: "Error fetching user task statuses", error: err });
  // }
  try {
    const users = await User.find().select("name email profileImageUrl");

    const modifiedUsers = await Promise.all(
      users.map(async (user) => {
        // 🟡 Get all tasks for the user
        const tasks = await Task.find({ user: user._id });

        const isAllCompleted = tasks.length > 0 && tasks.every((task) => task.status === "completed");

        return {
          _id: user._id,
          name: user.name,
          email: user.email,
          profileImageUrl: user.profileImageUrl || null,
          status: isAllCompleted ? "completed" : "pending",
          tasks,
        };
      })
    );

    res.status(200).json(modifiedUsers);
  } catch (error) {
    console.error("Error fetching users with tasks:", error);
    res.status(500).json({ message: "Failed to fetch users with task status" });
  }
};

// getmytask
export const getMyTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user._id });
    res.status(200).json(tasks);
  } catch (err) {
    console.error("Error fetching user's tasks", err);
    res.status(500).json({ message: "Failed to load tasks" });
  }
};
