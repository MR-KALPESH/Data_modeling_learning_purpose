import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      typeof: String,
      required: true,
      unique: true,
    },
    email: {
      typeof: String,
      required: true,
      unique: true,
      lowecase: true,
    },
    password: {
      typeof: String,
      required: [true, 'Password is Required'],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
