// premitive data Type immutable
// number string boolean null  symbol bigint undefined

// Non-premitive mutable
// array functioin object

// let student = "Rashid";
// let student2 = student;
// student="Abdul Haseeb"
// console.log(student,student2);

// let user1 = {
//   name: "Rashid",
//   roll: 543543,
// };
// console.log(user1);
// let user2 = user1;
// user2.name = "Haider";
// console.log(user2);

// let user1 = {
//   name: "haider",
//   rollNum: 2643,
// };
// console.log(user1);
// let user2 = user1;
// user2.name = "abdullah";
// console.log(user2);

// let user1 = {
//   name: "haider",
//   roll: 3242,
// };
// Object.assign(user2, user1);

// let user2 = Object.assign({}, user1);
// user2.name = "rashid";
// console.log(user2, user1);

// let user2 = {
//   name: "Rashid",
//   roll: 435435,
//   id: 5756,
// };

// let user1 = {
//   name: "haider",
//   rollNum: 2643,
// };
// let user2 = {
//   name: "abdullah",
//   rollNum: 2655,
//   id: 1,
// };
// Object.assign(user2, user1);

// let user2 = Object.assign({}, user1);
// user2.name = "abdullah";
// console.log(user2, user1);

// let user1 = {
//     name: 'haider',
//     rollNum: 2643
// }
// let user = {
//     name: 'abdullah',
//     rollNum: 2655,
//     id: 1
// }
// Object.assign(user, user1);

// let user2 = Object.assign({}, user1);
// user2.name = 'abdullah';
// console.log(user2, user1);

// let uber = "Car";
// let careem = uber;
// console.log(careem);
// uber = "rickShaw";
// console.log(careem, uber);

// let num1 = [1, 2, 3];
// let num2 = num1.slice(0);
// num1.push(4);
// console.log(num2);

// let obj1 = {
//     name: 'aslam',
//     rollNum: 2644
// }
// let obj2 = Object.assign({}, obj1);
// obj1.name = "akram";
// console.log(obj2, obj1);

// let obj1 = {
//   name: "haider",
//   rollNum: 4355,
// };

// let obj2 = Object.assign({}, obj1);
// obj1.name = "rashid";
// console.log(obj2, obj1);

// let fruits = ["apple", "banana", "orange"];
// let favFruits = [...fruits];
// favFruits.push('watermelon');
// console.log(fruits, favFruits);

// let fruits = ["apple", "banaba", "mango"];
// let favFruits = [...fruits];
// favFruits.push("carry");
// console.log(fruits, favFruits);

// let obj1 = {
//   name: "haider",
//   rollNum: 34223,
// };

// let obj2 = { ...obj1 };
// obj2.name = "rashid";
// console.log(obj1, obj2);

// let treat = new Promise(function (resolve, reject) {
//     let isNotesAvail = confirm("Have you arranged English Notes?");
//     if (isNotesAvail) {
//         let foodWish = prompt('what do you want to eat?');
//         resolve(foodWish);
//     }
//     else {
//         reject("dosti khtm");
//     }
// });

// treat
//     .then(function (foodItem) {
//         console.log(`Thanks bro, ${foodItem} is due on me.`);
//     })
//     .catch(function (e) {
//         console.log('Tm se ye umeed ni thi.', e);
//     })

// let treat = new Promise(function (resolve, reject) {
//   let isNotesAvail = confirm("Have you arrange notes?");
//   if (isNotesAvail) {
//     let foodWish = prompt("hukum karo kia khao ge?");
//     resolve(foodWish);
//   } else {
//     reject("dosti khatam");
//   }
// });

// // treat
// // .then(function (foodItem) {console.log(`Thanks bro, ${foodItem} is due on me.`);})

// // .catch(function (e) {console.log('Tm se ye umeed ni thi.', e);})

// treat
//   .then(function (a) {
//     console.log(`thanks bro ${a} is due on me`);
//   })

//   .catch(function (e) {
//     console.log(`tmse ye ummed ni thi`, e);
//   });

// let treat = new Promise(function (resolve, reject) {
//   let isNotesAvail = confirm("Notes arrang ho gye?");
//   if (isNotesAvail) {
//     let foodWish = prompt("Hukum kia khao ge?");
//     resolve(foodWish);
//   } else {
//     reject("dosti khtm");
//   }
// });

// treat
//   .then(function (a) {
//     console.log(`thanks ${a} is due on me`);
//   })
//   .catch(function (e) {
//     console.log(`tum se ye umeed ni thi`, e);
//   });

// let use = {
//   userName: `haider ali shah`,
//   rollNum: 5422,
//   isTeache: true,
//   subjects: ["JavaScript"],
//   fathersName: "Muhammad shah Alam",
// };

// function printStu(student) {
//   let userName = "Abdullah";

//   const { userName: studentName, fathersName, rollNum, ...remai } = student;
//   console.log(remai);
//   let str = `
//   Wlecome ${studentName} son of ${fathersName}, your rollnum is ${rollNum}
//   `;

//   document.write(str);
// }
// printStu(use);

// let bike = {
//   nameb: "crown",
//   model: 2016,
//   color: "black",
//   features: {
//     isalter: true,
//     piston: 150,
//     tyre: "tubeless",
//     footrset: "Ladies wale",
//   },
// };

// const {
//   nameb,
//   model,
//   features: { tyre, footrset },
// } = bike;

// console.log(nameb, model, tyre, footrset);

// let fruits = [
//   "appple",
//   "banana",
//   "mango",
//   "orange",
//   "melon",
//   "watermelon",
//   "watermelon",
// ];

// // const [, ftuit2, , , , melon] = fruits;

// const [, f1, , , f4, fruits[6]] = fruits;

// console.log(f1, f4, trb);

// const sayHeloo = () => {
//   console.log("hello");
// };

// sayHeloo();

// 2
// const sum = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(sum(2, 2));

//3; //

// const square = (num) => {
//   return num * num;
// };

// console.log(square(4));

// let students = [
//   "haider",
//   "abdullah",
//   "aslam",
//   "akram",
//   "sameed",
//   "anas",
//   "ahmed",
//   "shoaib",
//   "akram",
//   "hassan",
//   "rashid",
//   "umair",
// ];

// let feesClear = [
//   "haider",
//   "abdullah",
//   "aslam",
//   "anas",
//   "ahmed",
//   "shoaib",
//   "umair",
// ];

// let examClear = [
//   "abdullah",
//   "aslam",
//   "akram",
//   "ahmed",
//   "shoaib",
//   "akram",
//   "hassan",
//   "rashid",
// ];

// let eligible = students.filter(
//   (student) => feesClear.includes(student) && examClear.includes(student)
// );

// console.log(eligible);

// let species = [
//   "owias",
//   "ahmed",
//   "haider",
//   "sameed",
//   "Abdul Sammad",
//   "Abdul haseeb",
//   "abdul hannan",
//   "ahsan",
//   "fahad",
//   "rehan shamsi",
//   "moin",
//   "asif",
//   "faheem",
//   "sikander",
// ];

// let feesClear = [
//   "Abdul Sammad",
//   "Abdul haseeb",
//   "abdul hannan",
//   "haider",
//   "sikander",
// ];
// let examClear = [
//   "sikander",
//   "faheem",
//   "sameed",
//   "owias",
//   "Abdul Sammad",
//   "Abdul haseeb",
// ];

// let eligible = species.filter(
//   (specie) => feesClear.includes(specie) && examClear.includes(specie)
// );

// console.log(eligible);

// let allNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let evenNum = allNum.filter((num) => num % 2 === 0);
// console.log(evenNum);

let fNames =[]