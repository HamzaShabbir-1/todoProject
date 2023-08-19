import express from "express";
import connectDB from "./config/db.js";
import todoRouter from "./routes/todo.js";

const app = express();

connectDB();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(todoRouter);

const PORT = 3300;
const hostName = "localhost";

app.listen(PORT, () => {
    console.log(`This app is listening on http://${hostName}:${PORT}`);
});

