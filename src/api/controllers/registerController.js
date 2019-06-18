const AppDAO = require('../models/dao') 
const dao = new AppDAO('./src/database/database.sqlite3') 

const User = require('../models/user');
const user = new User(dao);

exports.userStore = function(req, res){
    var {name, email, password} = req.body;

    user.create(name, email, password);
    res.status(200).send('Success');
}