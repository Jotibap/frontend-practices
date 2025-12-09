let arr = [2, 4, 1, 7, 9, 6, 5];

let max = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max);
