// const clients = ["Mango", "Ajax", "Poly", "Pasha", "Oksana", "Lev"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// console.log(string.length);

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;

// for (const client of clients) {
//   // На кожній ітерації будемо перевіряти чи збігається елемент масиву з
//   // іменем клієнта. Якщо збігається - записуємо в message повідомлення
//   // про успіх і робимо break, щоб далі не шукати
//   if (client === clientNameToFind) {
//     message = "Клієнт з таким ім'ям є в базі даних!";
//     break;
//   }

//   // Якщо вони не збігаються - записуємо в message повідомлення про відсутність імені
//   message = "Клієнт з таким ім'ям відсутній в базі даних!";
// }

// console.log(message); // "Клієнт з таким ім'ям є в базі даних!"

// const clients = ["Mango", "Ajax", "Poly", "Pasha", "Oksana", "Lev"];
// const findClient = "Ledv";
// let message;

// for (const client of clients) {
//   if (client === findClient) {
//     message = "Find";
//     break;
//   }
//   message = "Not find";
// }
// console.log(message);

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// let threshold = 5;
// numbers.push(99, 999, 12312313, 1, 3, 14, 18, 4, 7, 29, 6, 34);

// // Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// // припиняється і управління передається на наступну ітерацію.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     // continue;
//   }

//   console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// const name = "Mango, pasha, oksana";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]
// console.log(name.lenght);
// const message = "JavaScript - це цікаво";
// console.log(message.split("-")); // ["JavaScript", "-", "це", "цікаво"]

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const clientsNew = clients.splice(0, 2);
// console.log(clients);
// console.log(clientsNew); // ["Mango", Ajax", "Poly", "Kiwi"]

// ЗАВДАННЯ 1/32

// function checkAge(age) {
//   if (age >= 18) {
//     // Change this line
//     return "You are an adult";
//   }
//   return "You are a minor";
// }
// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));

// ЗАВДАННЯ 2/32

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }
//   return "Access denied, wrong password!";
// }
// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

// ЗАВДАННЯ 3/32

// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//   return "The order is accepted, our manager will contact you";
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// ЗАВДАННЯ 4/32

// const fruits = ["apple", "plum", "pear", "orange"];

// ЗАВДАННЯ 5/32

// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];

// console.log(fruits);
// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);

// ЗАВДАННЯ 6/32

// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = "peach";
// fruits[3] = "banana";
// console.log(fruits);

// ЗАВДАННЯ 7/32

// const fruits = ["apple", "peach", "pear", "banana"];

// const fruitsArrayLength = fruits.length;

// console.log(fruits);
// console.log(fruitsArrayLength);

// ЗАВДАННЯ 8/32

// const fruits = ["apple", "peach", "pear", "banana"];

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// console.log(fruits);
// console.log(lastElementIndex);
// console.log(lastElement);

// ЗАВДАННЯ 9/32

// function getExtremeElements(array) {
//   array = [array[0], array[array.length - 1]];
//   return array;
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

// ЗАВДАННЯ 10/32

// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimiter);
//   // Change code above this line
//   return words;
// }

// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""));
// console.log(splitMessage("best_for_week", "_"));

// ЗАВДАННЯ 11/32
