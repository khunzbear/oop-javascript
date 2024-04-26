// Static เข้าถึง property แบบไม่ผ่าน object

// create class

class User {
  // property
  #name = "name";
  #password = 123;
  static database = [];

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

  static showType() {
    console.log("I am a user !!");
  }

  static addUser(newUser) {
    this.database.push(newUser);
  }
}

//  Create object

const user1 = new User("kunz", 123);
const user2 = new User("kunz2", 123);
const user3 = new User("kunz3", 123);

User.addUser(user1);
User.addUser(user2);

User.database.forEach((user) => {
  user.showdetail();
});
