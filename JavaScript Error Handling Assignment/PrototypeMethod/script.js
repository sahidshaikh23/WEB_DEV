function Student(name) {
  this.name = name;
  this.printDetails = function () {
    console.log(`Hello, the sutdent is ${this.name}`);
  };
}

const student = new Student("Kushagra");
student.printDetails();
