let passport = require('passport'), LocalStrategy = require('passport-local').Strategy;
let user = require('../models/user');

module.exports = function (app){

    // //Serealize Session
    passport.serializeUser(function (user,done){
        console.log('Serializing')
        done(null,user);
    });
    // Deserealize Session
    passport.deserializeUser(function (user,done){
       this.user.getUser(user.email).then(function(user) {
      // db.sequelize.query("SELECT * FROM user WHERE username = :p_login",{replacements: {p_login :user.username},type: db.sequelize.QueryTypes.SELECT}).then(function(result) {
            console.log('Still Serializing')
            done(null,user);
            console.log('Done!')
        }, function (error) {
            //Killing session
            console.log(error);
            done(err,null);
        });
    });

   // Using Passport for local strategy
    passport.use('local-login', new LocalStrategy ({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true
        },
        function (req,email,password,done){
            
            let result = this.user.getUser(email)
            console.log(result);
            if(result){
                if (result.password === req.body.password) {
                    console.log('Login OK');
                    done(null,result);
                } else {
                    console.log('Login ou senha errado');
                    done(null,false,{message : 'Email or password are wrong :('});
                }
            } else {
                done(null,false,{message : 'Email or password are wrong :('});
            }
        }//Fim função de procura do usuario
        )//Fim passport
    );
};