// Inheritate
// Static เข้าถึง property แบบไม่ผ่าน object

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

  static showType() {
    console.log("I am a user !!");
  }
}

class Teacher extends User {
  #course;
  constructor(n, p, course) {
    super(n, p);
    console.log("i am a teacher");
    this.#course = course;
    this.showdetail();
  }

  showdetail() {
    console.log("i am a " + this.#course + " teacher");
  }
}

class Student extends User {}

const user1 = new Teacher("teacher1", 123, "Coding");
