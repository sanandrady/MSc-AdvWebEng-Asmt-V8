'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PmiSchema = new Schema({
    firstname: String,
    lastname: String,
    dob: String,
    //username: String,
    //password: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: String
});

module.exports = mongoose.model('Pmi', PmiSchema);