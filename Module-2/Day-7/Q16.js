const isEven = n => n % 2 === 0;
console.log(isEven(4)); 
console.log(isEven(7)); 
const marks = 42;
const result = marks >= 35 ? "Pass" : "Fail";
console.log(result); 
const greet = (name = "Guest") => console.log(`Hello, ${name}`);
greet("Ankitha");
greet();          