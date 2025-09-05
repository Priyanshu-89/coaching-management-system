import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "You never regret after buy any course from our site",
  },
  fee: {
    type: Number,
    required: true,
    default: 1000,
  },
  instructor: {
    type: String,
    default: "Harsh Sharma",
  },
  duration: {
    type: String,
    required: true,
    default: "3 Months",
  },
  difficulty: {
    type: String,
    enum: ["Beginner", "Intermediate", "Advanced"],
    default: "Beginner",
  },
  prerequisites: {
    type: [String],
    default: ["Basic Knowledge"],
  },
  enrollmentLimit: {
    type: Number,
    default: 50,
  },
  startDate: {
    type: Date,
    default: Date.now,
  },
  endDate: {
    type: Date,
    default: () => new Date(new Date().setMonth(new Date().getMonth() + 3)),
  },
  image: {
    type: String,
  
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
  status: {
    type: String,
    enum: ["Draft", "Published", "Closed"],
    default: "Draft",
  },
});

const Course = mongoose.models.Course || mongoose.model("Course", courseSchema);
export default Course;
