/**
 * Strings
 */

// String Literals
console.log(`Strings Explore`);

// String Literals Create by single quote or double quote
str_variables = "Double Quote String Variables";
console.log(str_variables);

//Hexadecimal Escaped Strings
hex_string = "\xA11";
console.log(hex_string);

//Uncode escaped Strings
unicode_string = `\u00A11`;
console.log(unicode_string);

//String Objects

const str_object = new String("String Objects");

console.log(str_object);
console.log(typeof str_object);
console.log(typeof hex_string);

console.log(str_object.length);
console.log(hex_string.length);

//String Literal Character Access

console.log(str_object[1]);

//String Literal Character Access

console.log(str_variables.charAt(2));
console.log(str_variables.charCodeAt(0));
