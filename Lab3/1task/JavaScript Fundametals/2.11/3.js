//What will the result be?

alert( null || 2 && 3 || 4 );


//solution
//The answer: 3.

alert( null || 2 && 3 || 4 );
//The precedence of AND && is higher than ||, so it executes first.

//The result of 2 && 3 = 3, so the expression becomes:

null || 3 || 4
//Now the result is the first truthy value: 3.