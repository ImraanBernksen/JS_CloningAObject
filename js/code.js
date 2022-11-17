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

function addition(numb1, numb2) {
    let total = numb1 + numb2;
    console.log(total)
}

addition(8, 3);
console.log(total);