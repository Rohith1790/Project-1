
var attempt = 0;
let num = Math.floor(Math.random() * 100)
console.log(num)
for (let i = 1; i <= 100; i++) {
let guess = prompt("guess a number b/w 1 - 100")
if (guess == num) {
console.log("congratulaitons you guessed the correct number")
console.log("you guessed the number with the score ${100 - i} in the attempt of ${i}")
break;
}
else if (num > guess && guess < 100) {
console.log("you guess is less than the actual number")
}
else if (num < guess && guess < 100) {
console.log("you guess is greater than the actual number")
}
attempt++;
}