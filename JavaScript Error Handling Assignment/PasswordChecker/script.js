class User {
  #username;
  #password;

  constructor(x, y) {
    this.#username = x;
    this.#password = y;
  }

  setPassword(p) {
    let check1 = /^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;

    if (p.length < 8) {
      console.log(
        "Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter"
      );
    } else {
      if (check1.test(p)) {
        this.#password = p;
      } else {
        this.#password = p;
        console.log(
          "Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter"
        );
      }
    }
  }

  getPassword() {
    let check1 = /^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;
    if (check1.test(this.#password)) {
      let pass = this.#password.toString();
      let hidden = "";
      for (let i = 0; i < pass.length; i++) {
        hidden += "*";
      }
      return hidden;
    }
  }
}

const user = new User("Kushagra", "Passsworkd34");
user.setPassword("sdk4akakedxedxededdeaka");

console.log(user.getPassword());
