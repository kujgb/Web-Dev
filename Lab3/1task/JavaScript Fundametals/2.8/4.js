///Why? Fix it. The result should be 3.

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(a + b); // 12



//solution
//The reason is that prompt returns user input as a string.

//So variables have values "1" and "2" respectively.

let a = "1"; // prompt("First number?", 1);
let b = "2"; // prompt("Second number?", 2);

alert(a + b); // 12
//What we should do is to convert strings to numbers before +. For example, using Number() or prepending them with +.

//For example, right before prompt:

let a = +prompt("First number?", 1);
let b = +prompt("Second number?", 2);

alert(a + b); // 3
//Or in the alert:

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(+a + +b); // 3
//Using both unary and binary + in the latest code. Looks funny, doesn’t it?


//Commentsread this before commenting…
//If you have suggestions what to improve - please submit a GitHub issue or a pull request instead of commenting.
//If you can't understand something in the article – please elaborate.
//To insert few words of code, use the <code> tag, for several lines – wrap them in <pre> tag, for more than 10 lines – use a sandbox (plnkr, jsbin, codepen…)
