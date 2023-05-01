let ans1 = ()=>{
    let char = prompt("enter a character ");
    let asiicode = char.charCodeAt(0);
    if(asiicode >= 48 && asiicode <= 57){
        alert("input character is a number");
    }else if(asiicode >= 65 && asiicode <= 90){
        alert("input character is an uppercase letter");
    }else if(asiicode >= 97 && asiicode <= 122){
        alert("input character is a lowercase letter");
    }else{
        alert("input character is not a number or letter");
    }

};

// task 2
let ans2 = ()=>{
    let num1 = +prompt("enter first number");
    let num2 = +prompt("enter second number");
    if(num1 > num2){
        alert(num1 + " is larger");
    }else if(num2 > num1){
        alert(num2 + " is larger");
    }else{
        alert("both are equal");
    }
}


// task 3
let ans3 = ()=>{
    let num = +prompt("enter a number");
    if(num > 0){
        alert("number is positive");
    }else if(num < 0){
        alert("number is negative");
    }else{
        alert("number is zero");
    }
};

// task 4
let ans4 = ()=>{
    let char = prompt("enter a character");
    if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
        alert("true");
    }else{
        alert("false");
    }
};

// task 5
let ans5 = ()=>{
    let password = "12345";
    let userPassword = prompt("enter your password");
    if(userPassword === ""){
        alert("please enter your password");
    }else if(userPassword === password){
        alert("Correct! The password you entered matches the original password");
    }else{
        alert("Incorrect password");
    }
};

// task 6   
let ans6 = ()=>{
    let el = document.getElementById("answer6");
    el.innerHTML = "There is a missing curly brace in the if else statement";
};

// task 7
let ans7 = ()=>{
    let time = +prompt("enter time in 24 hours clock format");
    if(time >= 0000 && time < 1200){
        alert("Good Morning!");
    }else if(time >= 1200 && time < 1700){
        alert("Good Afternoon!");
    }else if(time >= 1700 && time < 2100){
        alert("Good Evening!");
    }else if(time >= 2100 && time <= 2359){
        alert("Good Night!");
    }else{
        alert("please enter time in 24 hours clock format");
    }
}