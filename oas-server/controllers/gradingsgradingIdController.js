'use strict'

var vargradingsgradingIdController = require('./gradingsgradingIdControllerService');

module.exports.funcgradingsgradingIdPARAMETERS = function funcgradingsgradingIdPARAMETERS(req, res, next) {
  vargradingsgradingIdController.funcgradingsgradingIdPARAMETERS(req.swagger.params, res, next);
};

module.exports.getGrading = function getGrading(req, res, next) {
  vargradingsgradingIdController.getGrading(req.swagger.params, res, next);
};

module.exports.updateGrading = function updateGrading(req, res, next) {
  vargradingsgradingIdController.updateGrading(req.swagger.params, res, next);
};

module.exports.deleteGrading = function deleteGrading(req, res, next) {
  vargradingsgradingIdController.deleteGrading(req.swagger.params, res, next);
};