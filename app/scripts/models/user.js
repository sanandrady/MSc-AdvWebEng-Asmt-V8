'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    firstname: String,
    lastname: String,
    dob: Date,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: String    
});

var User = mongoose.model('User', userSchema);

module.exports = User;