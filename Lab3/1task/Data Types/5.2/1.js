let billion = 1000000000;
//We also can use underscore _ as the separator:

let billion = 1_000_000_000;
//Here the underscore _ plays the role of the “syntactic sugar”, it makes the number more readable. The JavaScript engine simply ignores _ between digits, so it’s exactly the same one billion as above.

//In real life though, we try to avoid writing long sequences of zeroes. We’re too lazy for that. We’ll try to write something like "1bn" for a billion or "7.3bn" for 7 billion 300 million. The same is true for most large numbers.

//In JavaScript, we can shorten a number by appending the letter "e" to it and specifying the zeroes count:

let billion = 1e9;  // 1 billion, literally: 1 and 9 zeroes

alert( 7.3e9 );  // 7.3 billions (same as 7300000000 or 7_300_000_000)
//In other words, e multiplies the number by 1 with the given zeroes count.

1e3 === 1 * 1000; // e3 means *1000
1.23e6 === 1.23 * 1000000; // e6 means *1000000
//Now let’s write something very small. Say, 1 microsecond (one-millionth of a second):

let mсs = 0.000001;
//Just like before, using "e" can help. If we’d like to avoid writing the zeroes explicitly, we could write the same as:

let mcs = 1e-6; // five zeroes to the left from 1
//If we count the zeroes in 0.000001, there are 6 of them. So naturally it’s 1e-6.

//In other words, a negative number after "e" means a division by 1 with the given number of zeroes:

// -3 divides by 1 with 3 zeroes
1e-3 === 1 / 1000; // 0.001

// -6 divides by 1 with 6 zeroes
1.23e-6 === 1.23 / 1000000; // 0.00000123

// an example with a bigger number
1234e-2 === 1234 / 100; // 12.34, decimal point moves 2 times