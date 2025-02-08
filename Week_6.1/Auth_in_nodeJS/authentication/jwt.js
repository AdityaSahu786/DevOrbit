const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "sahuadiilovenlp";
const app = express();
const port = 3000;

app.use(express.json());

const users = [];

function generateToken() {
    let options = ['q', 'w', 'e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m',
        'Q','W','E','R','T','Y','U','I','O','P','M','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M','1','2',
        '3','4','5','6','7','8','9','0']

    let token = "";
    for (let i =0; i<32; i++) {
        // use a simple function here
        token = token + options[Math.floor(Math.random() * options.length)];
    }
}


app.post("/signup", function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    
    users.push({
        username: username,
        password: password
    })

    res.json ({
        message: "You are signed in"
    })

    console.log(users);
});

app.post("/signin", function(req, res){
     const username = req.body.username;
     const password = req.body.password;

     //maps and filters
     let foundUser = null;

     for (let i =0; i<users.length; i++) {
        if(users[i].username == username && users[i].password == password) {
            foundUser = users[i]
        }
     }
     if (foundUser) {
        const token = jwt.sign({
            username: username
        }, JWT_SECRET);
        res.json({
            message: token
        })
     } else {
        res.status(403).send({
            message: "Invalid username or password"
        })
     }
     console.log(users);
});

app.listen(port);