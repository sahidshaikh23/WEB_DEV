class Employee {
  name = "Kushagra";
  position = "Manager";
  salary = 1000000;

  getSalary() {
    return this.salary;
  }
}

const employee1 = new Employee();
console.log(employee1.getSalary());
