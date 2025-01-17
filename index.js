"use strict";

function compare(num1, num2, num3) {
  if (num1 < num2 && num1 > num3) {
    alert(num1 + " is the smallest");
  } else if (num2 < num3 && num2 < num1) {
    alert(num2 + " is the smallest");
  } else if (num3 < num2 && num3 < num1) {
    alert(num3 + " is the smallest");
  }
}

function campareNumWithMath(num1, num2, num3) {
  let smallest = Math.min(num1, num2, num3);
  alert(smallest + " is the smallest");
} // This one is not working and I don't know why. If you could send me a message of why, that would be GREATLY appreciated. Please and thank you.

function OrZero(number) {
  if (number > 0) {
    alert("Positive");
  } else if (Number(number) === 0) {
    alert("Zero");
  } else if (number < 0) {
    alert("Negative");
  }
}
let UserInput = prompt("Pick a number");

OrZero(UserInput);

function votingAge(age) {
  if (age >= 18) {
    alert("You can cast your vote here.");
  } else {
    alert("You must be 18 to vote!");
  }
}
