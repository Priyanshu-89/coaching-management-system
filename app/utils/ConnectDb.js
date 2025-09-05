// import mongoose from "mongoose"

// export async function connectDb(){
//     try {
//         const client=await mongoose.connect(process.env.MONGODB_URL)
//         console.log("Connected to mongodb")
//     } catch (error) {
//         console.log(error.message)
//     }
// }

// export default connectDb


import mongoose from "mongoose";

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectDb() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false, // Ye prevent karta hai buffering errors
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    cached.promise = mongoose.connect(process.env.MONGODB_URL, opts).then((mongoose) => {
      console.log("Connected to MongoDB");
      return mongoose;
    }).catch((err) => {
      console.error("MongoDB connection failed:", err.message);
      throw err;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDb;
