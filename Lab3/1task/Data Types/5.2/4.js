alert( isNaN(NaN) ); // true
alert( isNaN("str") ); // true
//But do we need this function? Can’t we just use the comparison === NaN? Unfortunately not. The value NaN is unique in that it does not equal anything, including itself:

alert( NaN === NaN ); // false
isFinite(value) //converts its argument to a number and returns true if it’s a regular number, not NaN/Infinity/-Infinity:

alert( isFinite("15") ); // true
alert( isFinite("str") ); // false, because a special value: NaN
alert( isFinite(Infinity) ); // false, because a special value: Infinity
//Sometimes isFinite is used to validate whether a string value is a regular number:

let num = +prompt("Enter a number", '');

// will be true unless you enter Infinity, -Infinity or not a number
alert( isFinite(num) );
//Please note that an empty or a space-only string is treated as 0 in all numeric functions including isFinite.

//Number.isNaN and Number.isFinite
//Number.isNaN and Number.isFinite methods are the more “strict” versions of isNaN and isFinite functions. They do not autoconvert their argument into a number, but check if it belongs to the number type instead.

//Number.isNaN(value) returns true if the argument belongs to the number type and it is NaN. In any other case, it returns false.

alert( Number.isNaN(NaN) ); // true
alert( Number.isNaN("str" / 2) ); // true

// Note the difference:
alert( Number.isNaN("str") ); // false, because "str" belongs to the string type, not the number type
alert( isNaN("str") ); // true, because isNaN converts string "str" into a number and gets NaN as a result of this conversion
//Number.isFinite(value) returns true if the argument belongs to the number type and it is not NaN/Infinity/-Infinity. In any other case, it returns false.

alert( Number.isFinite(123) ); // true
alert( Number.isFinite(Infinity) ); // false
alert( Number.isFinite(2 / 0) ); // false

// Note the difference:
alert( Number.isFinite("123") ); // false, because "123" belongs to the string type, not the number type
alert( isFinite("123") ); // true, because isFinite converts string "123" into a number 123
//In a way, Number.isNaN and Number.isFinite are simpler and more straightforward than isNaN and isFinite functions. In practice though, isNaN and isFinite are mostly used, as they’re shorter to write.

//Comparison with Object.is
//There is a special built-in method Object.is that compares values like ===, but is more reliable for two edge cases:

//It works with NaN: Object.is(NaN, NaN) === true, that’s a good thing.
//Va lues 0 and -0 are different: Object.is(0, -0) === false, technically that’s correct because internally the number has a sign bit that may be different even if all other bits are zeroes.
//In all other cases, Object.is(a, b) is the same as a === b.

//We mention Object.is here, because it’s often used in JavaScript specification. When an internal algorithm needs to compare two values for being exactly the same, it uses Object.is (internally called SameValue).

//parseInt and parseFloat
//Numeric conversion using a plus + or Number() is strict. If a value is not exactly a number, it fails:

alert( +"100px" ); // NaN
//The sole exception is spaces at the beginning or at the end of the string, as they are ignored.

//But in real life, we often have values in units, like "100px" or "12pt" in CSS. Also in many countries, the currency symbol goes after the amount, so we have "19€" and would like to extract a numeric value out of that.

//That’s what parseInt and parseFloat are for.

//They “read” a number from a string until they can’t. In case of an error, the gathered number is returned. The function parseInt returns an integer, whilst parseFloat will return a floating-point number:

alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12, only the integer part is returned
alert( parseFloat('12.3.4') ); // 12.3, the second point stops the reading
//There are situations when parseInt/parseFloat will return NaN. It happens when no digits could be read:

alert( parseInt('a123') ); // NaN, the first symbol stops the process
//The second argument of parseInt(str, radix)
//The parseInt() function has an optional second parameter. It specifies the base of the numeral system, so parseInt can also parse strings of hex numbers, binary numbers and so on:

alert( parseInt('0xff', 16) ); // 255
alert( parseInt('ff', 16) ); // 255, without 0x also works

alert( parseInt('2n9c', 36) ); // 123456