'use strict';

/**
 * @ngdoc overview
 * @name pateRefAppV8App
 * @description
 * # pateRefAppV8App
 *
 * Main module of the application.
 */

angular
  .module('pateRefAppV8App', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/joinin', {
        templateUrl: 'views/joinin.html',
        controller: 'JoinCtrl'
      })        
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

//var express = require('express');
//var api = express();
//var mongojs = require('mongojs');
//var db = mongojs('paterefv8', ['pmi']);
//var bodyParser = require('body-parser');

////app.get('/', function (req, res) {
////res.send("Hello world from server.js")
////});

//api.use(express.static(__dirname + '/app'));
//api.use(bodyParser.json());
//api.get('pmi', function (req, res) {
//    console.log('I received a GET response');
//    /* person1 = {
//		name: "Tim",
//		email: "tim@email.com",
//		number: "(111) 111-1111"
//	};
//	person2 = {
//		name: "Emily",
//		email: "emily@email.com",
//		number: "(222) 111-1111"
//	};
//	person3 = {
//		name: "John",
//		email: "john@email.com",
//		number: "(333) 111-1111"
//	};	
//	var contactlist = [person1, person2, person3];
//	res.json(contactlist); */

//    db.pmi.find(function (err, docs) {
//        console.log(docs);
//        res.json(docs);
//    });
//});

//api.post('/pmi', function (req, res) {
//    console.log(req.body);
//    db.contactlist.insert(req.body, function (err, doc) {
//        res.json(doc);
//    });
//});

//api.delete('/pmi/:id', function (req, res) {
//    var id = req.params.id;
//    console.log(id);
//    db.contactlist.remove({ _id: mongojs.ObjectId(id) }, function (err, doc) {
//        res.json(doc);
//    });
//});

//api.get('/pmi/:id', function (req, res) {
//    var id = req.params.id;
//    console.log(id);
//    db.contactlist.findOne({ _id: mongojs.ObjectId(id) }, function (err, doc) {
//        res.json(doc);
//    });
//});

//api.put('/pmi/:id', function (req, res) {
//    var id = req.params.id;
//    console.log(req.body.name);
//    db.contactlist.findAndModify({
//        query: { _id: mongojs.ObjectId(id) },
//        update: { $set: { name: req.body.name, email: req.body.email, number: req.body.number } },
//        new: true
//    }, function (err, doc) {
//        res.json(doc);
//    });
//});
