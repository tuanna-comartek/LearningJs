let a = 3;
let b = 4;
const c = a + b;
console.log(c);
// var b = null;
console.log(b);
console.log("Addition", (a += b));
console.log("SubTracTion", (a -= b));
console.log("Multiplication", (a *= b));
console.log("Division", (a /= b));
console.log("Modulus", (a %= b));
let k = 8;
console.log("Increment", k++);
console.log("Decrement", k--);
console.log(b);
console.log("aaaa", a);
console.log(a === b);
console.log(a == b);
console.log((a = b));

let ab = 8;
let ac = "8";

console.log("typeof number ab : ", typeof ab);
console.log("typeof string ac  : ", typeof ac);
console.log("pare ==", ab == ac);
console.log("pare ===", ab === ac);
console.log("pare !=", ab != ac);
console.log("pare !==", ab !== ac);

const myArray = [4234, "abc", 123, "asdas", 99];

function Car(color, year, type) {
  (this.color = color), (this.year = year), (this.type = type);
}
const auto = new Car("Black", 2022, "BMW");

console.log(auto);
console.log(auto instanceof Car);

for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  console.log(element);
}
let m;
console.log(m);

let text = "";
var i = 0;

while (i < 10) {
  console.log((text += "The number is " + i));
  i++;
}

let text2 = "";
var i = 0;

do {
  console.log((text2 += "The number is " + i));
  i++;
} while (i < 10);

let o = 0.00012;
let p = 0.32333;
const t = o + p;
console.log(t);

var user1 = { name: "Tuan", age: 28 };
var user2 = { name: "Tuan", age: 28 };

console.log(JSON.stringify(user1) === JSON.stringify(user2));
