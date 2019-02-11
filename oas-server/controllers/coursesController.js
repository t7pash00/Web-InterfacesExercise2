'use strict'

var varcoursesController = require('./coursesControllerService');

module.exports.findCourses = function findCourses(req, res, next) {
  varcoursesController.findCourses(req.swagger.params, res, next);
};

module.exports.createCourse = function createCourse(req, res, next) {
  varcoursesController.createCourse(req.swagger.params, res, next);
};