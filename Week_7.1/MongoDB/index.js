const express = require('express');
const { UserModel, TodoModel } = require("./db");
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const JWT_SECRET = "ramDEVbAbaKIjaiHO";
const app = express();

mongoose.connect("mongodb+srv://<username>:<password>@cluster0.tvpli.mongodb.net/todo-app-new")

app.use(express.json());

app.post("/signup", async function(req, res) {
    
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

     await UserModel.create({
        email: email,
        password: password,
        name: name
     })
       res.json({
         message: "You are logged in"
       })
})

app.post("/signin", function(req, res) {
    
    const email = req.body.email;
    const password = req.body.password;

    const user = UserModel.findOne({
        email: email,
        password: password
    });

    console.log(user);

    if (user) {
        const token = jwt.sign({
            id: user._id
        }, JWT_SECRET);
        res.json ({

        });
    } else {
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
});

app.post("/todo", auth, function(req, res) {
    
})

app.get("/todo", auth, function(req, res) {
    
})

function auth(req, res, next) {
      
    const token = req.header.token;
    const decodedData = jwt.verify(token, JWT_SECRET);

    if(decodedData) {
        req.userId = decodedData.userId;
        next();
    } else {
        res.status(403).json({
            message: "Incorrect Credentials"
        })
    }
}

app.listen(3000);