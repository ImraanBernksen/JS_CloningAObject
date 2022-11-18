let user = {
    name: 'Imraan',
}
// assign()
// let newUser = Object.assign({}, user, {
//     surname: 'Bernksen',
//     email : 'imobernksen@gmail.com'
// })

// console.log(user);
// console.log(newUser);

// Spread operator
// let newUser = {...user, ...{
//     surname: 'Bernksen',
//     email: 'imobernksen@gmail'
// }};
// console.log(newUser);

// JSON.parse(JSON.stringify())
// let newUser = JSON.parse(JSON.stringify(user));
// console.log(newUser);

// Garbage collection (GC)
/*
It purpose is to monitor memory allocation and determine when a 
block of allocated memory is no longer needed and reclaim it.
*/
// function addition(numb1, numb2) {
//     let total = numb1 + numb2;
//     console.log(total)
// }

// addition(8, 3);
// console.log(total);

// Math methods
/*
Constant: Math.PI
*/
// Number to integer
/*
Math.round()
Math.ceil()
Math.floor()
Math.trunc()
*/
let number = 23.4;
// Will rounded to its nearest integer
// console.log(Math.round(number));
// console.log(Math.round(Math.PI));
// Will rounded up to the nearest integer
// console.log(Math.ceil(number));
// Will rounded down to the nearest integer 
// console.log(Math.floor(number));
// Will return only the integer
// console.log(Math.trunc(number));

// Math.sign: returns -1 if argument is negative, null or positive (1), 0 if is null
// let negNumb = 9;
// console.log(Math.sign(negNumb));

// pow(x, y)
// console.log(Math.pow(3, 2));

// Math.sqrt(x)
console.log(Math.sqrt(9));

// Math.abs(): Return the absolute value of the argument
// console.log(Math.abs(-30));

// max(), min(), random()

// String methods
/*
charAt()
concat()
endsWith()
includes()
indexOf()
lastIndexOf()
property: length 
match()
repeat()
replace()
search()
slice()
split()
startsWith()
substr()
substring()
toLowerCase()
toUpperCase()
toString()
trim()
trimEnd()
trimStart()
valueOf() : Return a primitive value of a string or object
*/
let sentence = "I love programming";
// console.log(sentence[0]);
let index = 3;
// console.log(`charAt(${index}): ${sentence.charAt(index)}`);
// console.log(`concat(): ${sentence.concat(' and database.')}`);
// console.log(`endsWith(): ${sentence.endsWith(' and database.')}`);
// console.log(`includes(): ${sentence.includes('love')}`);
// indexOf(what to search for, optional : where to start from)
// console.log(`indexOf(): ${sentence.indexOf('g')}`);
// console.log(`lastIndexOf(): ${sentence.lastIndexOf('o')}`);
// console.log(`(): ${sentence.concat(' and database.')}`);
// console.log(`(): ${sentence.concat(' and database.')}`);
// console.log(`(): ${sentence.concat(' and database.')}`);
// console.log(`(): ${sentence.concat(' and database.')}`);
// console.log(`(): ${sentence.concat(' and database.')}`);
// console.log(`(): ${sentence.concat(' and database.')}`);
// console.log(`(): ${sentence.concat(' and database.')}`);
// console.log(`(): ${sentence.concat(' and database.')}`);