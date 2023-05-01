let city = () => {
  let city = prompt("Enter your city name:").toLocaleLowerCase();
  if (city === "karachi") {
    document.getElementById("task1").innerHTML =
      "Welcome to the city of lights";
  } else {
    document.getElementById("task1").innerHTML = "Welcome to " + city;
  }
};
//task 2

let genderf = () => {
  let gender = prompt("Enter your gender:");
  if (gender === "male") {
    document.getElementById("task2").innerHTML = "Good Morning Sir";
  } else {
    document.getElementById("task2").innerHTML = "Good Morning Ma'am";
  }
};

//task 3

let color = () => {
  let color = prompt("Enter traffic signal color:");
  if (color === "red") {
    document.getElementById("task3").innerHTML = "Must Stop";
  } else if (color === "yellow") {
    document.getElementById("task3").innerHTML = "Ready to move";
  } else if (color === "green") {
    document.getElementById("task3").innerHTML = "Move now";
  } else {
    document.getElementById("task3").innerHTML = "Please enter correct color";
  }
};

//task 4

let fuel = () => {
  let fuel = +prompt("Enter your remaining fuel in litres:");
  if (fuel < 0.25) {
    document.getElementById("task4").innerHTML =
      "Please refill the fuel in your car";
  } else {
    document.getElementById("task4").innerHTML = "Your fuel is enough";
  }
};

//task 5
let check = () => {
  var a = 4;
  if (++a === 5) {
    alert("given condition for variable a is true");
  }
};

let check2 = () => {
  var b = 82;
  if (b++ === 83) {
    alert("given condition for variable b is true");
  } else {
    alert("given condition for variable b is false");
  }
};

let check3 = () => {
  var c = 12;
  if (c++ === 13) {
    alert("condition 1 is true");
  }
  if (c === 13) {
    alert("condition 2 is true");
  }
  if (++c < 14) {
    alert("condition 3 is true");
  }
  if (c === 14) {
    alert("condition 4 is true");
  }
};

//task 6

// let check4 = () => {
//   let subj1 = prompt("Enter subject 1 Name:");
//   let subj2 = prompt("Enter subject 2 Name:");
//   let subj3 = prompt("Enter subject 3 Name:");
//   let totalMarks = 100;
//   let obtMarkSubj1 = +prompt("Obtained marks in " + subj1);
//   let obtMarkSubj2 = +prompt("Obtained marks in " + subj2);
//   let obtMarkSubj3 = +prompt("Obtained marks in " + subj3);

//   let result1 = (obtMarkSubj1 / totalMarks) * 100;
//   let result2 = (obtMarkSubj2 / totalMarks) * 100;
//   let result3 = (obtMarkSubj3 / totalMarks) * 100;

//   let totalObtMarks = obtMarkSubj1 + obtMarkSubj2 + obtMarkSubj3;
//   let totalPercentage = (totalObtMarks / 300) * 100;


//   let grade1, remarks1;

//     if (result1 >= 80) {
//         let grade1 = "A-one";
//         let remarks1 = "Excellent";
//     } else if (result1 >= 70) {
//         let grade1 = "A";
//         let remarks1 = "Good";
//     } else if (result1 >= 60) {
//         let grade1 = "B";
//         let remarks1 = "You need to improve";
//     } else {
//         let grade1 = "Fail";
//         let remarks1 = "Sorry";
//     };

//   document.getElementById("task6").innerHTML =
//     "<h1>Marks Sheet</h1><br><br>"
//     + "Total Marks: " + totalMarks + "<br>"
//     + "Marks Obtained: " + totalObtMarks + "<br>"
//     + "Grade: " + grade1 + "<br>"
//     + "Percentage: " + totalPercentage + "%<br>"
//     + "Remarks: " + remarks1 + "<br><br><br>"


// };

let check4 = () => {
    let subj1 = prompt("Enter subject 1 Name:");
    let subj2 = prompt("Enter subject 2 Name:");
    let subj3 = prompt("Enter subject 3 Name:");
    let totalMarks = 100*3;
    let obtMarkSubj1 = +prompt("Obtained marks in " + subj1);
    let obtMarkSubj2 = +prompt("Obtained marks in " + subj2);
    let obtMarkSubj3 = +prompt("Obtained marks in " + subj3);
  
    let result1 = (obtMarkSubj1 / totalMarks) * 100;
    let result2 = (obtMarkSubj2 / totalMarks) * 100;
    let result3 = (obtMarkSubj3 / totalMarks) * 100;
  
    let totalObtMarks = obtMarkSubj1 + obtMarkSubj2 + obtMarkSubj3;
    let totalPercentage = (totalObtMarks / 300) * 100;
  
    let grade, remarks;
  
    if (totalPercentage >= 80) {
      grade = "A-one";
      remarks = "Excellent";
    } else if (totalPercentage >= 70) {
      grade = "A";
      remarks = "Good";
    } else if (totalPercentage >= 60) {
      grade = "B";
      remarks = "You need to improve";
    } else {
      grade = "Fail";
      remarks = "Sorry";
    }
  
    document.getElementById("task6").innerHTML =
      "<h1>Marks Sheet</h1><br><br>" +
      "Total Marks: " +
      totalMarks +
      "<br>" +
      "Marks Obtained: " +
      totalObtMarks +
      "<br>" +
      "Grade: " +
      grade +
      "<br>" +
      "Percentage: " +
      totalPercentage +
      "%<br>" +
      "Remarks: " +
      remarks +
      "<br><br><br>";
  };
  
  //task 7

  let guess = () => {
    let secretNum = Math.round(Math.random() * 10);
    let guessNum = +prompt("Guess the secret number:");
    if (guessNum === secretNum) {
      document.getElementById("task7").innerHTML = "Bingo! Correct answer";
    } else if (guessNum === secretNum + 1) {
      document.getElementById("task7").innerHTML =
        "Close enough to the correct answer";
    } else {
      document.getElementById("task7").innerHTML = "Wrong answer";
    }
  };

  //task 8

  let check5 = () => {
    let num = +prompt("Enter number:");
    if (num % 3 === 0) {
      document.getElementById("task8").innerHTML = "Number is divisible by 3";
    } else {
      document.getElementById("task8").innerHTML = "Number is not divisible by 3";
    }
  };

  //task 9

  let check6 = () => {
    let num = +prompt("Enter number:");
    if (num % 2 === 0) {
      document.getElementById("task9").innerHTML = "Number is even";
    } else {
      document.getElementById("task9").innerHTML = "Number is odd";
    }
  };

  //task 10

  let check7 = () => {
    let temp = +prompt("Enter temperature:");
    if (temp > 40) {
      document.getElementById("task10").innerHTML = "It is too hot outside.";
    } else if (temp > 30) {
      document.getElementById("task10").innerHTML = "The Weather today is Normal.";
    } else if (temp > 20) {
      document.getElementById("task10").innerHTML = "Today’s Weather is cool.";
    } else {
      document.getElementById("task10").innerHTML = "OMG! Today’s weather is so Cool.";
    }
  };

  //task 11

  let calc = () => {
    let num1 = +prompt("Enter first number:");
    let num2 = +prompt("Enter second number:");
    let operator = prompt("Enter operator:");
    let result;
    if (operator === "+") {
      result = num1 + num2;
    } else if (operator === "-") {
      result = num1 - num2;
    } else if (operator === "*") {
      result = num1 * num2;
    } else if (operator === "/") {
      result = num1 / num2;
    } else if (operator === "%") {
      result = num1 % num2;
    } else {
      result = "Invalid operator";
    }
    document.getElementById("task11").innerHTML ="The Answer is = " + result;
  };
  
