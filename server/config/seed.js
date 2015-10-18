/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

//var Thing = require('../api/thing/thing.model');

//Thing.find({}).remove(function() {
//  Thing.create({
//    name : 'Development Tools',
//    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
//  }, {
//    name : 'Server and Client integration',
//    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
//  }, {
//    name : 'Smart Build System',
//    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
//  },  {
//    name : 'Modular Structure',
//    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
//  },  {
//    name : 'Optimized Build',
//    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
//  },{
//    name : 'Deployment Ready',
//    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
//  });
//});


var Pmi = require('../api/pmi/pmi.model');

Pmi.find({}).remove(function() {
    Pmi.create({
        firstname: 'Node',
        lastname: 'JS',
        dob: '27/05/2009',
        username: 'nodejs',
        password: 'nodejs',
        email: 'nodejs@mean.com'
    }, {
        firstname: 'Mongo',
        lastname: 'DB',
        dob: '01/01/2009',
        username: 'mongodb',
        password: 'mongodb',
        email: 'mongodb@mean.com'
    }, {
        firstname: 'Express',
        lastname: 'JS',
        dob: '01/01/2015',
        username: 'expressjs',
        password: 'expressjs',
        email: 'expressjs@mean.com'
    }, {
        firstname: 'Angular',
        lastname: 'JS',
        dob: '29/09/2009',
        username: 'angularjs',
        password: 'angularjs',
        email: 'angularjs@mean.com'
    });
});