'use strict';

var _ = require('lodash');
var Pmi = require('./pmi.model');

// Get list of pmis
exports.index = function(req, res) {
  Pmi.find(function (err, pmis) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(pmis);
  });
};

// Get a single pmi
exports.show = function(req, res) {
  Pmi.findById(req.params.id, function (err, pmi) {
    if(err) { return handleError(res, err); }
    if(!pmi) { return res.status(404).send('Not Found'); }
    return res.json(pmi);
  });
};

// Creates a new pmi in the DB.
exports.create = function(req, res) {
  Pmi.create(req.body, function(err, pmi) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(pmi);
  });
};

// Updates an existing pmi in the DB.
exports.update = function(req, res) {
    if(req.body._id) { delete req.body._id; }
    Pmi.findById(req.params.id, function (err, pmi) {
        if (err) { return handleError(res, err); }
        if (!pmi) { return res.status(404).send('Not Found'); }      
        var updated = _.merge(pmi, req.body);
        updated.save(function (res, err) {
            if (err) { return handleError(res, err); }          
            return res.status(200).json(pmi);
        });
});
};


// Deletes a pmi from the DB.
exports.destroy = function(req, res) {
  Pmi.findById(req.params.id, function (err, pmi) {
    if(err) { return handleError(res, err); }
    if(!pmi) { return res.status(404).send('Not Found'); }
    pmi.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}