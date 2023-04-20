/**
 * Explre Clases
 */
console.log(`Welcome to Classes`);

//Class Declarations

class MyClass {
  //Class Body
  constructor() {
    console.log(`Constructing MyClass`);
  }
  myField = `Foo`;

  getField() {
    return this.myField;
  }
  //Static Field and Method
  static myStaticField = `Boo`;
  static getMyStaticField() {
    return this.myStaticField;
  }
  //Private Filed
  #myPrivateFiled = "PrivateFiled";
  getMyPrivateFiled() {
    console.log(this.myPrivateFiled);
    return this.myPrivateFiled;
  }
}

const myclass = new MyClass();

console.log(myclass.myField);
console.log(myclass.getField());

console.log(MyClass.myStaticField);
console.log(MyClass.getMyStaticField());
