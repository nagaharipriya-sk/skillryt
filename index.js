//26-11-2025 Wednesday
console.log("Hello world");

//Variable declaration
let a=5;//use in Global
var b=10;//used inside function
const c=a+b; //value cannot be re-assign

console.log(a);
console.log(b);
console.log(c);

//data types
let str="This is a String";
let num = 28;
let bool = true;
let arr = [1,2,3,4,5];
let obj = {key: "value"}
console.log(typeof str);
console.log(typeof num);
console.log(typeof bool);
console.log(typeof arr);
console.log(typeof obj);

console.log(str);
console.log(num);
console.log(bool);
console.log(arr);
console.log(obj);

//String method
let message="Hello, Javascript";
console.log(message.length);
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.trim());
console.log(message.charAt(8));
console.log(message.replace("Javascript", "World"));
console.log(message.indexOf("Javascript"));
console.log(message.slice(6,16));
console.log(message.replaceAll("Hello, Javascript", "Welcome"));


//array methods
let number=[10,20,30,40,50];
//console.log(number.sort()); --> working
number.push(60);//Adds one or more elements to the end of an array
console.log(number);
number.pop();//Removes the last element from an array
console.log(number);
number.shift();// Removes the first element from an array
console.log(number);
number.unshift(5);//Adds one or more elements to the beginning of an array 
console.log(number);
number.sort();
console.log("Sort",number);
console.log(number.indexOf(40));
console.log(number.slice(1, 4));
console.log(number.join(" 2 "));
console.log(number.concat(15));
console.log(number.reverse());//Reverses the order of the elements in an array 

//const numbers=[100,20,30,500];
//const fruits=["apple", "cat", "dog", "Cucumber"];
//fruits.sort((a,b)=> a-b);
//console.log(numbers.sort());
//console.log(fruits);

//object Manipulation
let person = {
    name: "Haripriya",
    age: 23,
    city: "Namakkal"
};
console.log(person.name);
console.log(person.age);
person.age=24; //To update the age
//console.log(person.age=24); another way to print the value directly
console.log(person.age);
person.city="Salem";//To update the city
person.Country="India";
console.log(person);

//array of Objects
let students = [
    {
        id:1,
        name:"Kavi",
        grade: 90
    },
    {
        id:2,
        name:"Ram",
        grade:89
    },
    {
        id:3,
        name:"Siva",
        grade:92
    },
];
console.log(students);
console.log(students[0].name);

students.forEach(students =>{
    console.log(`${students.name} scored ${students.grade}`);
})

//nested objects
let comapny = {
    name: "Tech corp",
    employeeID: 102,
    address:{
        street: "32, kk street",
        city: "Madurai",
        State: "Tamilnadu",
    },
    employees:[
        {name: "Ajay",position:"Developer"},
        {name: "Haripriya",position:"Designer"}
    ]
};

console.log(comapny.address.city);
console.log(comapny.employees[0]);
console.log(comapny.employees[0].name);
console.log(comapny.employees[1].position);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//27-11-2025 Thursday

//Conditional  Statements

// if statement
// if else statement
// if else if else statement
// switch statement
// ternary (conditional) operator

// if statement

let ab = 10;
if (ab>10) {
    console.log(false);
}

if(ab<=10){
    console.log(true);
}

//if else statement
let age = 13;
if(age >= 18){
    console.log("Eligible for Vote");
}
else{
    console.log("Not eligible for vote");
}

//if else if else statement
let score = 75;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

//switch statement
//evaluates an expression and executes code based on matching cases

let day = 6;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  default:
    dayName = "Weekend";
    break;
}
console.log(dayName);

//Ternary operator
// Evaluates a condition and returns one of two values based on whether the condition is true or false

//Syntax: condition? true expression: false expression

let marks = 45;
let result = (marks > 50) ? "Pass": "Fail";
console.log(result);


//Looping Statements ---- Loops can execute a block of code a number of times.

//for ----- allows a block of code to be executed repeatedly a specific number of times
//while ---- loop loops through a block of code as long as a specified condition is true
//do ------  
//break
//continue