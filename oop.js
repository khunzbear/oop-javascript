// OOP javascript

// create class

class User {
  // property
  name = "name";
  password = 123;

  // params constructor

  constructor(n, p) {
    console.log("Starting  Constructor... ");
    this.name = n;
    this.password = p;
  }
}

//  Create object

const user1 = new User();

console.log(user1.name);
console.log(user1.password);

const user2 = new User();

user2.name = "kunz";
console.log(user2.name);
console.log(user2.password);

const user3 = new User("kunz", 1616);

console.log(user3.name);
console.log(user3.password);
