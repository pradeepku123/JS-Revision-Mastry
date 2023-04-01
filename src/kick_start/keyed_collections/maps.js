/**
 * Explred JS Keyed Collections
 */
console.log(`Welcome to Keyed Collections`);

//Creare a map Object
const mapObject = new Map();
mapObject.set(`101`, "STANDARD1");
mapObject.set(`102`, "STANDARD2");
mapObject.set(`103`, "STANDARD3");

console.log(`Valu`);
//Extract Data from map object
console.log(`Extracted Data using KEY`, mapObject.get("101"));
console.log(`Map_Object::`, mapObject);
console.log(`Type Map_Object::`, typeof mapObject);
console.log(`Size of Map_Object::`, mapObject.size);
