const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    surname: String,
    age: Number,
    english: Number,
    hindi: Number,
    gujarati: Number,
    maths: Number,
    sanskrit: Number,
    total: Number,
    per: Number,
    grade: String
});

const USER = mongoose.model('user', UserSchema);

module.exports = USER