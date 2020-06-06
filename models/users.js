const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = new Schema({
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    department: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    }
})
const employees = mongoose.model("employees", User);
module.exports = employees;