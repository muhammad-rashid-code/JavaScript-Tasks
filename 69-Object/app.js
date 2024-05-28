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

// let user = {
//   userFname: "muhammad",
//   userLname: "rashid",
// };

// for (let prop in user) {
//   user[prop] = prompt(`Enter a valuue for key ${prop}`);

//   let obj = { [prop]: user[prop] };
//   console.log(obj);
// }

// console.log(user);

// function User(fNmae, lName, campus, subjects, lapto) {
//   this.fNmae = fNmae;
//   this.lName = lName;
//   this.campus = campus;
//   this.subjects = subjects;
//   this.lapto = lapto;
// }

// let user1 = new User("abdula", "hannan", "gulshan", [
//   "html",
//   "css",
//   "js",
//   "firebase",
// ]);

// let user2 = new User("muhammad", "rashid", "bahadurabad", [
//   "html",
//   "css",
//   "js",
//   "firebase",
// ]);

// console.log(user1);

// function UserOfNet(fName, lname, rollNum) {
//   this.fName = fName;
//   this.lname = lname;
//   this.rollNum = rollNum;
// }

// UserOfNet.prototype.isNewConnection = false;

// let user1 = new UserOfNet("muhammad", "rashid", "215654");

// let user2 = new UserOfNet("haider", "ali", "534346");

// console.log(user1, user2);

// function Car(name, model, varient) {
//     this.name = name;
//     this.model = model;
//     this.varient = varient;
// }
// Car.prototype.calcFuelAvg = function (fuel, km) {
//     console.log(`Fuel average is ${km / fuel}.`);
// }

// let car1 = new Car('Mehran', 2005, "VXR");
// let car2 = new Car("Toyota Corolla", 2013, "GLI");
// car1.calcFuelAvg(20, 200);
// car2.calcFuelAvg(10, 130);

let armyPerson = {
  fName: "Muhammad",
  lName: "Rasshid",
  //   cnic: 12345 - 4323244 - 2,
  cinic: 1233432432424,
  rank: "Captain",
  department: "IT",
  domain: "CyberSecurity",
};

// console.log(armyPerson);
// let bodyEl = document.querySelectorAll("body")[0];
// bodyEl.innerHTML = "12345-4323244-2";

// console.log(armyPerson["department"]);

// for (let prop in armyPerson) {
//   console.log(armyPerson["department"]);
// }

// let allKeys = Object.keys(armyPerson);
// let allValues = Object.values(armyPerson);
// console.log(allKeys + " : " + allValues);
