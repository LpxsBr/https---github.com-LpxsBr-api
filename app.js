const express = require('express');
const fs = require("fs");
const app = express();
const cors = require('cors')
const file = __dirname+'/database.json';
var users = []

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "https://localhost:8080/");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.get("/", (req, res, next)=>{res.json({message: "Welcome!"})}) // Main - route API

app.get("/:name", (req, res, next)=>{res.json("Welcome, "+req.url.split('/')[1])}) // Welcome + name route

// Receive user by id - Route API
app.get('/user/:id', 
    (req, res, next) => {
        var id = req.url.split('/')[2]
        users = JSON.parse(fs.readFileSync(file))
        
        for (let i = 0; i < users.length; i++) {
            if(users[i].id == id){
                res.json(users[i])
            }
        }
    }
)

app.post('/users/add',(req, res, next)=>{

    users = JSON.parse(fs.readFileSync(file))
    var {username, email, password, confirmPassword} = req.body
    var user = {
        "id": (users.length + 1),
        username,
        email,
        password
    }
    if(password === confirmPassword){
        res.json({msg:"User "+username+" registered succesfull"})
        users.push(user)
        fs.writeFileSync(file, JSON.stringify(users))
    }else{
        res.status(404).json({erro: "password not match"})
    }
})

app.post('/users/auth', (req, res, next)=>{
    users = JSON.parse(fs.readFileSync(file));
    var {email, password} = req.body;
    var isLoogged = false
    var id = null

    for (let i = 0; i < users.length; i++) {
        if(users[i].email == email){
            console.log('oi')
            if(users[i].password == password){
                console.log('ai')
                id = users[i].id
                isLoogged = true
            }
        }
    }

    if(isLoogged == true){
        res.json({msg: "logged",id: id })
    }else{
        res.json({msg: "not logged"})
    }

})

// List all user - Route API
app.get('/users/list', function(req, res, next) {
        users = JSON.parse(fs.readFileSync(file));
        res.json(users);
        }
    )

const port = process.env.PORT || 9001

app.listen(port,function(req, res) {
    console.clear();
    console.log(`NodeJs Server run in the Port ${port}`);
})