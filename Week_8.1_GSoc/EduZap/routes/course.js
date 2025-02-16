const { Router } = require('express');
const courseRouter = Router();
    courseRouter.post("/course/purchase", function(req, res) {
        res.json({
            message: "You are signed up"
        })
    })
    
    
    courseRouter.get("/courses", function(req, res) {
        res.json({
            message: "You are signed up"
        })
    })
    


module.exports = {
    courseRouter: courseRouter
}