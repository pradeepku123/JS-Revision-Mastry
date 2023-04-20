/**
 * Explore Object Creation & Diffrent Methods
 */

console.log(`Welcome to Object`);

//Creare Object using Object.create() method

// Structure of Object

const animal = {
  type: "NewAnimal-001",
  displayType() {
    return this.type;
  },
};

const find_animal = Object.create(animal);

console.log(find_animal.displayType());

find_animal.type = "Changed Animal";
console.log(find_animal.displayType());

console.log(animal.displayType());

const myCarProperty = {
  name: "Toyota",
  place: "BAM",
  size: "23",
};
//Delting Object Properties {size}
delete myCarProperty.size;

Object.keys(myCarProperty).forEach((i) => {
  console.log(myCarProperty[i]);
});

console.log(Object.entries(myCarProperty));
