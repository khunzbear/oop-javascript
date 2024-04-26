// OOP javascript

// create class

class User {
  // property
  #name = "name";
  #password = 123;

  // params constructor

  constructor(n, p) {
    console.log("Starting  Constructor... ");
    this.#name = n;
    this.#password = p;
  }
  //   method
  showdetail() {
    console.log(`Username ${this.#name} , Password ${this.#password}`);
  }
  //   accessor

  set Name(newName) {
    this.#name = newName;
  }
  get Name() {
    return this.#name;
  }
}

//  Create object

const user1 = new User("kunz", 123);
user1.Name = "kunzeraa";
console.log(user1.Namew);
