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

// function calculateEngravingPrice(message, pricePerWord) {
//   const messageWords = message.split(" ");
//   const summWords = messageWords.length;
//   const totalPrice = summWords * pricePerWord;
//   return totalPrice;
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));

// ЗАВДАННЯ 12/32

// function makeStringFromArray(array, delimiter) {
//   let string;
//   string = array.join(delimiter);
//   return string;
// }
// console.log(
//   makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ")
// );
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
// console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));

// console.log();

// ЗАВДАННЯ 13/32

// function slugify(title) {
//   let slug = title.toLowerCase().split(" ").join("-");
//   return slug;
// }

// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

// console.log();

// ЗАВДАННЯ 14/32

// const fruits = ["apple", "plum", "pear", "orange", "banana"];
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(fruits.length - 3, fruits.length);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// console.log();
// console.log();

// ЗАВДАННЯ 15/32

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];

// const allClients = oldClients.concat(newClients);

// console.log(allClients);

// ЗАВДАННЯ 16/32

// function makeArray(firstArray, secondArray, maxLength) {
//   let newArray =
//     firstArray.concat(secondArray).length > maxLength
//       ? firstArray.concat(secondArray).slice(0, maxLength)
//       : firstArray.concat(secondArray).slice(0, maxLength);
//   return newArray;
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));

// console.log();

// ЗАВДАННЯ 17/32

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   console.log(i);
// }

// console.log();

// ЗАВДАННЯ 18/32

// function calculateTotal(number) {
//   let arr;
//   arr = 0;
//   for (let i = 1; i <= number; i++) {
//     arr = i + arr;
//   }
//   return arr;
// }
// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));
// console.log(calculateTotal());

// ЗАВДАННЯ 19/32

// const fruits = ["apple", "plum", "pear", "orange"];

// for (let i = 0; i < fruits.length; i++) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }

// ЗАВДАННЯ 20/32 - TOTAL

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// ЗАВДАННЯ 21/32

// function findLongestWord(string) {
//   for (let i = 0; i, string.length; i += 1) {
//     consol.log(string[i]);
//   }
//   return string;
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));

//Напишите код, который будет спрашивать
//логин с помощью prompt и логировать результат
//в консоль браузера

//Если посетитель вводит "Админ",
//то prompt запрашивает пароль.
//Если ничего не ввели или нажата клавиша Esc
//вывести стороку "Отменено"
//В противном случае вывести строку "Я вас не знаю"

//Пароль проверять так:
//Если введён пароль "Я главный",
//то вывести строку "Здравствуйте!"
//иначе выводить строку "Неверный пароль!"

// Домашка

//Напишите функцию caclculateAverage()
//которая принимает произвольное количество
//аргументов и возвращает их среднее значение.
//Добавить проверку, что аргументы это числа.
