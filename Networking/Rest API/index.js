import  express  from 'express';
const app = express();
const PORT = 2703;

const todos = [
    {
        id: "1",
        title: "Task1",
        status: "In Progress"
    },
    {
        id: "2",
        title: "Task2",
        status: "Done"
    }
]

app.all('/', (req, res) => {
    console.log("Request: ",req);
    console.log("Response: ",res);
    res.send("I'm up!!")
})

app.get('/todos', (req,res) => {
    res.json(todos);
})

app.post('/todos', (req, res) => {
    const newTodo = req.body;
    todos.push(newTodo)
    res.json({
        message: 'New task added!'
    })
})

app.listen(PORT, () => {
    console.log(`Server is running in Port ${PORT}`)
});
