import mongoose from 'mongoose';

const todoschema = mongoose.Schema({
  content:{
    typeof : String,
    required :true,
  
  },
  complete:{
    type:Boolean,
    default : false
  },
  createdBy : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User"
  },
  subTodos : [
    {
      type : mongoose.Schema.Types.ObjectId,
      ref : 'sub_Todo'
    }
  ] // Array of Sub Todos
}, { timestamps: true });

export const TOdo = new mongoose.model('Todo', todoschema);
