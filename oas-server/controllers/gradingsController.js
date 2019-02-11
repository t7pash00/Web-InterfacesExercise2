'use strict'

var vargradingsController = require('./gradingsControllerService');

module.exports.findGradings = function findGradings(req, res, next) {
  vargradingsController.findGradings(req.swagger.params, res, next);
};

module.exports.createGrading = function createGrading(req, res, next) {
  vargradingsController.createGrading(req.swagger.params, res, next);
};