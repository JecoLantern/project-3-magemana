const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs")

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },   
     isDeleted:{
        type:   Boolean,
        default: false,
    },

})

User.methods.hashPassword = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
}
User.methods.comparePassword = function(password, hash) {
    return bcrypt.compareSync(password, hash)
}

module.exports = mongoose.model("User", User, 'User');
