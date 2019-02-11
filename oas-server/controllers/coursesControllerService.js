'use strict'
let z = 1;
let courses = [
    {
        id: z++,
        name: "Practical DevOps Security",
        description: "The road to continuous security in development lifecycle. Good for beginners.",
    },
    {
        id: z++,
        name: "Introduction to HTML",
        description: "A complete beginner to Expert.",
        

    },
    {
        id: z++,
        name: "Python Deep Learning",
        description: "It is the second edition and good as well for the beginners.",
        
    }
]

module.exports.findCourses = function findCourses(req, res, next) {
  res.json(courses);
};

module.exports.createCourse = function createCourse(req, res, next) {
  
  const newCourse= {
    id: courses.length+1,
    name: req.undefined.value.name,
    description: req.undefined.value.description,
     
}

//read body data from req
console.log(newCourse);

//append users data to users array
courses.push(newCourse);
res.send('OK');

};
module.exports.courses = courses;
