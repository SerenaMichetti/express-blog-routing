console.log("Welcome blog world")

const express = require('express')

//importo il router posts
const postsRouter = require("./routers/posts")
const checkTime= require("./middlewares/checkTime")

const app = express()
const port = 3000

app.use(express.static('public'));
app.use(express.json());
app.use(checkTime);

//rotta base con hello world
app.get('/', (req, res) => {
    res.send('Hello World!')
})

//richiamo la variabile posts router e inserisco il prefisso /posts
app.use("/posts", postsRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})