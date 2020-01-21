// Requiring path to so we can use relative routes to our HTML files
var path = require('path');

// Requiring our custom middleware for checking if a user is logged in
// var isAuthenticated = require('../config/middleware/isAuthenticated');

module.exports = function(app) {
  app.get('/', function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect('/index');
    }
    res.sendFile(path.join(__dirname, '../public/html-templates/landing.html'));
  });

  app.get('/login', function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect('/index');
    }
    res.sendFile(path.join(__dirname, '../public/login.html'));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page

  // app.get('/landing', isAuthenticated, function(req, res) {
  //   res.sendFile(path.join(__dirname, '../public/html-templates/landing-page/landing.html'));
  // });
  app.get('/signup', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/signup.html'));
  });

  app.get('/landing', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/html-templates/landing.html'));
  });

  app.get('/index', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/html-templates/index.html'));
  });

  app.get('/slider', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/html-templates/slider.html'));
  });
};
