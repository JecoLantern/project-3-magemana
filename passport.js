const localStrategy = require('passport-local').Strategy;
const User = require('./models/User')
module.exports = function (passport) {
    passport.serializeUser(function (user, done) {
        done(null, user)
    })
    passport.deserializeUser(function (user, done) {
        done(null, user)
    })


    passport.use(new localStrategy(function(username,password,done){
        User.findOne({username:username}, function(err,doc){
            if (err)done(err)
            else{
                if (doc){
                    let valid = doc.comparePassword(password, doc.password)
                    if(valid){
                        done(null,{
                            username:username,
                            password:doc.password
                        })
                    }
                }else{
                    done(null,false)
                }
            }
        })
    }))
}