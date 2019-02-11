'use strict'
let z = 1;
let grades = [
    {
        id: z++,
        studentid: 1,
        courseid: 2,
        grade: 5
    },
    {
        id: z++,
        studentid: 3,
        courseid: 3,
        grade: 4
    },
    {
        id: z++,
        studentid: 2,
        courseid: 2,
        grade: 3
    }
]

module.exports.findGradings = function findGradings(req, res, next) {
  res.json(grades);
};

module.exports.createGrading = function createGrading(req, res, next) {
  const newGrade= {
    id: grades.length+1,
    studentid: req.undefined.value.studentid,
    courseid: req.undefined.value.courseid,
    grade: req.undefined.value.grade, 
}

//read body data from req
console.log(newGrade);

//append users data to users array
grades.push(newGrade);
res.send('OK');

};
module.exports.grades = grades;
