let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

console.log(fruits.slice(fruits.indexOf("Banana"), fruits.indexOf("Date") + 1));

fruits.splice(2, 2, "Grape", "Honeydew");

fruits.push("Fig", "Grapes");

fruits.pop();

fruits.shift();

fruits.unshift("Avocado");

console.log(fruits.indexOf("Honeydew"));
