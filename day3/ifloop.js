// let result = document.getElementById("result");
       
        
//         function myFunction(){
//             let number =Number(document.getElementById("number").value);
//             let result = document.getElementById("result");
//             if(number > 0){
//                result.textContent = number  + "is  negative";}
//             else if(number===0){
//                result.textContent = number  + "is  zero";}
//             else{
//                 result.textContent = number  + "is  positive";}
//         }
        
// let age = document.getElementById("number");
// let result = document.getElementById("result");


// function myFunction(){
//     let num = Number(age.value);
//     if( num >= 18){
//         result.textContent = "your are eligibel for driving";
//     }
//     else if(num < 0){
//         result.textContent = "its not applicable";
//     }
//     else if(num < 18){
//         result.textContent = "your are  not eligble for driving"
//     }
//     else{
//         result.textContent = "your are not eligble for driving";
//     }
// }



// function myFunction(){
//     let num = Number(document.getElementById('num').value);
//     let result = document.getElementById("result");
//     if(num % 2 === 0){
//         result.textContent =   num + " a even number";
//     }
//     else{
//         result.textContent = num + " is odd number";
//     }
// }

//  const  date =new Date();
//  const time =date.getHours();
//  const result = document.getElementById("result");
 
//  if( time < 12 && time >4){
//     result.textContent = "Goodmorning";}

// else if( time >=12 && time < 16){
//  result.textContent = "Good after noon";

// }
// else if(time>= 16 && time <= 18 ){
//     result.textContent = "Good evening";

// }
// else{
//     result.textContent = "Goof night";
// } 


// function myFunction(){
//     let year = Number(document.getElementById("num").value);
//     let result =document.getElementById("result");
//     if(year % 4!== 0){
//         result.textContent = year + "is not a leap year";
//     }
//    else if(year % 100!== 0){
//         result.textContent = year + "is not a leap year";
//     }
// else if (year % 400 === 0){
//     result.textContent = year + "is a leap year";
// }
// else{
//     result.textContent = year + "is not a leap year"
// }
// }
// let day;
// let date = new Date().getDay();
 
// switch (date) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case  6:
//     day = "Saturday";
// }
// document.getElementById("result").innerHTML = "tOday is " + day;

// let time = 5;


//     (time % 5 === 0) 
//       ? alert(time + " is divisible by 5") 
//       : alert(time + " is not divisible by 5");
//  function myFunction(){
// let text = document.getElementById("num").value.toLowerCase();

// let result = document.getElementById("result");
// switch (text){
// case "a":
// case"i":
// case"o":
// case "u":
//     result.textContent = text + "is a vowel";
// break;
// default:
//      if( text >= 'a' && text <= 'z') {
//             result.textContent = text + " is a consonant.";
//           } else {
//             result.textContent = "Please enter a valid alphabet character.";
//           }
//         }
//     }

// let x = 5;
// let y = 5;
// let text = (x>y) ? "x is bigger": (y>x) ? "y is bigger" : "x and y are equal";
// document.getElementById("result").innerHTML = text;
// let grade;
// function myFunction(){
//     let mark = Number(document.getElementById("num").value);
//     let result =document.getElementById("result");
//     if(mark >=90){
//         grade = "A+";
//         result.textContent = "grade is"+ grade;
//     }
//     else if(mark >= 80){
//         grade = "A"
//         result.textContent =  "grade is"+ grade;
//     }
//     else if (mark >=70){
//         grade ="B+";
//          result.textContent =  "grade is"+ grade;
//     }
//     else if(mark >=60){
//         grade ="B";
//          result.textContent =  "grade is"+ grade;
//     }
//     else if (mark >= 50){
//         grade= "c+";
//          result.textContent =  "grade is"+ grade;
//     }
//      else if (mark >= 40){
//         grade= "c";
//          result.textContent =  "grade is"+ grade;
//     }
//     else if (mark >= 30){
//         grade= "D+";
//          result.textContent =  "grade is"+ grade;
//     }
//      else if (mark >= 20){
//         grade= "D";
//          result.textContent =  "grade is"+ grade;
//     }
//       else {
//         grade= "F";
//          result.textContent =   "your are failed with "+ grade + "grade";
//     }
    
// }
// let num1 = 1;
// let num2 = 2;
// let num3 =2;
// let max;
// if(num1>num2 && num1 >num3){
//     max = "max is " + num1;
//     document.getElementById("result").innerHTML = max;

// }
// else if(num2 > num3 && num2> num1){
//     max = "max is " + num2;
//         document.getElementById("result").innerHTML = max;

    
// }
// else if(num3 > num1 && num3 > num2){
//     max = "max is " + num3;
//         document.getElementById("result").innerHTML = max;

    
// }
// else if(num1===num2&& num2===num3){
//     max ="no max value. All are equal";
//     document.getElementById("result").innerHTML = max;

// }
// else{
//     max = "no value"
//             document.getElementById("result").innerHTML = max;

// }

// let x = 200000;
// let text = (x>50000) ? "taxable" : "non taxable";
// document.getElementById("result").innerHTML = x + text;
// function myFunction(){
// let  month = Number(document.getElementById("num").value);
// let result = document.getElementById("result");
// let monthName, days ;
// switch( month){
//     case 1:
//         monthName = "january"; days = 31; break;
//  case 2:
//     monthName ="february"; days =" 29 or 28"; break;
//  case 3:
//     monthName = "March"; days = 31; break;
//  case 4:
//     monthName = "april"; days = 30; break;
//  case 5:
//     monthName ="may"; days =31; break;
//  case 6:
//     monthName ="june"; days =30; break;
//  case 7 :
//    monthName ="july"; days =31; break;
// case 8:
//     monthName ="august"; days =31; break;
// case 9:
//     monthName = "september"; days = 30; break;
// case 10:
//     monthName = "OCTOBER"; days = 31; break;
// case 11:
//     monthName =" november"; days = 30; break;
// case 12:
//     monthName = "december"; days = 31; break;
//     defualt:
//         result.textContent ="please enter valid date"
//      return

// }
//  result.textContent = `${monthName} has ${days} days.`;

// }
function myFunction(){
let role = document.getElementById("num") ;
let result =document.getElementById("result");
let message;
switch(role){
    case 'admin':
          message = "Admin: You have full access to manage everything.";
          break;
        case 'editor':
          message = "Editor: You can edit content but not manage users.";
          break;
        case 'user':
          message = "User: You can view and comment on content.";
          break;
        case 'guest':
          message = "Guest: You have limited access, please log in for more.";
          break;
        default:
          message = "❌ Invalid role. Please enter admin, editor, user, or guest.";
      }

      result.textContent = message;
    }
                                                                                                                               