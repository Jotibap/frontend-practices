let marks = prompt("Enter your marks: ");

if (marks >= 90 && marks <= 100) {
  console.log("you secured grade A");
} else if (marks >= 70 && marks <= 90) {
  console.log("you secured grade B");
} else if (marks >= 50 && marks <= 70) {
  console.log("you secured grade C");
} else if (marks >= 35 && marks <= 50) {
  console.log("pass");
} else {
  console.log("fail");
}
