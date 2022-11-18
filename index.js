// Запитувати у користувача число до тих пір, доки воно не буде більше 15 і менше 35 і кратне 6 (18,24,30 підходить)
// В користувача є 3 спроби

// зробити двома способами через while і for

// * це повинна бути функція(можливо і не одна)

let count = 1;
while (true) {
  count++;
  const inputNumber = prompt("Enter number");
  if (inputNumber > 15 && inputNumber < 35 && inputNumber % 6 === 0) {
    console.log("True");
    break;
  }
  if (count > 3) {
    console.log("Error");
    break;
  }
}

for (let i = 0; i < 3; i++) {
  const userInputNumber = prompt("Enter number");
  if (
    (userInputNumber > 15) & (userInputNumber < 35) &&
    userInputNumber % 6 === 0
  ) {
    console.log(userInputNumber);
    break;
  }
  if (i < 3) {
    console.log("error");
  }
}
