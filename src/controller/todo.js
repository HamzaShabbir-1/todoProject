import todoModel from "../model/todo.js";

const todoController = {

    create: async (req, res) => {
        const body = req.body;
        const todo = await todoModel.create(
            {
                title: body.title,
                description: body.description,
                completed: body.completed
            })

        return res.json({ message: "todo created", todo })
    },

    readSindle: async (req, res) => {
        const { id } = req.params;
        const todo = await todoModel.findById(id);
        if (!todo) {
            return res.status(404).json({ message: "Not Found" });
        }
        return res.json(todo);
    },

    readAll: async (req, res) => {
        const todos = await todoModel.find();
        return res.json(todos);
    },

    update: async (req, res) => {
        const {id} = req.params;
        const body = req.body;
        const todo = await todoModel.findById(id);
        if(!todo){
            return res.status(404).json({message: "Not Found"});
        }
        todo.title = body.title;
        todo.description = body.description;
        todo.completed = body.completed;

        await todo.save();
        return res.json({message: "Todo Updated", todo});
    },

    delete: async (req, res) => {
        const {id} = req.params;
        const todo = await todoModel.findByIdAndRemove(id);
        
        if (!todo) {
            return res.status(404).json({ message: "Not Found" });
        }
        return res.json({message: "Todo Deleted"});
    }

}

export default todoController;