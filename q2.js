function findTopNames(students) {
    var topStudents = students.filter(function (student) { return student.score > 8; });
    var topNames = topStudents.map(function (student) { return student.name; });
    return topNames;
}
var students1 = [
    { name: "john", score: 10 },
    { name: "jane", score: 9 },
    { name: "jim", score: 8 },
];
console.log(findTopNames(students1));
module.exports = findTopNames;
//Yosita Satiman 660610788//
