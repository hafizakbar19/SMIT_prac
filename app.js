function takeInput (){
   return a1 = +prompt("Enter your number:");
};
var question1 = document.getElementById('q1');
var question1b = document.getElementById('q1b');
var question1c = document.getElementById('q1c');
var question1d = document.getElementById('q1d');
var question1e = document.getElementById('q1e');

let q1a = () => question1.innerText="Answer: The value of a is " + a1;
let q1b = () => question1b.innerText="Answer: The value of a is " + ++a1 + "\n" + "Now the value of a is " + a1;
let q1c = () => question1c.innerText="Answer: The value of a is " + a1++ + "\n" + "Now the value of a is " + a1;
let q1d = () => question1d.innerText="Answer: The value of a is " + --a1 + "\n" + "Now the value of a is " + a1;
let q1e = () => question1e.innerText="Answer: The value of a is " + a1-- + "\n" + "Now the value of a is " + a1;

//question 2

var a = 2 ; var b = 1;
const q2i= document.getElementById('q2i').innerHTML="The value of --a is " + (--a) + " because 1 is subtracted."
a = 2; b =1;
let q2i_2= document.getElementById('q2i_2').innerHTML="The value of --a - --b is " + (--a - --b) + " because the value of --b is now 0 and if 0 is subtracted from 1 then the answer will be 1."
a = 2; b =1;
const q2i_3= document.getElementById('q2i_3').innerHTML="The value of --a - --b + ++b is " + (--a - --b + ++b) + " because simply 1 is added in b due to ++b and that 1 is added in previous value."
a=2;b=1;
const q2i_4= document.getElementById('q2i_4').innerHTML="The value of --a - --b + ++b +b is " + (--a - --b + ++b +b) + " because simply 1 is added in previous value that is now the value of b." + "\n" + "And this is the final result."
 
//question 3

function greet(){ user = prompt("Please enter your name");
    alert("Hello " + user + " Have a nice day!");
    return user;
}



