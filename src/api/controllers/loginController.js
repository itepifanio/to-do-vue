const AppDAO = require('../models/dao') 
const LocalStrategy = require('passport-local').Strategy
const dao = new AppDAO('./src/database/database.sqlite3') 

const User = require('../models/user');
const user = new User(dao);

// exports.login = function(passport){
//     function findUser(email, password, callback) {
//     	return user.getUser(email, password);
//     } 
// }


// let passport = require('passport');

exports.login = function(req, res) {
    return  res.send('Request Login Sucess');
}