import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  amount: { type: Number, required: true },
 courseId: {  
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course"
  },
  date: { type: Date, default: Date.now }
});

const Payment =
  mongoose.models.Payment || mongoose.model("Payment", PaymentSchema);

export default Payment;
