const AppDAO = require('../models/dao') 
const dao = new AppDAO('./src/database/database.sqlite3') 

const User = require('../models/user');
const user = new User(dao);
var session;

exports.userStore = function(req, res) {
    session = req.session;
    
    var {name, email, password} = req.body;
    user.create(name, email, password);
    
    user.getUser(email).then(users => {session.user = users[0]})
    res.status(200).send('Success');
}

exports.login = function(req,res) {
    session = req.session;
    var userFind;

    user.getUser(req.body.email).then(u => {
        userFind = u[0];
        if(userFind && userFind.password == req.body.password) {
            session.user = userFind;
            res.send('Logged in');
        } else {
            res.status(401).send('Cannot logged in');
        }
    });
    
}

exports.logout = function(req,res) {
    session = null;
    console.log("Lgout");
    req.session.destroy((err) => {
        if(err) {
            console.log(err)
            res.send(err)
        }
        res.send("Logout it");
    });
}

exports.user = function(req,res) {
    if(session != null) {
        console.log(session);
        res.send({user: session.user})
    } else {
        res.status(401).send('You are not authenticated')
    }
}