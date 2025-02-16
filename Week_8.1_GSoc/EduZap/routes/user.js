const { Router } = require('express');

const userRouter = Router();

    userRouter.post("/user/signup", function(req, res) {
        res.json({
            message: "You are signed up"
        })
    })
    
    
    userRouter.post("/user/signin", function(req, res) {
        res.json({
            message: "You are signed up"
        })
    })
    
    userRouter.get("/user/purchases", function(req, res) {
        res.json({
            message: "You are signed up"
        })
    })
    


module.exports = {
    userRouter : userRouter
}