// Variable declarations
let name = "Ian";
let age = 19;
const birthYear = 2007;
let favoriteColors = ["Blue", "Black"];
let today = new Date();

// typeof operator
console.log(typeof name);     
console.log(typeof age);     
console.log(typeof true);    
console.log(typeof favoriteColors);  
console.log(typeof today);   

// let vs const
let score = 100;
score = 150; 

const PI = 3.14159;

// Basic math
let a = 45;
let b = 8;

console.log(a + b); 
console.log(a - b); 
console.log(a * b); 
console.log(a / b); 
console.log(a % b); 
console.log(a ** b); 

// Increment/Decrement
let countVar = 0;
countVar++; 
countVar--; 

let firstName = "Ian";
let lastName = "Mutugi";

// Concatenation
let fullName = firstName + " " + lastName;

// Template literals
let greeting = `Hello, ${firstName}!`;
let message = `Your name has ${firstName.length} characters.`;

// String methods
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(firstName.charAt(0));
console.log(fullName.includes("Ian"));

// Comparison
console.log(45 > 8); 
console.log(45 < 8); 
console.log(45 === 8); 
console.log(45 == "8"); 
console.log(45 !== 8); 

// Logical
console.log(true && true); 
console.log(true || false); 
console.log(!true); 

// Age calculation
let currentYear = new Date().getFullYear(); 
age = currentYear - birthYear;
console.log(age);

// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function expression
const addFunc = function(a, b) {
    return a + b;
};

// Arrow function
const multiplyFunc = (a, b) => a * b;

// Arrow function with body
const divideFunc = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};

// Temperature conversion
function celciusToFahrenheit(celsius) { 
    return (celsius * 9 / 5 + 32); 
}

let tempC = 25;
let tempF = celciusToFahrenheit(tempC);
console.log(tempF);

// Reverse string
let text = "Ian";
let reversed = text.split("").reverse().join("");
console.log(reversed);

// Even check
function isEven(num) {
    if (num % 2 === 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}

// Get initials
function getInitials(name) {
    let words = name.split(" ");
    return words[0][0] + words[1][0];
}
console.log(getInitials("Ian Mutugi"));

// Default parameters
function greetUser(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

// Tip calculation
let tipPercent = 15 / 100;
function calculateTip(bill, tipPercent) {
    let tipAmount = bill * tipPercent;
    return `Tip amount: ${tipAmount}`;
}

// Grade
function getGrade(score) {
    if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "D";
    else return "F";
}

// Switch statement
function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        default: return "Invalid day";
    }
}

// For loop
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// While loop
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

// For...of
const colors = ["red", "green", "blue"];
for (const color of colors) {
    console.log(color);
}

// Even numbers 1–50
let evenCount = 1;
while (evenCount <= 50) {
    if (evenCount % 2 === 0) {
        console.log(evenCount);
    }
    evenCount++;
}

// FizzBuzz
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
}

// Triangle
let rows = 5;
for (let i = 1; i <= rows; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}

// Calculator
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { 
    return b === 0 ? "Error: Cannot divide by zero" : a / b; 
}

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+": return num1 + num2;
        case "-": return subtract(num1, num2);
        case "*": return multiply(num1, num2);
        case "/": return divide(num1, num2);
        case "%": return num1 % num2;
        case "**": return num1 ** num2;
        default: return "Invalid operator";
    }
}

// Arrays
let fruits = ["apple", "banana", "orange"];
fruits.push("date");
fruits.pop();

let upperFruits = fruits.map(f => f.toUpperCase());
let longNames = fruits.filter(fruit => fruit.length > 5);

fruits.forEach(fruit => {
    console.log("I like " + fruit);
});

console.log(fruits.includes("pine"));

// Splice & Slice
fruits.splice(0, 1);
let slicedFruits = fruits.slice(0, 2);

// Find
let found = fruits.find(fruit => fruit.startsWith("b"));

// Objects
const person = {
    firstName: "Ian",
    lastName: "Mutugi",
    age: 19,
    hobbies: ["reading", "coding", "gaming"],
    address: {
        city: "Nairobi",
        country: "Kenya"
    }
};

console.log(person.firstName);
console.log(person["lastName"]);
console.log(person.address.city);

person.email = "mutugian25@gmail.com";
delete person.hobbies;

// Object methods
const calculatorObj = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    multiply: (a, b) => a * b
};

console.log(calculatorObj.add(5, 3));

// Object utilities
const scores = {
    math: 95,
    english: 88,
    science: 92
};

console.log(Object.keys(scores));
console.log(Object.values(scores));
console.log(Object.entries(scores));

for (const [subject, score] of Object.entries(scores)) {
    console.log(`${subject}: ${score}`);
}

// Students array
const students = [
    { name: "Alice", age: 22, grade: 85, major: "CS" },
    { name: "Bob", age: 20, grade: 72, major: "Math" },
    { name: "Charlie", age: 23, grade: 90, major: "CS" },
    { name: "Diana", age: 21, grade: 88, major: "Physics" },
    { name: "Eve", age: 22, grade: 95, major: "CS" }
];

// Tasks
const names = students.map(student => student.name);
console.log(names);

const highAchievers = students.filter(student => student.grade > 80);
console.log(highAchievers);

const charlie = students.find(student => student.name === "Charlie");
console.log(charlie);

const avgGrade = students.reduce((sum, s) => sum + s.grade, 0) / students.length;
console.log(avgGrade);

const csMajors = students.filter(student => student.major === "CS");
console.log(csMajors);

const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);
console.log(sortedByGrade);

const hasTopStudent = students.some(student => student.grade > 90);
console.log(hasTopStudent);

const allPassing = students.every(student => student.grade >= 60);
console.log(allPassing);

// Grade tracker

const gradeTracker = {
    students: [], 
     
    // Add a new student
    addStudent(name, grades) {
        this.students.push({ name, grades });
    },
     
    // Get a student by name
    getStudent(name) {
        return this.students.find(student => student.name === name) || null;
    },
     
    // Calculate a student's average
    getStudentAverage(name) {
        const student = this.getStudent(name);
        if (!student) return null;

        const values = Object.values(student.grades);
        const total = values.reduce((sum, grade) => sum + grade, 0);
        return +(total / values.length).toFixed(2);
    },
     
    // Get class average for a subject
    getSubjectAverage(subject) {
        let total = 0;
        let count = 0;

        this.students.forEach(student => {
            if (student.grades[subject] !== undefined) {
                total += student.grades[subject];
                count++;
            }
        });

        return count === 0 ? null : +(total / count).toFixed(2);
    },
     
    // Get top performer
    getTopStudent() {
        if (this.students.length === 0) return null;

        let top = null;
        let highest = 0;

        this.students.forEach(student => {
            const avg = this.getStudentAverage(student.name);
            if (avg > highest) {
                highest = avg;
                top = student.name;
            }
        });

        return top;
    },
     
    // Get students needing help (average < 70)
    getStrugglingStudents() {
        return this.students
            .filter(student => this.getStudentAverage(student.name) < 70)
            .map(student => student.name);
    },
     
    // Get letter grade
    getLetterGrade(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    },
     
    // Generate report card
    generateReportCard(name) {
        const student = this.getStudent(name);
        if (!student) return "Student not found.";

        let report = `Report Card for ${student.name}\n`;
        report += "----------------------\n";

        for (let subject in student.grades) {
            const score = student.grades[subject];
            const letter = this.getLetterGrade(score);
            report += `${subject}: ${score} (${letter})\n`;
        }

        const avg = this.getStudentAverage(name);
        report += "----------------------\n";
        report += `Average: ${avg} (${this.getLetterGrade(avg)})`;

        return report;
    }
};
