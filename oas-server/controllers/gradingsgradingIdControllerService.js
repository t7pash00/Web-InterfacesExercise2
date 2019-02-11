'use strict'
const grad = require("./gradingsControllerService");

module.exports.funcgradingsgradingIdPARAMETERS = function funcgradingsgradingIdPARAMETERS(req, res, next) {
  res.send({
    message: 'This is the mockup controller for funcgradingsgradingIdPARAMETERS'
  });
};

module.exports.getGrading = function getGrading(req, res, next) {
  const gradingsById = grad.grades.findIndex(x => x.id == req.gradingId.value);
  if (gradingsById >= 0) {
    res.json(grad.grades[gradingsById]);
  } else {
    res.send("Not found");
  }
};



module.exports.updateGrading = function updateGrading(req, res, next) {
  const updateGradeById = grad.grades.findIndex(x => x.id == req.gradingId.value);
  if (updateGradeById >= 0) {
    grad.grades[updateGradeById].id = parseInt(req.gradingId.value),
    grad.grades[updateGradeById].studentid = req.undefined.value.studentid;
    grad.grades[updateGradeById].courseid = req.undefined.value.courseid;
    grad.grades[updateGradeById].grade = req.undefined.value.grade;

    res.send("updated");

  } else {
    res.send("not found");
  }
};


module.exports.deleteGrading = function deleteGrading(req, res, next) {
  const deleteId = grad.grades.findIndex(x => x.id == req.gradingId.value);

  if (deleteId >= 0) {
    grad.grades.splice(deleteId, 1);
    res.send('deleted');
  } else {
    res.send('not found');
  }
};
