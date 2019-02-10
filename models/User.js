const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs")
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: { type: String },
    local: {
        username: { type: String, required: false },
        password: { type: String, required: false }
    },
    characters: [
        {
            type: Schema.Types.ObjectId,
            ref: "charSchema"
        }
    ]
})
// Define schema methods
userSchema.methods = {
    checkPassword: function (inputPassword) {
        return bcrypt.compareSync(inputPassword, this.local.password)
    },
    hashPassword: (plainTextPassword)=> {
        console.log("hash hash hash....")
        var salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(plainTextPassword, salt)
    }
}


// Create reference to User & export
const User = mongoose.model('User', userSchema)
module.exports = User
