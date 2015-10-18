'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RefSchema = new Schema({
    patid: String,
    refdate: String,    
    refreason: String
});

module.exports = mongoose.model('Ref', RefSchema);