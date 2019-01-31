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

UserSchema.methods.hashPassword = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
    };

module.exports = mongoose.model("user", UserSchema);