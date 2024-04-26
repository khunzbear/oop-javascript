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
    this.showdetail();
  }
  //   method
  showdetail() {
    console.log(`Username ${this.name} , Password ${this.password}`);
  }
}

//  Create object

const user1 = new User();

user1.showdetail();

const user2 = new User();

user2.name = "kunz";

const user3 = new User("kunz", 1616);
