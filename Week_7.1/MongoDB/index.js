const express = require('express');
const { UserModel, TodoModel } = require("./db");
const jwt = require('jsonwebtoken');
const JWT_SECRET = "ramDEVbAbaKIjaiHO";
const app = express();

app.post("/signup", async function(req, res) {
    
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

     await UserModel.insert({
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
    })

    if (user) {
        const token = "";
        res.json ({

        });
    } else {
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
});

app.post("/todo", function(req, res) {
    
})

app.get("/todo", function(req, res) {
    
})