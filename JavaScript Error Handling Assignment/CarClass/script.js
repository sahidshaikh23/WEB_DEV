class Car {
  company = "Maruti";
  model = "Aulto";
  year = 2018;

  getDescription() {
    return `This is a ${this.year} ${this.company} ${this.model}`;
  }
}

const myCar = new Car();

console.log(myCar.getDescription());
