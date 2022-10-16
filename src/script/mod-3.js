// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.pageCount = 836;
// book.originalLanguage = "en";
// book.translations = ["ua", "ru"];

// console.log(book.pageCount); // 836
// console.log(book.originalLanguage); // 'en'
// console.log(book.translations); // ['ua', 'ru']
// console.log(book);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значення властивості з таким ключем
//   console.log(book[key]);
// }

// ЗАВДАННЯ 1/41

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// console.log(apartment);

// ЗАВДАННЯ 2/41

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// console.log(apartment);

// ЗАВДАННЯ 3/41

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;

// console.log(apartment);

// ЗАВДАННЯ 4/41

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];

// console.log(ownerName);
// console.log(ownerPhone);
// console.log(ownerEmail);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);

// ЗАВДАННЯ 5/41

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];
// // Change code above this line

// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);

// ЗАВДАННЯ 6/41

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");

// console.log(apartment);

// ЗАВДАННЯ 7/41

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};
// apartment.location.country = "Jamaica";
// apartment.location.city = "Kingston";

// console.log(apartment);

// ЗАВДАННЯ 8/41

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   name,
//   price,
//   image,
//   tags,
// };

// console.log(product);

// ЗАВДАННЯ 9/41

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",
//   // Change code above this line
// };

// console.log(credentials);

// ЗАВДАННЯ 10/41

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line

// for (const key in apartment) {
//   keys.push(key);
// }
// for (const key in apartment) {
//   values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);

// ЗАВДАННЯ 11/41

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
// }
// console.log(keys);
// console.log(values);

// ЗАВДАННЯ 12/41

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line

//   const keys = Object.keys(object);
//   console.log(keys);
//   propCount += keys.length;

//   // Change code above this line
//   return propCount;
// }

// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// ЗАВДАННЯ 13/41

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];

// const keys = Object.keys(apartment);

// for (const key of keys) {
//   values.push(apartment[key]);
// }

// console.log(keys);
// console.log(apartment);
// console.log(values);

// ЗАВДАННЯ 14/41

// function countProps(object) {
//   let propCount = 0;

//   const keys = Object.keys(object);
//   console.log(keys);
//   propCount += keys.length;

//   return propCount;
// }

// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// ЗАВДАННЯ 15/41

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);

// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);

// ЗАВДАННЯ 16/41

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   let salari = Object.keys(salaries);
//   console.log(salari);
//   for (let salariValue of salari) {
//     totalSalary += salaries[salariValue];
//     console.log(salaries[salariValue]);
//   }

//   return totalSalary;
// }

// countTotalSalary({});
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 });

// console.log(countTotalSalary({}));
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

// ЗАВДАННЯ 17/41

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const color of colors) {
//   //   console.log(color);
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
//   console.log(hexColors);
//   console.log(rgbColors);
// }

// ЗАВДАННЯ 18/41

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const product of products) {
//     // console.log(product);
//     if (productName === product.name) {
//       return product.price;
//     }
//   }
//   return null;
// }

// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));

// ЗАВДАННЯ 19/41

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// function getAllPropValues(propName) {
//   const allPropValues = [];
//   for (const product of products) {
//     const keys = Object.keys(product);

//     for (const key of keys) {
//       if (key === propName) {
//         allPropValues.push(product[key]);
//       }
//       console.log(allPropValues);
//     }
//   }
//   return allPropValues;
// }

// getAllPropValues("name");
// getAllPropValues("quantity");
// getAllPropValues("price");
// getAllPropValues("category");

// ЗАВДАННЯ 20/41

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   for (const product of products) {
//     if (productName === product.name) {
//       return product.price * product.quantity;
//     }
//   }
//   return 0;
// }

// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));

// ЗАВДАННЯ 21/41

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { yesterday, today, tomorrow } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(highTemperatures);
// console.log(meanTemperature);

// ЗАВДАННЯ 22/41

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(highTemperatures);
// console.log(meanTemperature);

// ЗАВДАННЯ 23/41

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// console.log(highTemperatures);
// console.log(meanTemperature);

// ЗАВДАННЯ 24/41

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// ЗАВДАННЯ 25/41

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };

// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;

// console.log(lowToday);
// console.log(highToday);
// console.log(todayIcon);

// console.log(highTomorrow);
// console.log(lowTomorrow);
// console.log(tomorrowIcon);

// ЗАВДАННЯ 26/41

// Change code below this line

// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// ЗАВДАННЯ 27/41

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);
// console.log(worstScore);

// ЗАВДАННЯ 28/41

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);

// ЗАВДАННЯ 29/41

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };

// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };

// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };

// console.log(finalSettings);

// ЗАВДАННЯ 30/41

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line

//   // Change code above this line
//   return { category, priority, completed, ...data };
// }

// makeTask({});
// console.log(makeTask({}));

// makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" });
// console.log(
//   makeTask({
//     category: "Homemade",
//     priority: "Low",
//     text: "Take out the trash",
//   })
// );

// makeTask({ category: "Finance", text: "Take interest" });
// console.log(makeTask({ category: "Finance", text: "Take interest" }));

// makeTask({ priority: "Low", text: "Choose shampoo" });
// console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));

// makeTask({ text: "Buy bread" });
// console.log(makeTask({ text: "Buy bread" }));

// ЗАВДАННЯ 31/41

// Change code below this line

// function add(...args) {
//   let totalArgs = 0;

//   for (const arg of args) {
//     totalArgs += arg;
//   }

//   return totalArgs;
// }

// console.log(add(15, 27));
// console.log(add(12, 4, 11, 48));
// console.log(add(32, 6, 13, 19, 8));
// console.log(add(74, 11, 62, 46, 12, 36));

// ЗАВДАННЯ 32/41

// function addOverNum(...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (args[0] < arg) {
//       total += arg;
//     }
//   }

//   return total;
// }

// addOverNum(50, 15, 27); // 0
// addOverNum(10, 12, 4, 11, 48, 10, 8); // 71
// addOverNum(15, 32, 6, 13, 19, 8); // 51
// addOverNum(20, 74, 11, 62, 46, 12, 36); // 218

// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

// ЗАВДАННЯ 33/41

// function findMatches(arr, ...args) {
//   const matches = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     for (let j = 0; j < args.length; j += 1) {
//       if (arr[i] === args[j]) {
//         matches.push(args[j]);
//       }
//     }
//   }
//   return matches;
// }

// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7); // повертає [1, 2]
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2); // повертає [17, 89, 2]
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41); // повертає [24, 9, 41]
// findMatches([63, 11, 8, 29], 4, 7, 16); // повертає []

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));

// ЗАВДАННЯ 34/41

// const bookShelf = {
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
// };

// bookShelf.getBooks();
// bookShelf.addBook("Haze");
// bookShelf.removeBook("Red sunset");

// ЗАВДАННЯ 35/41

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName);
//   },
// };

// bookShelf.updateBook("Haze", "Dungeon chronicles");
// // bookShelf.updateBook("The last kingdom", "Dune");

// console.log(bookShelf.books);

// ЗАВДАННЯ 36/41

// const atTheOldToad = {
//   // Change code below this line
//   potions: [],
//   // Change code above this line
// };

// ЗАВДАННЯ 37/41

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],

//   getPotions() {
//     return this.potions;
//   },
// };

// console.log(atTheOldToad.potions);

// ЗАВДАННЯ 38/41

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line
//     this.potions.push(potionName);
//     return this.potions;
//     // Change code above this line
//   },
// };

// atTheOldToad.addPotion("Invisibility");
// atTheOldToad.addPotion("Power potion");

// console.table(atTheOldToad);

// ЗАВДАННЯ 39/41

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line

//     const bookIndex = this.potions.indexOf(potionName);
//     this.potions.splice(bookIndex, 1);

//     // Change code above this line
//   },
// };

// atTheOldToad.removePotion("Dragon breath"); // буде масив ["Speed potion", Stone skin"]
// // atTheOldToad.removePotion("Speed potion"), // буде масив ["Stone skin"]
// console.log(atTheOldToad.potions);

// ЗАВДАННЯ 40/41

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     const bookIndex = this.potions.indexOf(oldName);
//     this.potions.splice(bookIndex, 1, newName);

//     // Change code above this line
//   },
// };

// ЗАВДАННЯ 41 /41

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],

  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const potion of this.potions) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    return this.potions.push(newPotion);
  },

  removePotion(potionName) {
    for (let potion of this.potions) {
      let potionIndex = potion.name.indexOf(potionName);
      console.log(potionIndex);
      if (potionIndex === -1) {
        `Potion ${potionName} is not in inventory!`;
      } else this.potions.splice(potionIndex, 1);
    }
    return;
  },

  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1, newName);
  },
};

// console.table(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));

atTheOldToad.removePotion("Dragon breath");
// atTheOldToad.removePotion("Speed potion");

// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(
//   atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")
// );
// console.log(atTheOldToad.getPotions());
