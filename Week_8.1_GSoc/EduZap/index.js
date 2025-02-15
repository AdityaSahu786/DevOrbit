const express = require('express')
const app = express();

app.post("/user/signup", function(req, res) {
    res.json({
        message: "You are signed up"
    })
})


app.post("/user/signin", function(req, res) {
    res.json({
        message: "You are signed up"
    })
})

app.get("/user/purchases", function(req, res) {
    res.json({
        message: "You are signed up"
    })
})

app.post("/course/purchase", function(req, res) {
    res.json({
        message: "You are signed up"
    })
})


app.get("/courses", function(req, res) {
    res.json({
        message: "You are signed up"
    })
})

app.listen(3000);