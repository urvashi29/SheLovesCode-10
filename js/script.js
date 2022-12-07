var num = 20;
var z = num++ - 10;
console.log(num); //21
console.log(z);

console.log(z++);

// Operator Precedence -> priority of operator in execution
//brackets
// * /
// + -
// L -> R

var result = 10 + (70 / 10) * 20 + 45 - 20;
console.log(result);

// Assignment Operator (=)
var val = 20; //
val += 5; // val = val + 5
val -= 5; //val = val - 5
val *= 5; //val = val * 5
val /= 5; //val = val / 5

// String Operator (+)
var str = "hello";
var strTwo = "world";
console.log(str + strTwo);
console.log(str * strTwo); //NaN

console.log(str + 100); //
console.log(20 * 20 - "world"); //NaN
console.log(20 + 20 + "world"); //40world
console.log("world" + 20 + 20); //world2020
console.log(20 + "world" + 20); //20world20
console.log(20 + "world" - 20); //NaN

// Implicit coersion
console.log("20" + 20);
console.log("20" - 20); //0
console.log("10" + "20" + "world");
console.log("10" * "20" + "world");
console.log(20 - "20" - "10"); //-10
console.log("" + 10); //

// alpha string
// 'jhjfhejd'

// numeric string
// '899000'

// alpha-numeric string
// 'fhejf89jkenk===++'

//check for operator precedence
//check for type of operand (non-numeric & numeric)
//type of opeartor
//result

// Comparison operator
var a = 9;
var b = "9";

console.log(a == b); //look for value
console.log(a === b); // (strict checking) look for value and datatype
console.log(a != 9); //look for value
console.log(b !== 9); //look for value and datatype
console.log(a > 9); //f
console.log(b < 10); //t
console.log(a >= 10); //f
console.log(b <= 9); //t
console.log("world" == 20);

// Logical Operator (&&, ||, !)
console.log(a == b && a === b && a != 9); //if all statements are true, then it will return true, else false
console.log(a == b || a === b || a != 9); //if any of the statement is true, then it will return true, otherwise false
console.log((a == b || a === b) && a == 9); //
console.log(!(a == b));

// Datatype
// String
// escape characters
console.log("hello" + "\n" + "world");
console.log("hello" + "\\" + "world");

var firstName = "alina";
var lastName = "joe";

console.log(firstName + " " + lastName);
console.log(firstName.length);

// position/index starts from 0

var str =
  "   front-end development: html, css, js are end the main technologies of front-end development  ";
console.log(str.length);

// searching methods
console.log(str.indexOf("end", 10)); //return the index of the first occurence if a specified word
console.log(str.lastIndexOf("end")); ////return the index of the last occurence if a specified word
console.log(str.search("end"));

// extraction of strings
console.log(str.slice(1, 7)); //return the string from 1 index till 6th index
console.log(str.slice(7));

console.log(str.replace("end", "END"));
console.log(str.replaceAll("end", "END"));
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.trim());
console.log(str.charAt(4));
console.log(str.charCodeAt(1));

console.log(typeof str);

// Number
var num = 10;
var numTwo = 10.98;

//number to string
console.log(String(num));
console.log(num.toString()); //
console.log(num.toExponential(1));
console.log(num.toFixed(2));

//string to number
console.log(Number("world"));
console.log(Number("89"));
console.log(Number(""));
console.log(parseInt(89.798));
console.log(parseInt("90.89"));
console.log(parseFloat("8900.89"));
console.log(parseFloat(89));

console.log(20 / "20");

console.log(typeof num);

// Boolean ( true or false)
console.log(20 > 10);

// convert boolean to number
console.log(Number(true)); //1
console.log(Number(false)); //0

console.log(true + false > 1); //

console.log(typeof (20 > 10));

// undefined (absent or unkown value)
var t;
console.log(t); //undefined
console.log(typeof t); //undefined

// t = 20;
// console.log(t);

// null(no value or empty value)
var val = null;
console.log(val); //null
console.log(typeof null); //object

console.log(t == val); //true
console.log(t === val); //false

console.log(true > false); //

//objects

//1. object literal
//property/value
var person = {
  name: "alina",
  age: 23,
  gender: "female",
  height: "5.6",
  eyeColor: "blue",
  city: "pune",
  contact: {
    email: "admin@gmail.com",
    contactNumber: 789000999,
  },
  isMarried: false,
};

// console.log(person["name"]);

console.log(person);
console.log(typeof person);

console.log(person.name);
console.log(person.gender);
console.log(person.contact.email);
console.log(person.isMarried);

//Object.keys
console.log(Object.keys(person));

console.log(Object.values(person));

//deleting a property
delete person.name;
delete person.age;
console.log(person);

// 2.Object.create()
var rObj = Object.create(person);
console.log(rObj.contact);
console.log(rObj.city);

// 3. prototype (new)

// 4. class (new)
