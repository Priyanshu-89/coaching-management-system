import mongoose, { Schema, models } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    father:{
      type:String,
    },
    gender:{
      type:String,
    },
    status:{
      type:Boolean,
      default:false
    },
    email: {
      type: String,
      unique: true,
      
      lowercase: true,
    },
    password: {
      type: String,
    },
    image: {
      type: String,
    },
  createdAt:{
    type:Date,
    default:Date.now
  },
  role:{
    type:String,
    default:"user"
  },

  address:{
    type:String
  },
   
  },
  {
   
    timestamps: true,
  }

);

const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
