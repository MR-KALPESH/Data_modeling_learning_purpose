import mongoose from 'mongoose';

const subtodoschma = new mongoose.Schema(
  {
    content: {
      typeof: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export const sub_Todo = mongoose.model('sub_Todo', subtodoschma);
