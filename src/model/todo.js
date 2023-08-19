import mongoose from "mongoose";
  
const todoSchema = new mongoose.Schema ({

    title: {
        type: "string",
        required: true,
    },
    description: {
        type: "string",
        required: true,
    },
    completed: {
        type: "string",
        required: true,
        default: false,
    }
});

const todoModel = mongoose.model("todos", todoSchema);

export default todoModel;