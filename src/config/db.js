import mongoose from "mongoose";

const connectDB = async () => {
    const uri = "mongodb://127.0.0.1:27017/todoProject";
    mongoose.connect(uri, {
        autoCreate: true,
        autoIndex: true,
    })
    .then((res) => {
        console.log("DB connecton established successfully");
    })
    .catch((err) => {
        console.log("Error connecting DB", err);
    })
};

export default connectDB;