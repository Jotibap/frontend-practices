let ch = prompt("Enetr a character:  ");

if (
  ch == "a" ||
  ch == "A" ||
  ch == "e" ||
  ch == "E" ||
  ch == "i" ||
  ch == "I" ||
  ch == "o" ||
  ch == "O" ||
  ch == "u" ||
  ch == "U"
) {
  console.log(ch + "  is a vowel");
} else {
  console.log(ch + "  is a consonant");
}
