import mongoose from "mongoose";

const taskSubmissionSchema = new mongoose.Schema({
  github: { type: String, required: true },
  liveLink: { type: String, required: true },
  pdfUrl: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // optional if you want to link to a user
  status: {
    type: String,
    enum: ["pending", "in progress", "completed"],
    default: "pending",
  },
  taskField: {
    type: String,
    enum: ["frontend", "backend", "fullstack", "aws", "python"],
    required: true,
  },
   
});
export default mongoose.model("TaskSubmission", taskSubmissionSchema);