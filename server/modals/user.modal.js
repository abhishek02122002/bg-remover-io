import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  photo: {
    type: String,
    required: true,
  },
  firstName: {
    type: string,
  },
  lastName: {
    type: string,
  },
  creditBalance: {
    type: Number,
    default: 5,
  },
});

// model aban liya idhar 
const userModel = mongoose.models.user || mongoose.model('user',userSchema);

export default userModel;