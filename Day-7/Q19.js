// 1. Template Literals + Expressions
console.log(`5 + 7 = ${5 + 7}`);

const multiLine = `Line one
Line two
Line three`;
console.log(multiLine);

const firstName = "John", lastName = "Doe";
console.log(`${firstName} ${lastName}`);

// 2. Arrow Functions & this
const square = n => n * n;

const objArrow = {
  value: 50,
  test: () => console.log(this.value) 
};

const objNormal = {
  value: 50,
  test() {
    console.log(this.value); 
  }
};

// 3. Rest, Spread & Copying Objects
const product = { name: "Pen", price: 10 };
const copyProduct = { ...product };

const a = { x: 1 }, b = { y: 2 };
const mergedAB = { ...a, ...b };

const maxValue = (...nums) => Math.max(...nums);
console.log(maxValue(5, 10, 3));

// 4. Destructuring & Optional Chaining
const arr = [10, 20, 30];
const [a1, b1] = arr;

const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;

const info = {};
console.log(info?.user?.details?.email); 

// 5. Scoping (let/var/const)
for (var i = 0; i < 3; i++) {}
console.log(i); // 3

for (let j = 0; j < 3; j++) {}


// 6. Ternary Operator – Practice
let kmph = 70;
let speed = kmph > 60 ? "Fast" : "Normal";

const age = 17;
const result = age >= 18 ? "Adult" : "Minor";

const num = -5;
const staetus = num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative";

// 7. Spread, Rest & Arrays
const nums = [1, 2, 3];
const extendedNums = [...nums, 4, 5];

const arrA = ["x", "y"], arrB = ["z"];
const combinedArr = [...arrA, ...arrB];

const printNames = (...names) => names;
console.log(printNames("A", "B", "C")); 

// 8. Object Destructuring & Shorthand
const userObj = { id: 101, stateus: "active" };
const { id, stateus } = userObj;

const role = "admin";
const userShort = { id, role };

const name = "Ankitha";
const userFull = {
  name,
  greet() {
    console.log(`Hello, ${this.name}`);
  }
};
userFull.greet();

// 9. Template Literals (More Practice)
console.log(`Today's date is ${new Date().toDateString()}`);

const score = 85;
console.log(`Hello ${name}, your score is ${score}/100`);

// 10. Arrow Function Shorthands
const add = (a, b) => a + b;
const isAdult = age => age >= 18;
const double = n => n * 2;

// 11. Spread Operator (Arrays & Objects)
const originalArr = [1, 2, 3];
const clonedArr = [...originalArr];

const updatedArr = [100, ...originalArr];

const obj1 = { name: "Alex", age: 25 };
const obj2 = { age: 30, city: "Bangalore" };
const mergedObj = { ...obj1, ...obj2 };

// 12. Optional Chaining (More Practice)
const user = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};
console.log(user?.address?.city); 
console.log(user?.job?.title);    

const data = {
  settings: null
};
console.log(data.settings?.theme); 