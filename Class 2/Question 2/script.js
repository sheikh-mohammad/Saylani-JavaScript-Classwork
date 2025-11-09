let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

// Slice
console.log(fruits.slice(fruits.indexOf("Banana"), fruits.indexOf("Date") + 1));

// Splice
fruits.splice(2, 2, "Grape", "Honeydew");

// Push
fruits.push("Fig", "Grapes");

// Pop
fruits.pop();

// Shift
fruits.shift();

// Unshift
fruits.unshift("Avocado");

console.log(fruits.indexOf("Honeydew"));
