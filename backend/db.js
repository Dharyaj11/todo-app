const mongoose=require("mongoose")

// mongodb+srv://admin:1234567890@harkirat.axt2oqp.mongodb.net/todos
mongoose.connect("mongodb+srv://admin:1234567890@harkirat.axt2oqp.mongodb.net/todos")

const todoSchema=mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}