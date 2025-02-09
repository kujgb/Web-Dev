//What are the final values of all variables a, b, c and d after the code below?

//let a = 1, b = 1;

let c = ++a; // ?
let d = b++; // ?


//solution
//The answer is:

a = 2
b = 2
c = 2
d = 1
let a = 1, b = 1;

alert( ++a ); // 2, prefix form returns the new value
alert( b++ ); // 1, postfix form returns the old value

alert( a ); // 2, incremented once
alert( b ); // 2, incremented once