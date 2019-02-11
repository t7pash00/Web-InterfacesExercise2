'use strict'
const stud = require("./studentsControllerService");


module.exports.funcstudentsstudentsIdPARAMETERS = function funcstudentsstudentsIdPARAMETERS(req, res, next) {
  res.send({
    message: 'This is the mockup controller for updateStudents'
  });
};


module.exports.getStudents = function getStudents(req, res, next) {
  const studentsById = stud.students.findIndex(x => x.id == req.studentsId.value);
  if (studentsById >= 0) {
    res.json(stud.students[studentsById]);
  } else {
    res.send("Not found");
  }
};


module.exports.updateStudents = function updateStudents(req, res, next) {

  const updateStudentById = stud.students.findIndex(x => x.id == req.studentsId.value);
  if (updateStudentById >= 0) {
    stud.students[updateStudentById].id = parseInt(req.studentsId.value),
    stud.students[updateStudentById].name = req.undefined.value.name;
    stud.students[updateStudentById].address = req.undefined.value.address;
    stud.students[updateStudentById].class = req.undefined.value.class;

    res.send("updated");

  } else {
    res.send("not found");
  }
};


module.exports.deleteStudents = function deleteStudents(req, res, next) {

  const deleteId = stud.students.findIndex(x => x.id == req.studentsId.value);

  if (deleteId >= 0) {
    stud.students.splice(deleteId, 1);
    res.send('deleted');
  } else {
    res.send('not found');
  }
};










