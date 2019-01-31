const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs")
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: { type: String },
    local: {
        username: { type: String, required: false },
        password: { type: String, required: false }
    },
})
// Define schema methods
userSchema.methods = {
    checkPassword: function (inputPassword) {
        return bcrypt.compareSync(inputPassword, this.local.password)
    },
    hashPassword: function (plainTextPassword) {
        return bcrypt.hashSync(plainTextPassword, 10)
    }
}

// Define hooks for pre-saving
userSchema.pre('save', function (next) {
    if (!this.local.password) {
        console.log('=======NO PASSWORD PROVIDED=======')
        next()
    } else {
        console.log("hashbrowns")
        console.log(this.local.password)
        this.local.password = this.hashPassword(this.local.password)///here lies the error!!!!!!!!!!!!!!!
        console.log("salted hashbrowns")
        console.log(this.local.password)
        next()
    }
    // this.password = this.hashPassword(this.password)
    // next()
})

// Create reference to User & export
const User = mongoose.model('User', userSchema)
module.exports = User