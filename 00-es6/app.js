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

let num1 = [1, 2, 3];
let num2 = num1.slice(0);
num1.push(4);
console.log(num2);

// let obj1 = {
//     name: 'aslam',
//     rollNum: 2644
// }
// let obj2 = Object.assign({}, obj1);
// obj1.name = "akram";
// console.log(obj2, obj1);
