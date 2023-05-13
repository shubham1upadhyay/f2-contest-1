/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  let havingMarksOver50 = arr.filter(student => student.marks > 50);
	let studentNames = havingMarksOver50.map(student => student.name);
	console.log(studentNames);
}

function PrintStudentsbyForEach() {
  let havingMarksOver50 = arr.filter(student => student.marks > 50);
	havingMarksOver50.forEach(student => console.log(student));
}

function addData() {
  let newArr = {id: 4, name: "susan", age: "20", marks: 45};
	arr.push(newArr);
	console.log(arr);
}

function removeFailedStudent() {
  arr = arr.filter(student => student.marks >= 50);
	console.log(arr);
}

function concatenateArray() {
  let newArr = [
	  {id: 5, name: "rahul", age: "27", marks: 30},
	  {id: 6, name: "sanjeev", age: "28", marks: 40},
	  {id: 7, name: "shivam", age: "24", marks: 51}
	];
	arr = arr.concat(newArr);
	console.log(arr);
}


PrintStudentswithMap();
PrintStudentsbyForEach();
addData();
removeFailedStudent();
concatenateArray();
