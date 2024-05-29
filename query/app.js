let student1 = {
    fName: "muhammad",
    lName: "rashid",
    rollNum: 42343,
    subjects: ["HTML", "CSS", "JS"],
    calculatePercentage: function (html, css, JS) {
      let pre = ((html + css + JS) * 100) / 300;
      console.log(this.calculatePercentage(93, 83, 73));
    },
  };
  
  student1.calculatePercentage();