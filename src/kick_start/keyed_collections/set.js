/**
 * Keyed Collections SET
 */

console.log(`Welcome to Keyed Collections Sets`);

//Create a set Object

const myCollectionSet = new Set();

// Adding Items to CollectionSet

myCollectionSet.add("1");
myCollectionSet.add("Pradeep");
myCollectionSet.add("Kumar");
myCollectionSet.add("Behera");

//Delete Items from CollectionSet
myCollectionSet.delete("Pradeep");

//Findout Size of CollectionsSet

console.log(`Size of CollectionSet: ${myCollectionSet.size}`);

console.log(`Item added to CollectionSet`, myCollectionSet);

//Convert set to Arrary

const myArrayItems = Array.from(myCollectionSet);

console.log(`ArrayItems:`, myArrayItems);
