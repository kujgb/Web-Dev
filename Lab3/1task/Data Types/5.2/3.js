let num = 255;

alert( num.toString(16) );  // ff
alert( num.toString(2) );   // 11111111
//The base can vary from 2 to 36. By default, it’s 10.

//Common use cases for this are:

//base=16 is used for hex colors, character encodings etc, digits can be 0..9 or A..F.

//base=2 is mostly for debugging bitwise operations, digits can be 0 or 1.

//base=36 is the maximum, digits can be 0..9 or A..Z. The whole Latin alphabet is used to represent a number. A funny, but useful case for 36 is when we need to turn a long numeric identifier into something shorter, for example, to make a short url. Can simply represent it in the numeral system with base 36:

alert( 123456..toString(36) ); // 2n9c