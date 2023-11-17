function getPerson({ name: x, age: y }) {
  this.name = x;
  this.age = y;

  try {
    if (typeof x == "string" && typeof y == "number") {
      return `Name: ${this.name}, Age: ${this.age}`;
    } else {
      throw "Invalid parameter type";
    }
  } catch (err) {
    return err;
  }
}

console.log(getPerson({ name: "Kaku", age: 22 }));
