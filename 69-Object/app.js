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

// let armyPerson = {
//   fName: "Muhammad",
//   lName: "Rasshid",
//   //   cnic: 12345 - 4323244 - 2,
//   cinic: 1233432432424,
//   rank: "Captain",
//   department: "IT",
//   domain: "CyberSecurity",
// };

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

//object likhna
//object pr loop
//access specific property
//keys access
//property access
// value access

// console.log(student);

// for (let prop in student) {
//   console.log(student);
// }

// let allKeys = Object.keys(student);
// let allValues = Object.values(student);

// console.log(allKeys, allValues);
// console.log(student.fName);
// console.log(student["fName"]);

// let student = {
//   fName: "muhammad",
//   lName: "rashid",
//   rollNum: "4325",
//   subjects: ["html", "css", "JavaScript"],
//   isHeMarried: false,
// };

// for (let prop in student) {
//   // console.log(prop);
//   // console.log(student[prop]);
//   console.log(prop, ":", student[prop]);
// }
// let user = {
//   fName: "rashid",
//   rashid: "he is fullStack developer",
// };

// console.log(user.fName);
// let fName = "rashid";
// console.log(user[fName]);

// let user = {
//   userName: "haider",
//   haider: `He is a full stack engineer and trainer.`,
//   isMarried: true,
// };

// for (let prop in user) {
//   user[prop] = prompt(`Enter a new value of  key ${prop}`);
// }

// let obj = {
//   [prop]: user[prop],
// };

// console.log(obj);

// let user = {
//   userName: "haider",
//   haider: `He is a full stack engineer and trainer.`,
//   isMarried: true,
// };

// for (let prop in user) {
//   user[prop] = prompt(`Enter a new value for key ${prop}`);

//   let obj = {
//     [prop]: user[prop],
//   };
//   console.log(obj);
// }

// console.log(user);

// let user = {
//   userName: "haider",
//   haider: "He is fullStack Dev",
//   isMarried: false,
// };
// console.log(user);
// for (let prop in user) {
//   user[prop] = prompt(`Enter a new value for key ${prop}`);
//   let obj = {
//     [prop]: user[prop],
//   };
//   console.log(obj);
// }

// console.log(user);

// function Student(fName, lName, rollNum, subjects, isMatriculate) {
//   this.fName = fName;
//   this.lName = lName;
//   this.rollNum = rollNum;
//   this.subjects = subjects;
//   this.isMatriculate = isMatriculate;
// }

// let s1 = new Student(
//   "muhammad",
//   "rashid",
//   32311,
//   ["HTML", "CSS", "JS", "fBase"],
//   true
// );

// let s2 = new Student(
//   "haider",
//   "ali",
//   9876,
//   ["phy", "chm", "Math", "bio"],
//   false
// );

// console.log(s1, s2);

// let nums = [2, 3, 5, 4, 2, 73, 53, 6, 8, 9];
// let largest = nums[0];
// for (let i = 0; i < nums.length; i++) {
//   if (largest < nums[i]) {
//     largest = nums[i];
//   }
// }
// console.log(largest);

// let plan1 = {
//   planName: "fatLose",
//   excercises: "strenth training",
//   fee: 2000,
//   admissionFee: 1000,
//   isAirCond: false,
//   calculateBill: function (noOfMonths) {
//     let totalBill = this.fee * noOfMonths + this.admissionFee;
//     if (noOfMonths >= 3) {
//       totalBill = (totalBill / 100) * 80;
//     }
//     console.log(totalBill);
//   },
// };
// plan1.calculateBill(4);

// console.log(plan1.planName);
// console.log(plan1["planName"]);

// let allKeys = Object.keys(plan1);
// let allValues = Object.values(plan1);

// // console.log(allKeys, ":", allValues);

// for (let prop in plan1) {
//   //   console.log(prop);
//   console.log(prop, ":", plan1[prop]);
// }
// console.log(plan1);
// let userN = {
//   userName: "haider",
//   haider: "softwareEnginner and he is fullStack dev and a good trainer",
// };

// let userName = "haider";
// console.log(userN.userName);
// console.log(userN[userName]);

// function Student(name, rollNum, isFeePaid) {
//   this.name = name;
//   this.rollNum = rollNum;
//   this.isFeePaid = isFeePaid;
// }

// Student.prototype.subjects = ["HTML", "CSS", "JS"];
// let student1 = new Student("haider", 32412, true);
// let student2 = new Student("rashid", 4356, false);
// let student3 = new Student("absullah", 45243, true);

// student1.subjects = ["python"];
// console.log(student1, student2, student3);

