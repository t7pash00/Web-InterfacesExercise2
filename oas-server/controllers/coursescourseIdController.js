'use strict'

var varcoursescourseIdController = require('./coursescourseIdControllerService');

module.exports.funccoursescourseIdPARAMETERS = function funccoursescourseIdPARAMETERS(req, res, next) {
  varcoursescourseIdController.funccoursescourseIdPARAMETERS(req.swagger.params, res, next);
};

module.exports.getCourse = function getCourse(req, res, next) {
  varcoursescourseIdController.getCourse(req.swagger.params, res, next);
};

module.exports.updateCourse = function updateCourse(req, res, next) {
  varcoursescourseIdController.updateCourse(req.swagger.params, res, next);
};

module.exports.deleteCourse = function deleteCourse(req, res, next) {
  varcoursescourseIdController.deleteCourse(req.swagger.params, res, next);
};