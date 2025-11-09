let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

console.log(fruits.slice(fruits.indexOf("Banana"), fruits.indexOf("Date") + 1));

fruits.splice(2, 2, "Grape", "Honeydew");
console.log(fruits);

fruits.push("Fig", "Grapes");
