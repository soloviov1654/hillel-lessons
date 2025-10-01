let userNumber = prompt("Enter your number (3 digits)");

if (userNumber[0] === userNumber[1] && userNumber[0] === userNumber[2]) {
console.log("All the numbers are the same")
} else {
    console.log("We have different numbers")
}

if (userNumber[0] === userNumber[1]) {
    console.log("And have two same numbers")
} else if (userNumber[0] === userNumber[2]) {
    console.log("And have two same numbers")
}
else if (userNumber[1] === userNumber[2]) {
    console.log("And have two same numbers")
} else {
    console.log("Do not have two same")
}