import  express  from 'express';
const app = express();
const PORT = 2703;

app.all('/', (req, res) => {
    console.log("Request: ",req);
    console.log("Response: ",res);
    res.send("I'm up!!")
})

app.listen(PORT, () => {
    console.log(`Server is running in Port ${PORT}`)
});
