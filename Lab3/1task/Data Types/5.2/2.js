alert( 0xff ); // 255
alert( 0xFF ); // 255 (the same, case doesn't matter)
//Binary and octal numeral systems are rarely used, but also supported using the 0b and 0o prefixes:

let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255

alert( a == b ); // true, the same number 255 at both sides