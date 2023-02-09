/**
 * Object Properties Assignments
 * Applicable only if Variable references to Object only
 */
console.log(`Object Properties Assignments`);

let myObjAssignments = {};

myObjAssignments.x = `Pradeep`;
console.log(myObjAssignments);

const oneKey = `KEY`;

myObjAssignments[oneKey] = `SecretValue`;

console.log(myObjAssignments);

// . (dot) Access Notation
console.log(myObjAssignments.KEY);

//[] (Brackets) Access Notation
console.log(myObjAssignments[oneKey]);
