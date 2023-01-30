const express = require('express');
const fs = require("fs");
const app = express();
const file = __dirname+'/database.json';
var users = []

app.use(express.json());

app.get("/", (req, res)=>{res.json({message: "Welcome!"})}) // Main - route API

app.get("/:name", (req, res)=>{res.json("Welcome, "+req.url.split('/')[1])}) // Welcome + name route

// Receive user by id - Route API
app.get('/user/:id', 
    (req, res) => {
        var id = req.url.split('/')[2]
        users = JSON.parse(fs.readFileSync(file))
        
        for (let i = 0; i < users.length; i++) {
            if(users[iS].id == id){
                res.json(users[i])
            }
        }
    }
)

app.post('/users/add',(req, res)=>{
    
})

// List all user - Route API
app.get('/users/list', function(req, res) {
        users = JSON.parse(fs.readFileSync(file));
        res.json(users);
        }
    )

app.listen(8080,function(req, res) {
    console.clear();
    console.log('NodeJs Server do Anselmo Rodando :)');
})