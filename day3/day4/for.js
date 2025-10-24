// let number ='';
// for(let i = 0; i< 11;i++){
//     number += "the number is " + i +"<br>";
// }
// document.getElementById("first").innerHTML = number;

// let text ="";
// let i = 2;
// while(i < 21 ){
//     text +=  "The number is" + i + "<br>";
//     i =  i+2;
// }
// document.getElementById("first").innerHTML = text;
// let i = 1;

// do {
//     document.write("Hello JavaScript <br>");
//     i++;
// } while (i <= 5);

// let text ="";
// let i =1;
// while(i < 11){
//     text += "5 × " + i + " =" + (i * 5) + "<br>";
//     i++;
// }
// document.getElementById("first").innerHTML= text ;
// let sum = 0;
// let i = 1;
    
// while( i <=100){
// sum = sum +i;
// i++;
// }
// document.getElementById("first").innerHTML = sum;
// let fruit = ['banana', "apple", "grape", "blueburry"]
// let text = '';
// for(i =0; i< fruit.length ;  i++){
//     text +=fruit[i] + "<br>";
// }
// document.getElementById("first").innerHTML = text;

// let person = {
//     name: "Alice",
//     age: 25,
//     city: "Delhi"
// };
// let text ='';
// for(let key in person){
//     text += key + ": " + person[key] + "<br>";
// }
// document.getElementById("first").innerHTML = text;

// let text ='';
// for(let i=11;i< 31 ;){
//     text += "the number is" + i;
//     i +=2 ;
// }
// document.getElementById("first").innerHTML = text;
// console.log(text);
// let rows = 5;

// for (let i = 1; i <= rows; i++) {
//   let pattern = "";

//   // print spaces
//   for (let j = i; j < rows; j++) {
//     pattern += " ";
//   }

//   // print stars
//   for (let k = 1; k <= (2 * i - 1); k++) {
//     pattern += "*";
//   }

//   console.log(pattern);
// }
// let x= 5;
//  function myfunction(){
//     return x**2;
//  }
//  myfunction()
//  console.log(myfunction())

// function myfunction(radius){
//     const area = Math.PI * radius* radius;
//     return area;
    
// }
//     console.log(myfunction(3));

// function myfunction(money, tax){
//     const taxaamount = money * tax;
//     const total = taxaamount + money;
//     return total
// }
// console.log(myfunction(3000,30));

//  function myfunction( farnheit){
//      const celsuis = (farnheit - 32)* 5/9;
//     return celsuis
//  }
//  console.log(myfunction(97));

//  function myfunction(length){
//     const char ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]<>?";
//     let password ="";

// for( i = 0; i< length; i++){
//  const rand = Math.floor(Math.random() * char.length);

//  password += char[rand];

// }
// return password;
//  }
// console.log(myfunction(14));\



// const  cars ={
//     name:"swift",
//     color:"blue",
//     year:2023

// };

// console.log(cars);

// const  cars ={
//     name:"swift",
//     color:"blue",
//     year:2023

// };
// cars.price = 500000;
// console.log(cars);

// const  cars ={
//     name:"swift",
//     color:"blue",
//     year:2023

// };
// delete cars.name;

// console.log(cars);

// const  cars ={
//     name:"swift",
//     color:"blue",
//     year:2023

// };
// let value =Object.values(cars);
// let key = Object.keys(cars);
// console.log(value);
// console.log(key);

const  cars ={
    name:"swift",
    color:"blue",
    year:2023

};
let value =Object.values(cars).length;
let key = Object.keys(cars).length;
console.log(value);
console.log(key);