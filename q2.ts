interface Student {
  name: String;
  score: number;
}

function findTopNames(students) {
  const topStudents = students.filter(student => student.score > 8);
  return topStudents.map(student => student.name).slice(0, 2);
}

const students1 = [
  { name: "john", score: 10 },
  { name: "jane", score: 9 },
  { name: "jim", score: 8 },
];

console.log(findTopNames(students1));

module.exports = findTopNames;


//Yosita Satiman 660610788//