let studentRecords = [ {name: 'John', id: 123, marks : 98 },
                       {name: 'Baba', id: 101, marks : 23 },
                       {name: 'yaga', id: 200, marks : 45 },
                       {name: 'Wick', id: 115, marks : 75 }];


// 1. We are interested in retrieving only the name of the students and 
// all the names should be in caps. ['JOHN', 'BABA', 'YAGA', 'WICK']
let result1 = [];
studentRecords.forEach((student) => {
    result1.push(student.name.toUpperCase());
});
console.log(result1);


// 2. Suppose we have the same dataset as above but this time we want to 
// get the details of students who scored more than 50 marks.
// [{name: 'John', id: 123, marks: 98},{name: 'Wick', id: 115, marks: 75}]
let result2 = studentRecords.filter((student) => student.marks>50);
console.log(result2);


// 3. Retrieve the details of students who scored more than 50 marks and 
// have id greater than 120.
let result3 = studentRecords.filter((student) => student.marks>50 && student.id>120);
console.log(result3);


// 4. Consider the same scenario we have discussed above, but this time we
// would like to know the sum total of the marks of the students.
let result4 = studentRecords.reduce((a, b) => a + b.marks, 0);
console.log(result4);


// 5. This time we want to get only the names of the students who scored
// more than 50 marks from the same dataset used above.
let result5 = studentRecords.filter((student) => student.marks>50).map((student) => student.name);
console.log(result5);


// 6. This time we are required to print the sum of marks of the students
// with id > 120.
let result6 = studentRecords.filter((student) => student.id>120).reduce((a, b) => a+b.marks, 0);
console.log(result6);


// 7. This time we are required to print the total marks of the students
// with marks greater than 50 after a grace of 15 marks has been added to
// those students who scored less than 50.
let result7 = studentRecords.map(function(student){
    if(student.marks<50){
        student.marks+=15;
    }
    return student;
}).filter((student) => student.marks>50).reduce((a, b) => a + b.marks, 0);
console.log(result7);


// 8. Create 6 objects , each object will have name, class, roll no as 
// properties. Store these objects in an array of objects.
let obj1 = {name: 'Preeti', class: 8, rollno: 10};
let obj2 = {name: 'Kiran', class: 10, rollno: 22};
let obj3 = {name: 'Vidhi', class: 6, rollno: 13};
let obj4 = {name: 'Shikha', class: 12, rollno: 30};
let obj5 = {name: 'Ritu', class: 5, rollno: 20};
let obj6 = {name: 'Priya', class: 10, rollno: 18};

let students = [ {name: 'Preeti', class: 8, rollno: 10},
                 {name: 'Kiran', class: 10, rollno: 22}, 
                 {name: 'Vidhi', class: 6, rollno: 13},
                 {name: 'Shikha', class: 12, rollno: 30},
                 {name: 'Ritu', class: 5, rollno: 20},
                 {name: 'Priya', class: 10, rollno: 18} ];

console.log(students);