import mongoose  from "mongoose";

mongoose.connect("mongodb+srv://prince:Bhayani1902@clusterdatabaselearning.h6pgipe.mongodb.net/Todo-app");
const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed :Boolean
})

export const todo = mongoose.model('todos',todoSchema);
// module.exports={
//     todo
// }