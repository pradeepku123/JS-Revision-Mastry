/**
 * A While Statement Executes its Statements as Long as Specified condition evaluates True
 *
 */

let i = 1000;

while (i != 100 ? true : false) {
  console.log(`Variable ${i < 100 ? (i += 1) : (i -= 1)}`);
}
