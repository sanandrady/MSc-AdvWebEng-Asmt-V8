'use strict';

var _ = require('lodash');
var Ref = require('./ref.model');

// Get list of refs
exports.index = function(req, res) {
  Ref.find(function (err, refs) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(refs);
  });
};

// Get a single ref
exports.show = function(req, res) {
  Ref.findById(req.params.id, function (err, ref) {
    if(err) { return handleError(res, err); }
    if(!ref) { return res.status(404).send('Not Found'); }
    return res.json(ref);
  });
};

// Creates a new ref in the DB.
exports.create = function(req, res) {
  Ref.create(req.body, function(err, ref) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(ref);
  });
};

// Updates an existing ref in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Ref.findById(req.params.id, function (err, ref) {
    if (err) { return handleError(res, err); }
    if(!ref) { return res.status(404).send('Not Found'); }
    var updated = _.merge(ref, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(ref);
    });
  });
};

// Deletes a ref from the DB.
exports.destroy = function(req, res) {
  Ref.findById(req.params.id, function (err, ref) {
    if(err) { return handleError(res, err); }
    if(!ref) { return res.status(404).send('Not Found'); }
    ref.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}