// let word ="hello world";
// text =word.toUpperCase();
// document.getElementById("first").innerHTML = text;
//  let word ="hello world";
//  text =word.slice(6)
//  document.getElementById( "first").innerHTML =  text;
// let word ="javascript";
// text = word.charAt(5)
// document.getElementById("first").innerHTML = text;
// let word ="OpenAi GPT"
// text =word.length;
// document.getElementById('first').innerHTML = text;
// let word = " progarmming";
// text = word.trim();
// document.getElementById("first").innerHTML =text;
// let word = "the  sky is blue";
// word = word.replace("blue", "red")
// document.getElementById("first").innerHTML = word;
// let word = ["banana", "apple","orange"];
// word.push("mango");
// document.getElementById("first").innerHTML = word;
// let word = ["banana", "apple","orange"];
// word.shift(0);
// document.getElementById("first").innerHTML = word;

// let word = ["banana", "apple","orange"];
//  text = word.includes("banana");
// document.getElementById("first").innerHTML = text;

// let word = [1, 2,3];
// let tex =[4,5,6];
//  text =word. concat(tex);
// document.getElementById("first").innerHTML = text;

// let word =  ['I', 'love', 'JS'];
// text = word.join("  ");
// document.getElementById("first").innerHTML = text;

// let word =[1,2,3,4];
// let text = word.reverse();
// document.getElementById("first").innerHTML = text;
// let word = " i love javascript";
// text = word.split("");
// document.getElementById("first").innerHTML = text;

// let  word = "apple, banana, grapes";
// let text = word.split(",");
// let result =text.includes("banana");
// document.getElementById("first").innerHTML = result;
// let word =['coding', 'is', 'fun'];
//  let text= word.join(",").toUpperCase();
// document.getElementById("first").innerHTML = text;
// let word = "Helloworld";
// let text =word.slice(0,5).toUpperCase() + " " + word.slice(5).toUpperCase();
// document.getElementById("first").innerHTML = text;
// let text = "123456";
// let reversed = text.split("").reverse().join("");
// document.getElementById("first").innerHTML = reversed;
// let result = document.getElementById("first");
// function myFunction(){
//     result.textContent = "you clicked this paragraph"

// }
// document.getElementById("first").innerHTML =myFunction;
// let result = document.getElementById("btn");
// function myFunction(){
//     result.textContent ="already clicked"
// }
// const pap = document.getElementById("first");
//     if (pap) {
//       pap.addEventListener("mouseover", function(event) {
//         console.log("Mouse over on element!", event);
//         // your code here
//       });
//     }
// const first = document.getElementById("first");
// const btn = document.getElementById("btn");
// btn.addEventListener("click", function(){
//     if(first.style.display==="none"){
//         first.style.display = "block";
//         btn.textContent = "hide"
//     }
//     else{
//         first.style.display = "none";
//         btn.textContent = "show";
//         }
// })

// const btn = document.getElementById("btn");
// btn.addEventListener("click", function(){
//     btn.style.backgroundColor = "BLUE";
// })

// const btnRed =document.getElementById("btnRed");
// const btnGreen = document.getElementById("btnGreen");
// const btnBlue =document.getElementById("btnBlue");
// btnRed.addEventListener("click",function(){
//     document.body.style.backgroundColor ='red';

// })

// btnGreen.addEventListener("click",function(){
//     document.body.style.backgroundColor ='green';
    
// })
// btnBlue.addEventListener("click",function(){
//     document.body.style.backgroundColor ='blue';
    
// })
// const first= document.getElementById("first");
// const increase =document.getElementById("increase");
// const decrease = document.getElementById("decrease");
// let i =0;
// increase.addEventListener("click", function(){
//     first.textContent = i;
//     i++
// }


// )


// decrease.addEventListener("click", function(){
//     first.textContent = i;
//     i--;
// }


// )
//  const first    = document.getElementById("first");
//     const increase = document.getElementById("increase");
//     const decrease = document.getElementById("decrease");
//     let i = 0;

//     // Display initial value
//     first.textContent = i;

//     increase.addEventListener("click", function(){
//       i++;
//       first.textContent = i;
//     });

//     decrease.addEventListener("click", function(){
//       i--;
//       first.textContent = i;
//     });
const btn = document.getElementById("btn");
const result = document.getElementById("result");
const input = document.getElementById("inputbox");
btn.addEventListener("click" ,function(){
    const val = inputbox.value;
    result.textContent =val;
    
}
)