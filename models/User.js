const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs")

const Schema = mongoose.Schema;

const User = new Schema({
    username:{
        type:String,
        required:true,
    },
    
    password:{
        type:String,
        required:true,
    },

})

User.methods.hashPassword = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
}
User.methods.comparePassword = function(password, hash) {
    return bcrypt.compareSync(password, hash)
}

module.exports = mongoose.model("User", User, 'User');