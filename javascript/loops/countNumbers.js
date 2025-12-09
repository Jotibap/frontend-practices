let num = 234567;

let str = String(num);
let count = 0;

while (num > 0) {
  num = (num - (num % 10)) / 10;
  count++;
}

console.log(count);
