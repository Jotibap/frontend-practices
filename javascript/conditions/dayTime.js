let time = prompt("Enter time: ");

if (time >= 9 && time <= 12) {
  console.log("Good morning");
} else if (time >= 12 && time <= 15) {
  console.log("Good afternoon");
} else if (time >= 15 && time <= 20) {
  console.log("Good evening");
} else {
  console.log("Good night");
}
