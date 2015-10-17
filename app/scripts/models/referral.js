'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var refSchema = new Schema({
    patid: String,
    refdate: Date,
    //reftime: DateTime,
    refreason: String
});

var Ref = mongoose.model('Ref', refSchema);

module.exports = Ref;