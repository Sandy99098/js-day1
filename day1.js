let name = prompt("Enter your name:");
let facultyName = prompt("Enter your faculty name:");
let rollNumber = prompt("Enter your exam roll number:");

let gpa1 = parseFloat(prompt("Enter GPA for Semester 1:"));
let gpa2 = parseFloat(prompt("Enter GPA for Semester 2:"));
let gpa3 = parseFloat(prompt("Enter GPA for Semester 3:"));
let gpa4 = parseFloat(prompt("Enter GPA for Semester 4:"));
let gpa5 = parseFloat(prompt("Enter GPA for Semester 5:"));
let gpa6 = parseFloat(prompt("Enter GPA for Semester 6:"));
let gpa7 = parseFloat(prompt("Enter GPA for Semester 7:"));
let gpa8 = parseFloat(prompt("Enter GPA for Semester 8:"));

// Calculate CGPA
let totalGPA = gpa1 + gpa2 + gpa3 + gpa4 + gpa5 + gpa6 + gpa7 + gpa8;
let cgpa = totalGPA / 8;

// Display the output
let outputMessage = "I am " + name + " and I am enrolled in " + facultyName + ". My exam roll number is " + rollNumber + " and I scored " + cgpa.toFixed(2) + " CGPA in my Bachelor's.";
console.log(outputMessage);
