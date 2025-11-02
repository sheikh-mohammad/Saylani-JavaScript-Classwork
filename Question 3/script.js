var temp = +prompt("Enter Temperature:");

if (temp > 30) {
    console.log("Wear light clothing");
} else if (temp >= 15) {
    console.log("Wear moderate clothing");
} else if (temp < 15) {
    console.log("Wear warm clothing");
}