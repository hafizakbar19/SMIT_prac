let city = ()=>{
    let city = prompt("Enter your city name:").toLocaleLowerCase();
    if(city === "karachi"){
        document.getElementById('task1').innerHTML="Welcome to the city of lights";
    }else{
        document.getElementById('task1').innerHTML="Welcome to " + city;
    };
};
//task 2

let genderf = ()=>{
    let gender = prompt("Enter your gender:");
    if(gender === "male"){
        document.getElementById('task2').innerHTML="Good Morning Sir";
    }else{
        document.getElementById('task2').innerHTML="Good Morning Ma'am";
    }
};

//task 3

let color = ()=>{
    let color = prompt("Enter traffic signal color:");
    if(color === "red"){
        document.getElementById('task3').innerHTML="Must Stop";
    }else if(color === "yellow"){
        document.getElementById('task3').innerHTML="Ready to move";
    }else if(color === "green"){
        document.getElementById('task3').innerHTML="Move now";
    }else{
        document.getElementById('task3').innerHTML="Please enter correct color";
    }
};

//task 4

let fuel = ()=>{
    let fuel = +prompt("Enter your remaining fuel in litres:");
    if(fuel < 0.25){
        document.getElementById('task4').innerHTML="Please refill the fuel in your car";
    }else{
        document.getElementById('task4').innerHTML="Your fuel is enough";
    }
};

//task 5
let check = ()=>{
var a = 4;
if (++a === 5){
    document.getElementById('task5').innerHTML = "given condition for variable a is true";
};
};