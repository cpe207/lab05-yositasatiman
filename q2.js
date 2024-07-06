function findTopNames(students) {
    var topStudents = students.filter(function (student) { return student.score > 8; });
    return topStudents.map(function (student) { return student.name; }).slice(0, 2);
}
var students1 = [
    { name: "john", score: 10 },
    { name: "jane", score: 9 },
    { name: "jim", score: 8 },
];
console.log(findTopNames(students1));
module.exports = findTopNames;
//Yosita Satiman 660610788//
