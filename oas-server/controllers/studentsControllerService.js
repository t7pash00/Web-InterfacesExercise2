'use strict'
let z = 1;
let students = [
    {
        id: z++,
        name: "Shambo Pandey",
        address: "Kotkantie 1 Oulu",
        class: "DIN17SP"
    },
    {
        id: z++,
        name: "Nita Björkman",
        address: "Hanhitie 17 Oulu",
        class: "DIN18SP"

    },
    {
        id: z++,
        name: "Janne Kodistalo",
        address: "Raksila 17 Oulu",
        class: "DIN18SP"

    }
]
module.exports.findStudents = function findStudents(req, res, next) {
 
 res.json(students);
 
};

module.exports.createStudents = function createStudents(req, res, next) {

    const newStudent= {
      id: students.length+1,
      name: req.undefined.value.name,
      address: req.undefined.value.address,
      class: req.undefined.value.class, 
  }
 
  //read body data from req
  console.log(newStudent);

  //append users data to users array
  students.push(newStudent);
  res.send('OK');
 
};
module.exports.students = students;
