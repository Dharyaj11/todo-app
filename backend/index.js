const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();

app.use(express.json());
// app.use(cors());

app.post("/todo", async function(req, res) {
     
})

app.get("/todos", async function(req, res) {
     

})

app.put("/completed", async function(req, res) {
     
})

app.listen(3000);