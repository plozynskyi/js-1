// 1; /////////////////////////////////////////////////////////////////////////////////

// // function makePizza() {
// //   return "Your pizza is being prepared, please wait.";
// // }
// // // Change code below this line

// // const result = makePizza();
// // const pointer = makePizza;

// 2; /////////////////////////////////////////////////////////////////////////////////

// // function deliverPizza(pizzaName) {
// //   return `Delivering ${pizzaName} pizza.`;
// // }

// // function makePizza(pizzaName) {
// //   return `Pizza ${pizzaName} is being prepared, please wait...`;
// // }

// // // Chande code below this line
// // function makeMessage(pizzaName, callback) {
// //   return callback(pizzaName);
// // }

// // console.log(makeMessage("Royal Grand", makePizza));
// // console.log(makeMessage("Ultracheese", deliverPizza));

// 3; /////////////////////////////////////////////////////////////////////////////////

// // function makePizza(pizzaName, callback) {
// //   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
// //   callback(pizzaName);
// // }

// // makePizza("Royal Grand", function deliverPizza(pizzaName) {
// //   console.log(`Delivering pizza ${pizzaName}.`);
// // });
// // // Change code below this line

// // makePizza("Ultracheese", function deliverPizza(pizzaName) {
// //   console.log(`Delivering pizza ${pizzaName}.`);
// // });

// 4; /////////////////////////////////////////////////////////////////////////////////

// // const pizzaPalace = {
// //   pizzas: ["Ultracheese", "Smoked", "Four meats"],
// //   order(pizzaName, makePizza, onOrderError) {
// //     if (pizzaPalace.pizzas.includes(pizzaName)) {
// //       return makePizza(pizzaName);
// //     } else {
// //       return onOrderError(
// //         `There is no pizza with a name ${pizzaName} in the assortment.`
// //       );
// //     }
// //   },
// // };
// // // Change code above this line

// // // Callback for onSuccess
// // function makePizza(pizzaName) {
// //   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// // }

// // // Callback for onError
// // function onOrderError(error) {
// //   return `Error! ${error}`;
// // }

// // // Method calls with callbacks

// // console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// // console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// // console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// // console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

// 5; /////////////////////////////////////////////////////////////////////////////////

// // function calculateTotalPrice(orderedItems) {
// //   let totalPrice = 0;
// //   // Change code below this line
// //   orderedItems.forEach(function (item) {
// //     totalPrice += item;
// //   });
// //   return totalPrice;
// //   // Change code above this line
// // }

// // console.log(calculateTotalPrice([12, 85, 37, 4]));
// // console.log(calculateTotalPrice([164, 48, 291]));
// // console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// 6; /////////////////////////////////////////////////////////////////////////////////

// // function filterArray(numbers, value) {
// //   const filteredNumbers = [];
// //   // Change code below this line

// //   numbers.forEach(function (number) {
// //     if (number > value) {
// //       filteredNumbers.push(number);
// //     }
// //   });

// //   // Change code above this line
// //   return filteredNumbers;
// // }

// // console.log(filterArray([1, 2, 3, 4, 5], 3));
// // console.log(filterArray([1, 2, 3, 4, 5], 4));
// // console.log(filterArray([1, 2, 3, 4, 5], 5));
// // console.log(filterArray([12, 24, 8, 41, 76], 38));
// // console.log(filterArray([12, 24, 8, 41, 76], 20));

// 7; /////////////////////////////////////////////////////////////////////////////////

// // function getCommonElements(firstArray, secondArray) {
// //   const commonElements = [];
// //   // Change code below this line

// //   firstArray.forEach(function (firstArrayElement) {
// //     if (secondArray.includes(firstArrayElement)) {
// //       commonElements.push(firstArrayElement);
// //     }
// //   });
// //   return commonElements;
// //   // Change code above this line
// // }

// // console.log(getCommonElements([1, 2, 3], [2, 4]));
// // console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// // console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// // console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// // console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// 8; /////////////////////////////////////////////////////////////////////////////////

// // // Change code below this line

// // const calculateTotalPrice = (quantity, pricePerItem) => {
// //   return quantity * pricePerItem;
// // };

// // console.log(calculateTotalPrice(5, 100));
// // console.log(calculateTotalPrice(8, 60));
// // console.log(calculateTotalPrice(3, 400));

// 9; /////////////////////////////////////////////////////////////////////////////////

// // Change code below this line
// // const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// // // Change code above this line

// // console.log(calculateTotalPrice(5, 100));
// // console.log(calculateTotalPrice(8, 60));
// // console.log(calculateTotalPrice(3, 400));

// 10; /////////////////////////////////////////////////////////////////////////////////

// // // Change code below this line
// // const calculateTotalPrice = (orderedItems) => {
// //   let totalPrice = 0;

// //   orderedItems.forEach((item) => (totalPrice += item));

// //   return totalPrice;
// // };
// // // Change code above this line

// // console.log(calculateTotalPrice([12, 85, 37, 4]));
// // console.log(calculateTotalPrice([164, 48, 291]));
// // console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// 11; /////////////////////////////////////////////////////////////////////////////////

// // // Change code below this line
// // const filterArray = (numbers, value) => {
// //   const filteredNumbers = [];

// //   numbers.forEach((number) => {
// //     if (number > value) {
// //       filteredNumbers.push(number);
// //     }
// //   });

// //   // Change code above this line
// //   return filteredNumbers;
// // };

// // console.log(filterArray([1, 2, 3, 4, 5], 3));
// // console.log(filterArray([1, 2, 3, 4, 5], 4));
// // console.log(filterArray([1, 2, 3, 4, 5], 5));
// // console.log(filterArray([12, 24, 8, 41, 76], 38));
// // console.log(filterArray([12, 24, 8, 41, 76], 20));

// 12; /////////////////////////////////////////////////////////////////////////////////

// // // Change code below this line
// // const getCommonElements = (firstArray, secondArray) => {
// //   const commonElements = [];

// //   firstArray.forEach((element) => {
// //     if (secondArray.includes(element)) {
// //       commonElements.push(element);
// //     }
// //   });

// //   // Change code above this line
// //   return commonElements;
// // };

// // console.log(getCommonElements([1, 2, 3], [2, 4]));
// // console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// // console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// // console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// // console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// 13; /////////////////////////////////////////////////////////////////////////////////

// // function changeEven(numbers, value) {
// //   let newNumbers = [];
// //   numbers.forEach((element) => {
// //     if (element % 2 === 0) {
// //       newNumbers.push(element + value);
// //     } else {
// //       newNumbers.push(element);
// //     }
// //   });
// //   return newNumbers;
// // }
// // // Change code above this line
// // console.log(changeEven([1, 2, 3, 4, 5], 10));
// // console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
// // console.log(changeEven([17, 24, 68, 31, 42], 100));
// // console.log(changeEven([44, 13, 81, 92, 36, 54], 100));

// 14; /////////////////////////////////////////////////////////////////////////////////

// // const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // // Change code below this line
// // const planetsLengths = planets.map((planet) => planet.length);
// // console.log(planetsLengths);

// 15; /////////////////////////////////////////////////////////////////////////////////

// // const books = [
// //   {
// //     title: "The Last Kingdom",
// //     author: "Bernard Cornwell",
// //     rating: 8.38,
// //   },
// //   {
// //     title: "Beside Still Waters",
// //     author: "Robert Sheckley",
// //     rating: 8.51,
// //   },
// //   {
// //     title: "The Dream of a Ridiculous Man",
// //     author: "Fyodor Dostoevsky",
// //     rating: 7.75,
// //   },
// //   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// //   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// // ];
// // // Change code below this line

// // const titles = books.map((book) => book.title);

// // console.log(titles);

// 16; /////////////////////////////////////////////////////////////////////////////////

// // const books = [
// //   {
// //     title: "The Last Kingdom",
// //     author: "Bernard Cornwell",
// //     genres: ["adventure", "history"],
// //   },
// //   {
// //     title: "Beside Still Waters",
// //     author: "Robert Sheckley",
// //     genres: ["fiction"],
// //   },
// //   {
// //     title: "Redder Than Blood",
// //     author: "Tanith Lee",
// //     genres: ["horror", "mysticism"],
// //   },
// // ];
// // // Change code below this line

// // const genres = books.flatMap((book) => book.genres);

// // console.log(genres);

// 17; /////////////////////////////////////////////////////////////////////////////////

// // let users = [
// //   {
// //     name: "Moore Hensley",
// //     email: "moorehensley@indexia.com",
// //     eyeColor: "blue",
// //     friends: ["Sharron Pace"],
// //     isActive: false,
// //     balance: 2811,
// //     skills: ["ipsum", "lorem"],
// //     gender: "male",
// //     age: 37,
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     email: "sharlenebush@tubesys.com",
// //     eyeColor: "blue",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     isActive: true,
// //     balance: 3821,
// //     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
// //     gender: "female",
// //     age: 34,
// //   },
// //   {
// //     name: "Ross Vazquez",
// //     email: "rossvazquez@xinware.com",
// //     eyeColor: "green",
// //     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// //     isActive: false,
// //     balance: 3793,
// //     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
// //     gender: "male",
// //     age: 24,
// //   },
// //   {
// //     name: "Elma Head",
// //     email: "elmahead@omatom.com",
// //     eyeColor: "green",
// //     friends: ["Goldie Gentry", "Aisha Tran"],
// //     isActive: true,
// //     balance: 2278,
// //     skills: ["adipisicing", "irure", "velit"],
// //     gender: "female",
// //     age: 21,
// //   },
// //   {
// //     name: "Carey Barr",
// //     email: "careybarr@nurali.com",
// //     eyeColor: "blue",
// //     friends: ["Jordan Sampson", "Eddie Strong"],
// //     isActive: true,
// //     balance: 3951,
// //     skills: ["ex", "culpa", "nostrud"],
// //     gender: "male",
// //     age: 27,
// //   },
// //   {
// //     name: "Blackburn Dotson",
// //     email: "blackburndotson@furnigeer.com",
// //     eyeColor: "brown",
// //     friends: ["Jacklyn Lucas", "Linda Chapman"],
// //     isActive: false,
// //     balance: 1498,
// //     skills: ["non", "amet", "ipsum"],
// //     gender: "male",
// //     age: 38,
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     email: "shereeanthony@kog.com",
// //     eyeColor: "brown",
// //     friends: ["Goldie Gentry", "Briana Decker"],
// //     isActive: true,
// //     balance: 2764,
// //     skills: ["lorem", "veniam", "culpa"],
// //     gender: "female",
// //     age: 39,
// //   },
// // ];
// // const getUserNames = (users) => users.map((user) => user.name);

// // console.log(getUserNames);

// 18; /////////////////////////////////////////////////////////////////////////////////

// // let users = [
// //   {
// //     name: "Moore Hensley",
// //     email: "moorehensley@indexia.com",
// //     eyeColor: "blue",
// //     friends: ["Sharron Pace"],
// //     isActive: false,
// //     balance: 2811,
// //     skills: ["ipsum", "lorem"],
// //     gender: "male",
// //     age: 37,
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     email: "sharlenebush@tubesys.com",
// //     eyeColor: "blue",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     isActive: true,
// //     balance: 3821,
// //     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
// //     gender: "female",
// //     age: 34,
// //   },
// //   {
// //     name: "Ross Vazquez",
// //     email: "rossvazquez@xinware.com",
// //     eyeColor: "green",
// //     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// //     isActive: false,
// //     balance: 3793,
// //     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
// //     gender: "male",
// //     age: 24,
// //   },
// //   {
// //     name: "Elma Head",
// //     email: "elmahead@omatom.com",
// //     eyeColor: "green",
// //     friends: ["Goldie Gentry", "Aisha Tran"],
// //     isActive: true,
// //     balance: 2278,
// //     skills: ["adipisicing", "irure", "velit"],
// //     gender: "female",
// //     age: 21,
// //   },
// //   {
// //     name: "Carey Barr",
// //     email: "careybarr@nurali.com",
// //     eyeColor: "blue",
// //     friends: ["Jordan Sampson", "Eddie Strong"],
// //     isActive: true,
// //     balance: 3951,
// //     skills: ["ex", "culpa", "nostrud"],
// //     gender: "male",
// //     age: 27,
// //   },
// //   {
// //     name: "Blackburn Dotson",
// //     email: "blackburndotson@furnigeer.com",
// //     eyeColor: "brown",
// //     friends: ["Jacklyn Lucas", "Linda Chapman"],
// //     isActive: false,
// //     balance: 1498,
// //     skills: ["non", "amet", "ipsum"],
// //     gender: "male",
// //     age: 38,
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     email: "shereeanthony@kog.com",
// //     eyeColor: "brown",
// //     friends: ["Goldie Gentry", "Briana Decker"],
// //     isActive: true,
// //     balance: 2764,
// //     skills: ["lorem", "veniam", "culpa"],
// //     gender: "female",
// //     age: 39,
// //   },
// // ];
// // // Change code below this line
// // const getUserEmails = (users) => users.map((user) => user.email);
// // // Change code above this line

// // console.log(getUserEmails);

// 19; /////////////////////////////////////////////////////////////////////////////////

// // const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // // Change code below this line

// // const evenNumbers = numbers.filter((number) => number % 2 === 0);
// // const oddNumbers = numbers.filter((number) => number % 2 > );

// // console.log(evenNumbers);
// // console.log(oddNumbers);

// 20; /////////////////////////////////////////////////////////////////////////////////

// // const books = [
// //   {
// //     title: "The Last Kingdom",
// //     author: "Bernard Cornwell",
// //     genres: ["adventure", "history"],
// //   },
// //   {
// //     title: "Beside Still Waters",
// //     author: "Robert Sheckley",
// //     genres: ["fiction", "mysticism"],
// //   },
// //   {
// //     title: "Redder Than Blood",
// //     author: "Tanith Lee",
// //     genres: ["horror", "mysticism", "adventure"],
// //   },
// // ];
// // // Change code below this line
// // const allGenres = books.flatMap((book) => book.genres);
// // const uniqueGenres = allGenres.filter(
// //   (genr, index, arrey) => arrey.indexOf(genr) === index
// // );

// // console.log(allGenres);
// // console.log(uniqueGenres);
// 1; /////////////////////////////////////////////////////////////////////////////////

// // function makePizza() {
// //   return "Your pizza is being prepared, please wait.";
// // }
// // // Change code below this line

// // const result = makePizza();
// // const pointer = makePizza;

// 2; /////////////////////////////////////////////////////////////////////////////////

// // function deliverPizza(pizzaName) {
// //   return `Delivering ${pizzaName} pizza.`;
// // }

// // function makePizza(pizzaName) {
// //   return `Pizza ${pizzaName} is being prepared, please wait...`;
// // }

// // // Chande code below this line
// // function makeMessage(pizzaName, callback) {
// //   return callback(pizzaName);
// // }

// // console.log(makeMessage("Royal Grand", makePizza));
// // console.log(makeMessage("Ultracheese", deliverPizza));

// 3; /////////////////////////////////////////////////////////////////////////////////

// // function makePizza(pizzaName, callback) {
// //   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
// //   callback(pizzaName);
// // }

// // makePizza("Royal Grand", function deliverPizza(pizzaName) {
// //   console.log(`Delivering pizza ${pizzaName}.`);
// // });
// // // Change code below this line

// // makePizza("Ultracheese", function deliverPizza(pizzaName) {
// //   console.log(`Delivering pizza ${pizzaName}.`);
// // });

// 4; /////////////////////////////////////////////////////////////////////////////////

// // const pizzaPalace = {
// //   pizzas: ["Ultracheese", "Smoked", "Four meats"],
// //   order(pizzaName, makePizza, onOrderError) {
// //     if (pizzaPalace.pizzas.includes(pizzaName)) {
// //       return makePizza(pizzaName);
// //     } else {
// //       return onOrderError(
// //         `There is no pizza with a name ${pizzaName} in the assortment.`
// //       );
// //     }
// //   },
// // };
// // // Change code above this line

// // // Callback for onSuccess
// // function makePizza(pizzaName) {
// //   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// // }

// // // Callback for onError
// // function onOrderError(error) {
// //   return `Error! ${error}`;
// // }

// // // Method calls with callbacks

// // console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// // console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// // console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// // console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

// 5; /////////////////////////////////////////////////////////////////////////////////

// // function calculateTotalPrice(orderedItems) {
// //   let totalPrice = 0;
// //   // Change code below this line
// //   orderedItems.forEach(function (item) {
// //     totalPrice += item;
// //   });
// //   return totalPrice;
// //   // Change code above this line
// // }

// // console.log(calculateTotalPrice([12, 85, 37, 4]));
// // console.log(calculateTotalPrice([164, 48, 291]));
// // console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// 6; /////////////////////////////////////////////////////////////////////////////////

// // function filterArray(numbers, value) {
// //   const filteredNumbers = [];
// //   // Change code below this line

// //   numbers.forEach(function (number) {
// //     if (number > value) {
// //       filteredNumbers.push(number);
// //     }
// //   });

// //   // Change code above this line
// //   return filteredNumbers;
// // }

// // console.log(filterArray([1, 2, 3, 4, 5], 3));
// // console.log(filterArray([1, 2, 3, 4, 5], 4));
// // console.log(filterArray([1, 2, 3, 4, 5], 5));
// // console.log(filterArray([12, 24, 8, 41, 76], 38));
// // console.log(filterArray([12, 24, 8, 41, 76], 20));

// 7; /////////////////////////////////////////////////////////////////////////////////

// // function getCommonElements(firstArray, secondArray) {
// //   const commonElements = [];
// //   // Change code below this line

// //   firstArray.forEach(function (firstArrayElement) {
// //     if (secondArray.includes(firstArrayElement)) {
// //       commonElements.push(firstArrayElement);
// //     }
// //   });
// //   return commonElements;
// //   // Change code above this line
// // }

// // console.log(getCommonElements([1, 2, 3], [2, 4]));
// // console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// // console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// // console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// // console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// 8; /////////////////////////////////////////////////////////////////////////////////

// // // Change code below this line

// // const calculateTotalPrice = (quantity, pricePerItem) => {
// //   return quantity * pricePerItem;
// // };

// // console.log(calculateTotalPrice(5, 100));
// // console.log(calculateTotalPrice(8, 60));
// // console.log(calculateTotalPrice(3, 400));

// 9; /////////////////////////////////////////////////////////////////////////////////

// // Change code below this line
// // const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// // // Change code above this line

// // console.log(calculateTotalPrice(5, 100));
// // console.log(calculateTotalPrice(8, 60));
// // console.log(calculateTotalPrice(3, 400));

// 10; /////////////////////////////////////////////////////////////////////////////////

// // // Change code below this line
// // const calculateTotalPrice = (orderedItems) => {
// //   let totalPrice = 0;

// //   orderedItems.forEach((item) => (totalPrice += item));

// //   return totalPrice;
// // };
// // // Change code above this line

// // console.log(calculateTotalPrice([12, 85, 37, 4]));
// // console.log(calculateTotalPrice([164, 48, 291]));
// // console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// 11; /////////////////////////////////////////////////////////////////////////////////

// // // Change code below this line
// // const filterArray = (numbers, value) => {
// //   const filteredNumbers = [];

// //   numbers.forEach((number) => {
// //     if (number > value) {
// //       filteredNumbers.push(number);
// //     }
// //   });

// //   // Change code above this line
// //   return filteredNumbers;
// // };

// // console.log(filterArray([1, 2, 3, 4, 5], 3));
// // console.log(filterArray([1, 2, 3, 4, 5], 4));
// // console.log(filterArray([1, 2, 3, 4, 5], 5));
// // console.log(filterArray([12, 24, 8, 41, 76], 38));
// // console.log(filterArray([12, 24, 8, 41, 76], 20));

// 12; /////////////////////////////////////////////////////////////////////////////////

// // // Change code below this line
// // const getCommonElements = (firstArray, secondArray) => {
// //   const commonElements = [];

// //   firstArray.forEach((element) => {
// //     if (secondArray.includes(element)) {
// //       commonElements.push(element);
// //     }
// //   });

// //   // Change code above this line
// //   return commonElements;
// // };

// // console.log(getCommonElements([1, 2, 3], [2, 4]));
// // console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// // console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// // console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// // console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// 13; /////////////////////////////////////////////////////////////////////////////////

// // function changeEven(numbers, value) {
// //   let newNumbers = [];
// //   numbers.forEach((element) => {
// //     if (element % 2 === 0) {
// //       newNumbers.push(element + value);
// //     } else {
// //       newNumbers.push(element);
// //     }
// //   });
// //   return newNumbers;
// // }
// // // Change code above this line
// // console.log(changeEven([1, 2, 3, 4, 5], 10));
// // console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
// // console.log(changeEven([17, 24, 68, 31, 42], 100));
// // console.log(changeEven([44, 13, 81, 92, 36, 54], 100));

// 14; /////////////////////////////////////////////////////////////////////////////////

// // const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // // Change code below this line
// // const planetsLengths = planets.map((planet) => planet.length);
// // console.log(planetsLengths);

// 15; /////////////////////////////////////////////////////////////////////////////////

// // const books = [
// //   {
// //     title: "The Last Kingdom",
// //     author: "Bernard Cornwell",
// //     rating: 8.38,
// //   },
// //   {
// //     title: "Beside Still Waters",
// //     author: "Robert Sheckley",
// //     rating: 8.51,
// //   },
// //   {
// //     title: "The Dream of a Ridiculous Man",
// //     author: "Fyodor Dostoevsky",
// //     rating: 7.75,
// //   },
// //   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// //   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// // ];
// // // Change code below this line

// // const titles = books.map((book) => book.title);

// // console.log(titles);

// 16; /////////////////////////////////////////////////////////////////////////////////

// // const books = [
// //   {
// //     title: "The Last Kingdom",
// //     author: "Bernard Cornwell",
// //     genres: ["adventure", "history"],
// //   },
// //   {
// //     title: "Beside Still Waters",
// //     author: "Robert Sheckley",
// //     genres: ["fiction"],
// //   },
// //   {
// //     title: "Redder Than Blood",
// //     author: "Tanith Lee",
// //     genres: ["horror", "mysticism"],
// //   },
// // ];
// // // Change code below this line

// // const genres = books.flatMap((book) => book.genres);

// // console.log(genres);

// 17; /////////////////////////////////////////////////////////////////////////////////

// // let users = [
// //   {
// //     name: "Moore Hensley",
// //     email: "moorehensley@indexia.com",
// //     eyeColor: "blue",
// //     friends: ["Sharron Pace"],
// //     isActive: false,
// //     balance: 2811,
// //     skills: ["ipsum", "lorem"],
// //     gender: "male",
// //     age: 37,
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     email: "sharlenebush@tubesys.com",
// //     eyeColor: "blue",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     isActive: true,
// //     balance: 3821,
// //     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
// //     gender: "female",
// //     age: 34,
// //   },
// //   {
// //     name: "Ross Vazquez",
// //     email: "rossvazquez@xinware.com",
// //     eyeColor: "green",
// //     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// //     isActive: false,
// //     balance: 3793,
// //     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
// //     gender: "male",
// //     age: 24,
// //   },
// //   {
// //     name: "Elma Head",
// //     email: "elmahead@omatom.com",
// //     eyeColor: "green",
// //     friends: ["Goldie Gentry", "Aisha Tran"],
// //     isActive: true,
// //     balance: 2278,
// //     skills: ["adipisicing", "irure", "velit"],
// //     gender: "female",
// //     age: 21,
// //   },
// //   {
// //     name: "Carey Barr",
// //     email: "careybarr@nurali.com",
// //     eyeColor: "blue",
// //     friends: ["Jordan Sampson", "Eddie Strong"],
// //     isActive: true,
// //     balance: 3951,
// //     skills: ["ex", "culpa", "nostrud"],
// //     gender: "male",
// //     age: 27,
// //   },
// //   {
// //     name: "Blackburn Dotson",
// //     email: "blackburndotson@furnigeer.com",
// //     eyeColor: "brown",
// //     friends: ["Jacklyn Lucas", "Linda Chapman"],
// //     isActive: false,
// //     balance: 1498,
// //     skills: ["non", "amet", "ipsum"],
// //     gender: "male",
// //     age: 38,
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     email: "shereeanthony@kog.com",
// //     eyeColor: "brown",
// //     friends: ["Goldie Gentry", "Briana Decker"],
// //     isActive: true,
// //     balance: 2764,
// //     skills: ["lorem", "veniam", "culpa"],
// //     gender: "female",
// //     age: 39,
// //   },
// // ];
// // const getUserNames = (users) => users.map((user) => user.name);

// // console.log(getUserNames);

// 18; /////////////////////////////////////////////////////////////////////////////////

// // let users = [
// //   {
// //     name: "Moore Hensley",
// //     email: "moorehensley@indexia.com",
// //     eyeColor: "blue",
// //     friends: ["Sharron Pace"],
// //     isActive: false,
// //     balance: 2811,
// //     skills: ["ipsum", "lorem"],
// //     gender: "male",
// //     age: 37,
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     email: "sharlenebush@tubesys.com",
// //     eyeColor: "blue",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     isActive: true,
// //     balance: 3821,
// //     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
// //     gender: "female",
// //     age: 34,
// //   },
// //   {
// //     name: "Ross Vazquez",
// //     email: "rossvazquez@xinware.com",
// //     eyeColor: "green",
// //     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// //     isActive: false,
// //     balance: 3793,
// //     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
// //     gender: "male",
// //     age: 24,
// //   },
// //   {
// //     name: "Elma Head",
// //     email: "elmahead@omatom.com",
// //     eyeColor: "green",
// //     friends: ["Goldie Gentry", "Aisha Tran"],
// //     isActive: true,
// //     balance: 2278,
// //     skills: ["adipisicing", "irure", "velit"],
// //     gender: "female",
// //     age: 21,
// //   },
// //   {
// //     name: "Carey Barr",
// //     email: "careybarr@nurali.com",
// //     eyeColor: "blue",
// //     friends: ["Jordan Sampson", "Eddie Strong"],
// //     isActive: true,
// //     balance: 3951,
// //     skills: ["ex", "culpa", "nostrud"],
// //     gender: "male",
// //     age: 27,
// //   },
// //   {
// //     name: "Blackburn Dotson",
// //     email: "blackburndotson@furnigeer.com",
// //     eyeColor: "brown",
// //     friends: ["Jacklyn Lucas", "Linda Chapman"],
// //     isActive: false,
// //     balance: 1498,
// //     skills: ["non", "amet", "ipsum"],
// //     gender: "male",
// //     age: 38,
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     email: "shereeanthony@kog.com",
// //     eyeColor: "brown",
// //     friends: ["Goldie Gentry", "Briana Decker"],
// //     isActive: true,
// //     balance: 2764,
// //     skills: ["lorem", "veniam", "culpa"],
// //     gender: "female",
// //     age: 39,
// //   },
// // ];
// // // Change code below this line
// // const getUserEmails = (users) => users.map((user) => user.email);
// // // Change code above this line

// // console.log(getUserEmails);

// 19; /////////////////////////////////////////////////////////////////////////////////

// // const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // // Change code below this line

// // const evenNumbers = numbers.filter((number) => number % 2 === 0);
// // const oddNumbers = numbers.filter((number) => number % 2 > );

// // console.log(evenNumbers);
// // console.log(oddNumbers);

// 20; /////////////////////////////////////////////////////////////////////////////////

// // const books = [
// //   {
// //     title: "The Last Kingdom",
// //     author: "Bernard Cornwell",
// //     genres: ["adventure", "history"],
// //   },
// //   {
// //     title: "Beside Still Waters",
// //     author: "Robert Sheckley",
// //     genres: ["fiction", "mysticism"],
// //   },
// //   {
// //     title: "Redder Than Blood",
// //     author: "Tanith Lee",
// //     genres: ["horror", "mysticism", "adventure"],
// //   },
// // ];
// // // Change code below this line
// // const allGenres = books.flatMap((book) => book.genres);
// // const uniqueGenres = allGenres.filter(
// //   (genr, index, arrey) => arrey.indexOf(genr) === index
// // );

// // console.log(allGenres);
// // console.log(uniqueGenres);

// 21; /////////////////////////////////////////////////////////////////////////////////

// // const books = [
// //   {
// //     title: "The Last Kingdom",
// //     author: "Bernard Cornwell",
// //     rating: 8.38,
// //   },
// //   {
// //     title: "Beside Still Waters",
// //     author: "Robert Sheckley",
// //     rating: 8.51,
// //   },
// //   {
// //     title: "The Dream of a Ridiculous Man",
// //     author: "Fyodor Dostoevsky",
// //     rating: 7.75,
// //   },
// //   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// //   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// // ];

// // const MIN_RATING = 8;
// // const AUTHOR = "Bernard Cornwell";
// // // Change code below this line

// // const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
// // const booksByAuthor = books.filter((book) => book.author === AUTHOR);

// // console.log(topRatedBooks);
// // console.log(booksByAuthor);

// 22; /////////////////////////////////////////////////////////////////////////////////

// // const users = [
// //   {
// //     name: "Moore Hensley",
// //     email: "moorehensley@indexia.com",
// //     eyeColor: "blue",
// //     friends: ["Sharron Pace"],
// //     isActive: false,
// //     balance: 2811,
// //     gender: "male",
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     email: "sharlenebush@tubesys.com",
// //     eyeColor: "blue",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     isActive: true,
// //     balance: 3821,
// //     gender: "female",
// //   },
// //   {
// //     name: "Ross Vazquez",
// //     email: "rossvazquez@xinware.com",
// //     eyeColor: "green",
// //     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// //     isActive: false,
// //     balance: 3793,
// //     gender: "male",
// //   },
// //   {
// //     name: "Elma Head",
// //     email: "elmahead@omatom.com",
// //     eyeColor: "green",
// //     friends: ["Goldie Gentry", "Aisha Tran"],
// //     isActive: true,
// //     balance: 2278,
// //     gender: "female",
// //   },
// //   {
// //     name: "Carey Barr",
// //     email: "careybarr@nurali.com",
// //     eyeColor: "blue",
// //     friends: ["Jordan Sampson", "Eddie Strong"],
// //     isActive: true,
// //     balance: 3951,
// //     gender: "male",
// //   },
// //   {
// //     name: "Blackburn Dotson",
// //     email: "blackburndotson@furnigeer.com",
// //     eyeColor: "brown",
// //     friends: ["Jacklyn Lucas", "Linda Chapman"],
// //     isActive: false,
// //     balance: 1498,
// //     gender: "male",
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     email: "shereeanthony@kog.com",
// //     eyeColor: "brown",
// //     friends: ["Goldie Gentry", "Briana Decker"],
// //     isActive: true,
// //     balance: 2764,
// //     gender: "female",
// //   },
// // ];

// // const getUsersWithEyeColor = (users, color) =>
// //   users.filter((user) => user.eyeColor === color);

// // console.log(getUsersWithEyeColor(users, "blue"));
// // console.log(getUsersWithEyeColor(users, "green"));
// // console.log(getUsersWithEyeColor(users, "brown"));

// 23; /////////////////////////////////////////////////////////////////////////////////

// // const users = [
// //   {
// //     name: "Moore Hensley",
// //     email: "moorehensley@indexia.com",
// //     eyeColor: "blue",
// //     friends: ["Sharron Pace"],
// //     isActive: false,
// //     balance: 2811,
// //     gender: "male",
// //     age: 37,
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     email: "sharlenebush@tubesys.com",
// //     eyeColor: "blue",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     isActive: true,
// //     balance: 3821,
// //     gender: "female",
// //     age: 34,
// //   },
// //   {
// //     name: "Ross Vazquez",
// //     email: "rossvazquez@xinware.com",
// //     eyeColor: "green",
// //     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// //     isActive: false,
// //     balance: 3793,
// //     gender: "male",
// //     age: 24,
// //   },
// //   {
// //     name: "Elma Head",
// //     email: "elmahead@omatom.com",
// //     eyeColor: "green",
// //     friends: ["Goldie Gentry", "Aisha Tran"],
// //     isActive: true,
// //     balance: 2278,
// //     gender: "female",
// //     age: 21,
// //   },
// //   {
// //     name: "Carey Barr",
// //     email: "careybarr@nurali.com",
// //     eyeColor: "blue",
// //     friends: ["Jordan Sampson", "Eddie Strong"],
// //     isActive: true,
// //     balance: 3951,
// //     gender: "male",
// //     age: 27,
// //   },
// //   {
// //     name: "Blackburn Dotson",
// //     email: "blackburndotson@furnigeer.com",
// //     eyeColor: "brown",
// //     friends: ["Jacklyn Lucas", "Linda Chapman"],
// //     isActive: false,
// //     balance: 1498,
// //     gender: "male",
// //     age: 38,
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     email: "shereeanthony@kog.com",
// //     eyeColor: "brown",
// //     friends: ["Goldie Gentry", "Briana Decker"],
// //     isActive: true,
// //     balance: 2764,
// //     gender: "female",
// //     age: 39,
// //   },
// // ];

// // const getUsersWithAge = (users, minAge, maxAge) =>
// //   users.filter((user) => user.age >= minAge && user.age < maxAge);

// // console.log(getUsersWithAge(users, 20, 30));
// // console.log(getUsersWithAge(users, 30, 40));
// // console.log(getUsersWithAge(users, 80, 100));

// 24; /////////////////////////////////////////////////////////////////////////////////

// // const users = [
// //   {
// //     name: "Moore Hensley",
// //     email: "moorehensley@indexia.com",
// //     eyeColor: "blue",
// //     friends: ["Sharron Pace"],
// //     isActive: false,
// //     balance: 2811,
// //     gender: "male",
// //     age: 37,
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     email: "sharlenebush@tubesys.com",
// //     eyeColor: "blue",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     isActive: true,
// //     balance: 3821,
// //     gender: "female",
// //     age: 34,
// //   },
// //   {
// //     name: "Ross Vazquez",
// //     email: "rossvazquez@xinware.com",
// //     eyeColor: "green",
// //     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// //     isActive: false,
// //     balance: 3793,
// //     gender: "male",
// //     age: 24,
// //   },
// //   {
// //     name: "Elma Head",
// //     email: "elmahead@omatom.com",
// //     eyeColor: "green",
// //     friends: ["Goldie Gentry", "Aisha Tran"],
// //     isActive: true,
// //     balance: 2278,
// //     gender: "female",
// //     age: 21,
// //   },
// //   {
// //     name: "Carey Barr",
// //     email: "careybarr@nurali.com",
// //     eyeColor: "blue",
// //     friends: ["Jordan Sampson", "Eddie Strong"],
// //     isActive: true,
// //     balance: 3951,
// //     gender: "male",
// //     age: 27,
// //   },
// //   {
// //     name: "Blackburn Dotson",
// //     email: "blackburndotson@furnigeer.com",
// //     eyeColor: "brown",
// //     friends: ["Jacklyn Lucas", "Linda Chapman"],
// //     isActive: false,
// //     balance: 1498,
// //     gender: "male",
// //     age: 38,
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     email: "shereeanthony@kog.com",
// //     eyeColor: "brown",
// //     friends: ["Goldie Gentry", "Briana Decker"],
// //     isActive: true,
// //     balance: 2764,
// //     gender: "female",
// //     age: 39,
// //   },
// // ];

// // const getUsersWithFriend = (users, friendName) =>
// //   users.filter((friend) => friend.friends.includes(friendName));
// // console.log(getUsersWithFriend(users, "Briana Decker"));
// // console.log(getUsersWithFriend(users, "Goldie Gentry"));
// // console.log(getUsersWithFriend(users, "Adrian Cross"));

// 25; /////////////////////////////////////////////////////////////////////////////////

// // const users = [
// //   {
// //     name: "Moore Hensley",
// //     email: "moorehensley@indexia.com",
// //     eyeColor: "blue",
// //     friends: ["Sharron Pace"],
// //     isActive: false,
// //     balance: 2811,
// //     gender: "male",
// //     age: 37,
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     email: "sharlenebush@tubesys.com",
// //     eyeColor: "blue",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     isActive: true,
// //     balance: 3821,
// //     gender: "female",
// //     age: 34,
// //   },
// //   {
// //     name: "Ross Vazquez",
// //     email: "rossvazquez@xinware.com",
// //     eyeColor: "green",
// //     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// //     isActive: false,
// //     balance: 3793,
// //     gender: "male",
// //     age: 24,
// //   },
// //   {
// //     name: "Elma Head",
// //     email: "elmahead@omatom.com",
// //     eyeColor: "green",
// //     friends: ["Goldie Gentry", "Aisha Tran"],
// //     isActive: true,
// //     balance: 2278,
// //     gender: "female",
// //     age: 21,
// //   },
// //   {
// //     name: "Carey Barr",
// //     email: "careybarr@nurali.com",
// //     eyeColor: "blue",
// //     friends: ["Jordan Sampson", "Eddie Strong"],
// //     isActive: true,
// //     balance: 3951,
// //     gender: "male",
// //     age: 27,
// //   },
// //   {
// //     name: "Blackburn Dotson",
// //     email: "blackburndotson@furnigeer.com",
// //     eyeColor: "brown",
// //     friends: ["Jacklyn Lucas", "Linda Chapman"],
// //     isActive: false,
// //     balance: 1498,
// //     gender: "male",
// //     age: 38,
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     email: "shereeanthony@kog.com",
// //     eyeColor: "brown",
// //     friends: ["Goldie Gentry", "Briana Decker"],
// //     isActive: true,
// //     balance: 2764,
// //     gender: "female",
// //     age: 39,
// //   },
// // ];

// // const getFriends = (users) =>
// //   users
// //     .flatMap((user) => user.friends)
// //     .filter((friend, index, array) => array.indexOf(friend) === index);

// // console.log(users);

// 26; /////////////////////////////////////////////////////////////////////////////////

// // const users = [
// //   {
// //     name: "Moore Hensley",
// //     email: "moorehensley@indexia.com",
// //     eyeColor: "blue",
// //     friends: ["Sharron Pace"],
// //     isActive: false,
// //     balance: 2811,
// //     gender: "male",
// //     age: 37,
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     email: "sharlenebush@tubesys.com",
// //     eyeColor: "blue",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     isActive: true,
// //     balance: 3821,
// //     gender: "female",
// //     age: 34,
// //   },
// //   {
// //     name: "Ross Vazquez",
// //     email: "rossvazquez@xinware.com",
// //     eyeColor: "green",
// //     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// //     isActive: false,
// //     balance: 3793,
// //     gender: "male",
// //     age: 24,
// //   },
// //   {
// //     name: "Elma Head",
// //     email: "elmahead@omatom.com",
// //     eyeColor: "green",
// //     friends: ["Goldie Gentry", "Aisha Tran"],
// //     isActive: true,
// //     balance: 2278,
// //     gender: "female",
// //     age: 21,
// //   },
// //   {
// //     name: "Carey Barr",
// //     email: "careybarr@nurali.com",
// //     eyeColor: "blue",
// //     friends: ["Jordan Sampson", "Eddie Strong"],
// //     isActive: true,
// //     balance: 3951,
// //     gender: "male",
// //     age: 27,
// //   },
// //   {
// //     name: "Blackburn Dotson",
// //     email: "blackburndotson@furnigeer.com",
// //     eyeColor: "brown",
// //     friends: ["Jacklyn Lucas", "Linda Chapman"],
// //     isActive: false,
// //     balance: 1498,
// //     gender: "male",
// //     age: 38,
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     email: "shereeanthony@kog.com",
// //     eyeColor: "brown",
// //     friends: ["Goldie Gentry", "Briana Decker"],
// //     isActive: true,
// //     balance: 2764,
// //     gender: "female",
// //     age: 39,
// //   },
// // ];

// // // Change code below this line
// // const getActiveUsers = (users) => users.filter((user) => user.isActive);
// // // Change code above this line

// // console.log(getActiveUsers);

// 27; /////////////////////////////////////////////////////////////////////////////////

// // const users = [
// //   {
// //     name: "Moore Hensley",
// //     email: "moorehensley@indexia.com",
// //     eyeColor: "blue",
// //     friends: ["Sharron Pace"],
// //     isActive: false,
// //     balance: 2811,
// //     gender: "male",
// //     age: 37,
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     email: "sharlenebush@tubesys.com",
// //     eyeColor: "blue",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     isActive: true,
// //     balance: 3821,
// //     gender: "female",
// //     age: 34,
// //   },
// //   {
// //     name: "Ross Vazquez",
// //     email: "rossvazquez@xinware.com",
// //     eyeColor: "green",
// //     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// //     isActive: false,
// //     balance: 3793,
// //     gender: "male",
// //     age: 24,
// //   },
// //   {
// //     name: "Elma Head",
// //     email: "elmahead@omatom.com",
// //     eyeColor: "green",
// //     friends: ["Goldie Gentry", "Aisha Tran"],
// //     isActive: true,
// //     balance: 2278,
// //     gender: "female",
// //     age: 21,
// //   },
// //   {
// //     name: "Carey Barr",
// //     email: "careybarr@nurali.com",
// //     eyeColor: "blue",
// //     friends: ["Jordan Sampson", "Eddie Strong"],
// //     isActive: true,
// //     balance: 3951,
// //     gender: "male",
// //     age: 27,
// //   },
// //   {
// //     name: "Blackburn Dotson",
// //     email: "blackburndotson@furnigeer.com",
// //     eyeColor: "brown",
// //     friends: ["Jacklyn Lucas", "Linda Chapman"],
// //     isActive: false,
// //     balance: 1498,
// //     gender: "male",
// //     age: 38,
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     email: "shereeanthony@kog.com",
// //     eyeColor: "brown",
// //     friends: ["Goldie Gentry", "Briana Decker"],
// //     isActive: true,
// //     balance: 2764,
// //     gender: "female",
// //     age: 39,
// //   },
// // ];

// // const getInactiveUsers = (users) => users.filter((user) => !user.isActive);

// 28; /////////////////////////////////////////////////////////////////////////////////

// // const books = [
// //   {
// //     title: "The Last Kingdom",
// //     author: "Bernard Cornwell",
// //     rating: 8.38,
// //   },
// //   {
// //     title: "Beside Still Waters",
// //     author: "Robert Sheckley",
// //     rating: 8.51,
// //   },
// //   {
// //     title: "The Dream of a Ridiculous Man",
// //     author: "Fyodor Dostoevsky",
// //     rating: 7.75,
// //   },
// //   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// // ];
// // const BOOK_TITLE = "The Dream of a Ridiculous Man";
// // const AUTHOR = "Robert Sheckley";
// // // Change code below this line

// // const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// // const bookByAuthor = books.find((book) => book.author === AUTHOR);

// // console.log(bookWithTitle);
// // console.log(bookByAuthor);

// 29; /////////////////////////////////////////////////////////////////////////////////

// // const users = [
// //   {
// //     name: "Moore Hensley",
// //     email: "moorehensley@indexia.com",
// //     eyeColor: "blue",
// //     friends: ["Sharron Pace"],
// //     isActive: false,
// //     balance: 2811,
// //     gender: "male",
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     email: "sharlenebush@tubesys.com",
// //     eyeColor: "blue",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     isActive: true,
// //     balance: 3821,
// //     gender: "female",
// //   },
// //   {
// //     name: "Ross Vazquez",
// //     email: "rossvazquez@xinware.com",
// //     eyeColor: "green",
// //     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// //     isActive: false,
// //     balance: 3793,
// //     gender: "male",
// //   },
// //   {
// //     name: "Elma Head",
// //     email: "elmahead@omatom.com",
// //     eyeColor: "green",
// //     friends: ["Goldie Gentry", "Aisha Tran"],
// //     isActive: true,
// //     balance: 2278,
// //     gender: "female",
// //   },
// //   {
// //     name: "Carey Barr",
// //     email: "careybarr@nurali.com",
// //     eyeColor: "blue",
// //     friends: ["Jordan Sampson", "Eddie Strong"],
// //     isActive: true,
// //     balance: 3951,
// //     gender: "male",
// //   },
// //   {
// //     name: "Blackburn Dotson",
// //     email: "blackburndotson@furnigeer.com",
// //     eyeColor: "brown",
// //     friends: ["Jacklyn Lucas", "Linda Chapman"],
// //     isActive: false,
// //     balance: 1498,
// //     gender: "male",
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     email: "shereeanthony@kog.com",
// //     eyeColor: "brown",
// //     friends: ["Goldie Gentry", "Briana Decker"],
// //     isActive: true,
// //     balance: 2764,
// //     gender: "female",
// //   },
// // ];

// // const getUserWithEmail = (users, email) =>
// //   users.find((user) => user.email === email);

// // console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
// // console.log(getUserWithEmail(users, "elmahead@omatom.com"));
// // console.log(getUserWithEmail(users, "blackburndotson@furnigeer.com"));
// // console.log(getUserWithEmail(users, ""));

// 30; /////////////////////////////////////////////////////////////////////////////////

// // const firstArray = [26, 94, 36, 18];
// // const secondArray = [17, 61, 23];
// // const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // // Change code below this line

// // const eachElementInFirstIsEven = firstArray.every((number) => number % 2 === 0);
// // const eachElementInFirstIsOdd = firstArray.every((number) => number % 2 === 1);

// // const eachElementInSecondIsEven = secondArray.every(
// //   (number) => number % 2 === 0
// // );
// // const eachElementInSecondIsOdd = secondArray.every(
// //   (number) => number % 2 === 1
// // );

// // const eachElementInThirdIsEven = thirdArray.every((number) => number % 2 === 0);
// // const eachElementInThirdIsOdd = thirdArray.every((number) => number % 2 === 1);

// // console.log(eachElementInFirstIsEven);
// // console.log(eachElementInFirstIsOdd);
// // console.log(eachElementInSecondIsEven);
// // console.log(eachElementInSecondIsOdd);
// // console.log(eachElementInThirdIsEven);
// // console.log(eachElementInThirdIsOdd);

// 31; /////////////////////////////////////////////////////////////////////////////////

// // const users = [
// //   {
// //     name: "Moore Hensley",
// //     email: "moorehensley@indexia.com",
// //     eyeColor: "blue",
// //     friends: ["Sharron Pace"],
// //     isActive: false,
// //     balance: 2811,
// //     gender: "male",
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     email: "sharlenebush@tubesys.com",
// //     eyeColor: "blue",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     isActive: true,
// //     balance: 3821,
// //     gender: "female",
// //   },
// //   {
// //     name: "Ross Vazquez",
// //     email: "rossvazquez@xinware.com",
// //     eyeColor: "green",
// //     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// //     isActive: false,
// //     balance: 3793,
// //     gender: "male",
// //   },
// //   {
// //     name: "Elma Head",
// //     email: "elmahead@omatom.com",
// //     eyeColor: "green",
// //     friends: ["Goldie Gentry", "Aisha Tran"],
// //     isActive: true,
// //     balance: 2278,
// //     gender: "female",
// //   },
// //   {
// //     name: "Carey Barr",
// //     email: "careybarr@nurali.com",
// //     eyeColor: "blue",
// //     friends: ["Jordan Sampson", "Eddie Strong"],
// //     isActive: true,
// //     balance: 3951,
// //     gender: "male",
// //   },
// //   {
// //     name: "Blackburn Dotson",
// //     email: "blackburndotson@furnigeer.com",
// //     eyeColor: "brown",
// //     friends: ["Jacklyn Lucas", "Linda Chapman"],
// //     isActive: false,
// //     balance: 1498,
// //     gender: "male",
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     email: "shereeanthony@kog.com",
// //     eyeColor: "brown",
// //     friends: ["Goldie Gentry", "Briana Decker"],
// //     isActive: true,
// //     balance: 2764,
// //     gender: "female",
// //   },
// // ];
// // const isEveryUserActive = (users) => users.every((user) => user.isActive);

// // console.log(isEveryUserActive(users));

// 32; /////////////////////////////////////////////////////////////////////////////////

// // const firstArray = [26, 94, 36, 18];
// // const secondArray = [17, 61, 23];
// // const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // // Change below this line

// // const anyElementInFirstIsEven = firstArray.some((number) => number % 2 === 0);
// // const anyElementInFirstIsOdd = firstArray.some((number) => number % 2 === 1);

// // const anyElementInSecondIsEven = secondArray.some((number) => number % 2 === 0);
// // const anyElementInSecondIsOdd = secondArray.some((number) => number % 2 === 1);

// // const anyElementInThirdIsEven = thirdArray.some((number) => number % 2 === 0);
// // const anyElementInThirdIsOdd = thirdArray.some((number) => number % 2 === 1);

// // console.log(anyElementInFirstIsEven);
// // console.log(anyElementInFirstIsOdd);
// // console.log(anyElementInSecondIsEven);
// // console.log(anyElementInSecondIsOdd);
// // console.log(anyElementInThirdIsEven);
// // console.log(anyElementInThirdIsOdd);

// 33; /////////////////////////////////////////////////////////////////////////////////

// // Change code below this line

// // const users = [
// //   {
// //     name: "Moore Hensley",
// //     email: "moorehensley@indexia.com",
// //     eyeColor: "blue",
// //     friends: ["Sharron Pace"],
// //     isActive: false,
// //     balance: 2811,
// //     gender: "male",
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     email: "sharlenebush@tubesys.com",
// //     eyeColor: "blue",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     isActive: true,
// //     balance: 3821,
// //     gender: "female",
// //   },
// //   {
// //     name: "Ross Vazquez",
// //     email: "rossvazquez@xinware.com",
// //     eyeColor: "green",
// //     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// //     isActive: false,
// //     balance: 3793,
// //     gender: "male",
// //   },
// //   {
// //     name: "Elma Head",
// //     email: "elmahead@omatom.com",
// //     eyeColor: "green",
// //     friends: ["Goldie Gentry", "Aisha Tran"],
// //     isActive: true,
// //     balance: 2278,
// //     gender: "female",
// //   },
// //   {
// //     name: "Carey Barr",
// //     email: "careybarr@nurali.com",
// //     eyeColor: "blue",
// //     friends: ["Jordan Sampson", "Eddie Strong"],
// //     isActive: true,
// //     balance: 3951,
// //     gender: "male",
// //   },
// //   {
// //     name: "Blackburn Dotson",
// //     email: "blackburndotson@furnigeer.com",
// //     eyeColor: "brown",
// //     friends: ["Jacklyn Lucas", "Linda Chapman"],
// //     isActive: false,
// //     balance: 1498,
// //     gender: "male",
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     email: "shereeanthony@kog.com",
// //     eyeColor: "brown",
// //     friends: ["Goldie Gentry", "Briana Decker"],
// //     isActive: true,
// //     balance: 2764,
// //     gender: "female",
// //   },
// // ];

// // const isAnyUserActive = (users) => users.some((user) => user.isActive);

// // console.log(isAnyUserActive(users));

// 34; /////////////////////////////////////////////////////////////////////////////////

// // const players = {
// //   mango: 1270,
// //   poly: 468,
// //   ajax: 710,
// //   kiwi: 244,
// // };
// // const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // // Change code below this line

// // const totalPlayTime = playtimes.reduce(
// //   (totalPlayTime, value) => totalPlayTime + value,
// //   0
// // );

// // // Change code above this line
// // const averagePlayTime = totalPlayTime / playtimes.length;

// // console.log(totalPlayTime);
// // console.log(averagePlayTime);

// 35; /////////////////////////////////////////////////////////////////////////////////

// // const players = [
// //   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
// //   { name: "Poly", playtime: 469, gamesPlayed: 2 },
// //   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
// //   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// // ];
// // // Change code below this line

// // const totalAveragePlaytimePerGame = players.reduce(
// //   (totalPlaytime, player) =>
// //     player.playtime / player.gamesPlayed + totalPlaytime,
// //   0
// // );

// // console.log(totalAveragePlaytimePerGame);

// 36; /////////////////////////////////////////////////////////////////////////////////

// // const users = [
// //   {
// //     name: "Moore Hensley",
// //     email: "moorehensley@indexia.com",
// //     eyeColor: "blue",
// //     friends: ["Sharron Pace"],
// //     isActive: false,
// //     balance: 2811,
// //     gender: "male",
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     email: "sharlenebush@tubesys.com",
// //     eyeColor: "blue",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     isActive: true,
// //     balance: 3821,
// //     gender: "female",
// //   },
// //   {
// //     name: "Ross Vazquez",
// //     email: "rossvazquez@xinware.com",
// //     eyeColor: "green",
// //     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// //     isActive: false,
// //     balance: 3793,
// //     gender: "male",
// //   },
// //   {
// //     name: "Elma Head",
// //     email: "elmahead@omatom.com",
// //     eyeColor: "green",
// //     friends: ["Goldie Gentry", "Aisha Tran"],
// //     isActive: true,
// //     balance: 2278,
// //     gender: "female",
// //   },
// //   {
// //     name: "Carey Barr",
// //     email: "careybarr@nurali.com",
// //     eyeColor: "blue",
// //     friends: ["Jordan Sampson", "Eddie Strong"],
// //     isActive: true,
// //     balance: 3951,
// //     gender: "male",
// //   },
// //   {
// //     name: "Blackburn Dotson",
// //     email: "blackburndotson@furnigeer.com",
// //     eyeColor: "brown",
// //     friends: ["Jacklyn Lucas", "Linda Chapman"],
// //     isActive: false,
// //     balance: 1498,
// //     gender: "male",
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     email: "shereeanthony@kog.com",
// //     eyeColor: "brown",
// //     friends: ["Goldie Gentry", "Briana Decker"],
// //     isActive: true,
// //     balance: 2764,
// //     gender: "female",
// //   },
// // ];
// // const calculateTotalBalance = (users) =>
// //   users.reduce((totalBalance, user) => totalBalance + user.balance, 0);

// // console.log(calculateTotalBalance(users));

// 37; /////////////////////////////////////////////////////////////////////////////////

// // const users = [
// //   {
// //     name: "Moore Hensley",
// //     email: "moorehensley@indexia.com",
// //     eyeColor: "blue",
// //     friends: ["Sharron Pace"],
// //     isActive: false,
// //     balance: 2811,
// //     gender: "male",
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     email: "sharlenebush@tubesys.com",
// //     eyeColor: "blue",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     isActive: true,
// //     balance: 3821,
// //     gender: "female",
// //   },
// //   {
// //     name: "Ross Vazquez",
// //     email: "rossvazquez@xinware.com",
// //     eyeColor: "green",
// //     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// //     isActive: false,
// //     balance: 3793,
// //     gender: "male",
// //   },
// //   {
// //     name: "Elma Head",
// //     email: "elmahead@omatom.com",
// //     eyeColor: "green",
// //     friends: ["Goldie Gentry", "Aisha Tran"],
// //     isActive: true,
// //     balance: 2278,
// //     gender: "female",
// //   },
// //   {
// //     name: "Carey Barr",
// //     email: "careybarr@nurali.com",
// //     eyeColor: "blue",
// //     friends: ["Jordan Sampson", "Eddie Strong"],
// //     isActive: true,
// //     balance: 3951,
// //     gender: "male",
// //   },
// //   {
// //     name: "Blackburn Dotson",
// //     email: "blackburndotson@furnigeer.com",
// //     eyeColor: "brown",
// //     friends: ["Jacklyn Lucas", "Linda Chapman"],
// //     isActive: false,
// //     balance: 1498,
// //     gender: "male",
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     email: "shereeanthony@kog.com",
// //     eyeColor: "brown",
// //     friends: ["Goldie Gentry", "Briana Decker"],
// //     isActive: true,
// //     balance: 2764,
// //     gender: "female",
// //   },
// // ];
// // // Change code below this line
// // const getTotalFriendCount = (users) =>
// //   users.reduce((totalFriends, user) => user.friends.length + totalFriends, 0);
// // console.log(getTotalFriendCount(users));
// // // Change code above this line

// 38; /////////////////////////////////////////////////////////////////////////////////

// // const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // const authors = [
// //   "Tanith Lee",
// //   "Bernard Cornwell",
// //   "Robert Sheckley",
// //   "Fyodor Dostoevsky",
// // ];
// // // Change code below this line

// // const ascendingReleaseDates = [...releaseDates].sort();

// // const alphabeticalAuthors = [...authors].sort();

// // console.log(ascendingReleaseDates);
// // console.log(alphabeticalAuthors);

// 39; /////////////////////////////////////////////////////////////////////////////////

// // const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // // Change code below this line

// // const ascendingReleaseDates = [...releaseDates].sort(
// //   (first, second) => first - second
// // );

// // const descendingReleaseDates = [...releaseDates].sort(
// //   (first, second) => second - first
// // );

// // console.log(ascendingReleaseDates);
// // console.log(descendingReleaseDates);

// 40; /////////////////////////////////////////////////////////////////////////////////

// // const authors = [
// //   "Tanith Lee",
// //   "Bernard Cornwell",
// //   "Robert Sheckley",
// //   "Fyodor Dostoevsky",
// //   "Howard Lovecraft",
// // ];
// // // Change code below this line

// // const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

// // const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// // console.log(authorsInAlphabetOrder);
// // console.log(authorsInReversedOrder);

// 41; /////////////////////////////////////////////////////////////////////////////////

// // const books = [
// //   {
// //     title: "The Last Kingdom",
// //     author: "Bernard Cornwell",
// //     rating: 8.38,
// //   },
// //   {
// //     title: "Beside Still Waters",
// //     author: "Robert Sheckley",
// //     rating: 8.51,
// //   },
// //   {
// //     title: "The Dream of a Ridiculous Man",
// //     author: "Fyodor Dostoevsky",
// //     rating: 7.75,
// //   },
// //   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// //   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// // ];
// // // Change code below this line

// // const sortedByAuthorName = [...books].sort((firstBook, secondBook) =>
// //   firstBook.author.localeCompare(secondBook.author)
// // );

// // const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) =>
// //   secondBook.author.localeCompare(firstBook.author)
// // );

// // const sortedByAscendingRating = [...books].sort(
// //   (firstBook, secondBook) => firstBook.rating - secondBook.rating
// // );

// // const sortedByDescentingRating = [...books].sort(
// //   (firstBook, secondBook) => secondBook.rating - firstBook.rating
// // );

// // console.log(sortedByAuthorName);
// // console.log(sortedByReversedAuthorName);
// // console.log(sortedByAscendingRating);
// // console.log(sortedByAscendingRating);

// 42; /////////////////////////////////////////////////////////////////////////////////

// // const users = [
// //   {
// //     name: "Moore Hensley",
// //     email: "moorehensley@indexia.com",
// //     eyeColor: "blue",
// //     friends: ["Sharron Pace"],
// //     isActive: false,
// //     balance: 2811,
// //     gender: "male",
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     email: "sharlenebush@tubesys.com",
// //     eyeColor: "blue",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     isActive: true,
// //     balance: 3821,
// //     gender: "female",
// //   },
// //   {
// //     name: "Ross Vazquez",
// //     email: "rossvazquez@xinware.com",
// //     eyeColor: "green",
// //     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// //     isActive: false,
// //     balance: 3793,
// //     gender: "male",
// //   },
// //   {
// //     name: "Elma Head",
// //     email: "elmahead@omatom.com",
// //     eyeColor: "green",
// //     friends: ["Goldie Gentry", "Aisha Tran"],
// //     isActive: true,
// //     balance: 2278,
// //     gender: "female",
// //   },
// //   {
// //     name: "Carey Barr",
// //     email: "careybarr@nurali.com",
// //     eyeColor: "blue",
// //     friends: ["Jordan Sampson", "Eddie Strong"],
// //     isActive: true,
// //     balance: 3951,
// //     gender: "male",
// //   },
// //   {
// //     name: "Blackburn Dotson",
// //     email: "blackburndotson@furnigeer.com",
// //     eyeColor: "brown",
// //     friends: ["Jacklyn Lucas", "Linda Chapman"],
// //     isActive: false,
// //     balance: 1498,
// //     gender: "male",
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     email: "shereeanthony@kog.com",
// //     eyeColor: "brown",
// //     friends: ["Goldie Gentry", "Briana Decker"],
// //     isActive: true,
// //     balance: 2764,
// //     gender: "female",
// //   },
// // ];
// // // Change code below this line
// // const sortByAscendingBalance = (users) =>
// //   [...users].sort(
// //     (firstUser, secondUser) => firstUser.balance - secondUser.balance
// //   );
// // // Change code above this line

// // console.table(sortByAscendingBalance(users));

// 43; /////////////////////////////////////////////////////////////////////////////////

// // const users = [
// //   {
// //     name: "Moore Hensley",
// //     email: "moorehensley@indexia.com",
// //     eyeColor: "blue",
// //     friends: ["Sharron Pace"],
// //     isActive: false,
// //     balance: 2811,
// //     gender: "male",
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     email: "sharlenebush@tubesys.com",
// //     eyeColor: "blue",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     isActive: true,
// //     balance: 3821,
// //     gender: "female",
// //   },
// //   {
// //     name: "Ross Vazquez",
// //     email: "rossvazquez@xinware.com",
// //     eyeColor: "green",
// //     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// //     isActive: false,
// //     balance: 3793,
// //     gender: "male",
// //   },
// //   {
// //     name: "Elma Head",
// //     email: "elmahead@omatom.com",
// //     eyeColor: "green",
// //     friends: ["Goldie Gentry", "Aisha Tran"],
// //     isActive: true,
// //     balance: 2278,
// //     gender: "female",
// //   },
// //   {
// //     name: "Carey Barr",
// //     email: "careybarr@nurali.com",
// //     eyeColor: "blue",
// //     friends: ["Jordan Sampson", "Eddie Strong"],
// //     isActive: true,
// //     balance: 3951,
// //     gender: "male",
// //   },
// //   {
// //     name: "Blackburn Dotson",
// //     email: "blackburndotson@furnigeer.com",
// //     eyeColor: "brown",
// //     friends: ["Jacklyn Lucas", "Linda Chapman"],
// //     isActive: false,
// //     balance: 1498,
// //     gender: "male",
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     email: "shereeanthony@kog.com",
// //     eyeColor: "brown",
// //     friends: ["Goldie Gentry", "Briana Decker"],
// //     isActive: true,
// //     balance: 2764,
// //     gender: "female",
// //   },
// // ];

// // const sortByDescendingFriendCount = (users) =>
// //   [...users].sort(
// //     (firstUser, secondUser) =>
// //       secondUser.friends.length - firstUser.friends.length
// //   );

// // console.table(sortByDescendingFriendCount(users));

// 44; /////////////////////////////////////////////////////////////////////////////////

// // const users = [
// //   {
// //     name: "Moore Hensley",
// //     email: "moorehensley@indexia.com",
// //     eyeColor: "blue",
// //     friends: ["Sharron Pace"],
// //     isActive: false,
// //     balance: 2811,
// //     gender: "male",
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     email: "sharlenebush@tubesys.com",
// //     eyeColor: "blue",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     isActive: true,
// //     balance: 3821,
// //     gender: "female",
// //   },
// //   {
// //     name: "Ross Vazquez",
// //     email: "rossvazquez@xinware.com",
// //     eyeColor: "green",
// //     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// //     isActive: false,
// //     balance: 3793,
// //     gender: "male",
// //   },
// //   {
// //     name: "Elma Head",
// //     email: "elmahead@omatom.com",
// //     eyeColor: "green",
// //     friends: ["Goldie Gentry", "Aisha Tran"],
// //     isActive: true,
// //     balance: 2278,
// //     gender: "female",
// //   },
// //   {
// //     name: "Carey Barr",
// //     email: "careybarr@nurali.com",
// //     eyeColor: "blue",
// //     friends: ["Jordan Sampson", "Eddie Strong"],
// //     isActive: true,
// //     balance: 3951,
// //     gender: "male",
// //   },
// //   {
// //     name: "Blackburn Dotson",
// //     email: "blackburndotson@furnigeer.com",
// //     eyeColor: "brown",
// //     friends: ["Jacklyn Lucas", "Linda Chapman"],
// //     isActive: false,
// //     balance: 1498,
// //     gender: "male",
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     email: "shereeanthony@kog.com",
// //     eyeColor: "brown",
// //     friends: ["Goldie Gentry", "Briana Decker"],
// //     isActive: true,
// //     balance: 2764,
// //     gender: "female",
// //   },
// // ];

// // // Change code below this line
// // const sortByName = (users) =>
// //   [...users].sort((firstUser, secondUser) =>
// //     firstUser.name.localeCompare(secondUser.name)
// //   );
// // // Change code above this line

// // console.table(sortByName(users));

// 45; /////////////////////////////////////////////////////////////////////////////////

// // const books = [
// //   {
// //     title: "The Last Kingdom",
// //     author: "Bernard Cornwell",
// //     rating: 8.38,
// //   },
// //   {
// //     title: "Beside Still Waters",
// //     author: "Robert Sheckley",
// //     rating: 8.51,
// //   },
// //   {
// //     title: "The Dream of a Ridiculous Man",
// //     author: "Fyodor Dostoevsky",
// //     rating: 7.75,
// //   },
// //   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// //   {
// //     title: "The Dreams in the Witch House",
// //     author: "Howard Lovecraft",
// //     rating: 8.67,
// //   },
// // ];
// // const MIN_BOOK_RATING = 8;

// // const names = books
// //   .filter((book) => book.rating > MIN_BOOK_RATING)
// //   .map((book) => book.author)
// //   .sort((a, b) => a.localeCompare(b));

// // console.log(names);

// 46; /////////////////////////////////////////////////////////////////////////////////

// // const users = [
// //   {
// //     name: "Moore Hensley",
// //     email: "moorehensley@indexia.com",
// //     eyeColor: "blue",
// //     friends: ["Sharron Pace"],
// //     isActive: false,
// //     balance: 2811,
// //     gender: "male",
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     email: "sharlenebush@tubesys.com",
// //     eyeColor: "blue",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     isActive: true,
// //     balance: 3821,
// //     gender: "female",
// //   },
// //   {
// //     name: "Ross Vazquez",
// //     email: "rossvazquez@xinware.com",
// //     eyeColor: "green",
// //     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// //     isActive: false,
// //     balance: 3793,
// //     gender: "male",
// //   },
// //   {
// //     name: "Elma Head",
// //     email: "elmahead@omatom.com",
// //     eyeColor: "green",
// //     friends: ["Goldie Gentry", "Aisha Tran"],
// //     isActive: true,
// //     balance: 2278,
// //     gender: "female",
// //   },
// //   {
// //     name: "Carey Barr",
// //     email: "careybarr@nurali.com",
// //     eyeColor: "blue",
// //     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
// //     isActive: true,
// //     balance: 3951,
// //     gender: "male",
// //   },
// //   {
// //     name: "Blackburn Dotson",
// //     email: "blackburndotson@furnigeer.com",
// //     eyeColor: "brown",
// //     friends: [
// //       "Jacklyn Lucas",
// //       "Linda Chapman",
// //       "Adrian Cross",
// //       "Solomon Fokes",
// //     ],
// //     isActive: false,
// //     balance: 1498,
// //     gender: "male",
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     email: "shereeanthony@kog.com",
// //     eyeColor: "brown",
// //     friends: ["Goldie Gentry", "Briana Decker"],
// //     isActive: true,
// //     balance: 2764,
// //     gender: "female",
// //   },
// // ];

// // const getNamesSortedByFriendCount = (users) =>
// //   [...users]
// //     .sort(
// //       (firstUser, secondUser) =>
// //         firstUser.friends.length - secondUser.friends.length
// //     )
// //     .map((user) => user.name);

// // console.log(getNamesSortedByFriendCount(users));

// 47; /////////////////////////////////////////////////////////////////////////////////
// // const users = [
// //   {
// //     name: "Moore Hensley",
// //     email: "moorehensley@indexia.com",
// //     eyeColor: "blue",
// //     friends: ["Sharron Pace"],
// //     isActive: false,
// //     balance: 2811,
// //     gender: "male",
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     email: "sharlenebush@tubesys.com",
// //     eyeColor: "blue",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     isActive: true,
// //     balance: 3821,
// //     gender: "female",
// //   },
// //   {
// //     name: "Ross Vazquez",
// //     email: "rossvazquez@xinware.com",
// //     eyeColor: "green",
// //     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// //     isActive: false,
// //     balance: 3793,
// //     gender: "male",
// //   },
// //   {
// //     name: "Elma Head",
// //     email: "elmahead@omatom.com",
// //     eyeColor: "green",
// //     friends: ["Goldie Gentry", "Aisha Tran"],
// //     isActive: true,
// //     balance: 2278,
// //     gender: "female",
// //   },
// //   {
// //     name: "Carey Barr",
// //     email: "careybarr@nurali.com",
// //     eyeColor: "blue",
// //     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
// //     isActive: true,
// //     balance: 3951,
// //     gender: "male",
// //   },
// //   {
// //     name: "Blackburn Dotson",
// //     email: "blackburndotson@furnigeer.com",
// //     eyeColor: "brown",
// //     friends: [
// //       "Jacklyn Lucas",
// //       "Linda Chapman",
// //       "Adrian Cross",
// //       "Solomon Fokes",
// //     ],
// //     isActive: false,
// //     balance: 1498,
// //     gender: "male",
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     email: "shereeanthony@kog.com",
// //     eyeColor: "brown",
// //     friends: ["Goldie Gentry", "Briana Decker"],
// //     isActive: true,
// //     balance: 2764,
// //     gender: "female",
// //   },
// // ];

// // const getSortedFriends = (users) =>
// //   [...users]
// //     .flatMap((user) => user.friends)
// //     .filter((user, index, array) => array.indexOf(user) === index)
// //     .sort((firstUser, secondUser) => firstUser.localeCompare(secondUser));

// // console.table(getSortedFriends(users));

// 48; /////////////////////////////////////////////////////////////////////////////////

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: [
//       "Jacklyn Lucas",
//       "Linda Chapman",
//       "Adrian Cross",
//       "Solomon Fokes",
//     ],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// const getTotalBalanceByGender = (users, gender) =>
//   users
//     .filter((user) => user.gender === gender)
//     .reduce((totalBalance, user) => totalBalance + user.balance, 0);

// console.log(getTotalBalanceByGender(users, "male"));
// console.log(getTotalBalanceByGender(users, "female"));
