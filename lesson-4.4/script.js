let numOrStr = prompt("Enter value number or string");


switch (true) {
  case numOrStr === null:
    console.log("cancelled");
    break;
  case numOrStr === "":
    console.log("empty");
    break;
  case isNaN(numOrStr):
    console.log("not a number");
    break;
  default:
    console.log("OK!");
    break;
}
