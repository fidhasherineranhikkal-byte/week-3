// let a = 0 || "hello";
// console.log(a);
// let b = 'world' && 0;
// console.log(b);
// let c = null ?? "Default";
// console.log(c);
// let d =0 ?? 42;
// console.log(d);
// let e =false || 2 || "js";
// console.log(e);
// let f = "hi" && "js" && true;
// console.log(f);
// console.log(a, b, c, d, e,f);

// operator precedsence
 
// let x = 5 + 10 * 2;
// let y =  (5 + 10) * 2;
// let z = 10 > 5 && 5 < 2 || true ;
// let w = 10 > 5 && (5 < 2  || true);
// console.log(x, y, z, w);

// destructuring and spreading

// const arr = [1, 2, 3];
// const [a, ...rest] = arr;
// const newArr = [...rest, a];
// console.log(a, rest, newArr);

// const obj = { x: 10, y: 20, z: 30 };
// const { x, ...others } = obj;
// const merged = { ...others, x: 99 };
// console.log(x, others, merged);

//  increment
// let a = 5; let b = a++ + ++a + a; console.log(a, b); 

// assignment operators and chaining
// let x, y, z; x = y = z = 10; x += y -= z /= 2; console.log(x, y, z);

//  ARITHEMETIC
// let x = 10;
// let y = 5;
// console.log(x+y);
// console.log(x-y);
// console.log(x*y);
// console.log(x/y);

// Assignmnet
// let x = 20;
// x += 12;
// console.log(x);

// let x = 20;
// x -= 12;
// console.log(x);

let x = 20;
x /= 12;

console.log(x);

