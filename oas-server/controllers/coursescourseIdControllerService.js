'use strict'
const sub = require("./coursesControllerService");

module.exports.funccoursescourseIdPARAMETERS = function funccoursescourseIdPARAMETERS(req, res, next) {
  res.send({
    message: 'This is the mockup controller for funccoursescourseIdPARAMETERS'
  });
};

module.exports.getCourse = function getCourse(req, res, next) {
  const coursesById = sub.courses.findIndex(x => x.id == req.courseId.value);
  if (coursesById >= 0) {
    res.json(sub.courses[coursesById]);
  } else {
    res.send("Not found");
  }
};

module.exports.updateCourse = function updateCourse(req, res, next) {
  const updateCourseById = sub.courses.findIndex(x => x.id == req.courseId.value);
  if (updateCourseById >= 0) {
    sub.courses[updateCourseById].id = parseInt(req.courseId.value),
    sub.courses[updateCourseById].name = req.undefined.value.name;
    sub.courses[updateCourseById].description = req.undefined.value.description;
   

    res.send("updated");

  } else {
    res.send("not found");
  }
};


module.exports.deleteCourse = function deleteCourse(req, res, next) {
  const deleteId = sub.courses.findIndex(x => x.id == req.courseId.value);

  if (deleteId >= 0) {
    sub.courses.splice(deleteId, 1);
    res.send('deleted');
  } else {
    res.send('not found');
  }
};
