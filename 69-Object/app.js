// let plan1 = {
//   planName: "fat loss",
//   excercises: "strngth training",
//   fee: 2000,
//   admissionFee: 1000,
//   isAirConditioned: false,
//   calculateBill: function (noOfMonths) {
//     let totalBill = this.fee * noOfMonths + this.admissionFee;
//     if (noOfMonths >= 3) {
//       totalBill = (totalBill / 100) * 80;
//     }
//     console.log(totalBill);
//   },
// };
// // console.log(plan1.excercises);
// // console.log(plan1["excercises"]);
// // plan1.calculateBill(4);
// // plan1.calculateBill(2);
// // console.log(plan1);

// // console.log(plan1["admissionFee"]);
// // console.log(plan1["planName"]);

// // let allKeys = Object.keys(plan1);
// // let allValues = Object.values(plan1);
// // console.log(allKeys, allValues);

// for (let prop in plan1) {
//   //   console.log(prop);
//   //   console.log(plan1);
//   //   console.log(plan1.planName);
//   //   console.log(plan1.prop);
//   console.log(prop);
//   console.log(prop, ":", plan1[prop]);
//   console.log(prop, ":", plan1[]);
// }

// let user = {
//   userName: "rashid",
//   rashid: "he is fullStack Developer",
// };

// let userName = "rashid";
// console.log(user["userName"]);
// console.log(user[userName]);

// let user = {
//   userName: "haider",
//   haider: `He is a full stack engineer and trainer.`,
//   isMarried: true,
// };

// for (let prop in user) {
//   //   console.log(user.prop);
//   // console.log(prop);
//   // console.log(user["userName"]);//haider
//   // console.log(user.userName);// haider
//   // console.log(prop["slice(0,1)"]);
//   user[prop] = prompt(`Enter a value for key ${prop}`);

//   let obj = { [prop]: user[prop] };
//   console.log(obj);
// }
// console.log(user);

// let keyName = prompt("Enter a key Name");
// let keyValue = prompt("Enter a keyValue");

// let obj = { [keyName]: keyValue };
// console.log(obj);


