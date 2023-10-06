(() => {
  // No aplicando Clean Code

  type Gender = "M" | "F";

  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthDate: Date
    ) {}
  }

  class User extends Person {
    public lastAccess: Date;
    constructor(
      public email: string,
      public password: string,
      name: string,
      gender: Gender,
      birthDate: Date
    ) {
      super(name, gender, birthDate);
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      password: string,
      name: string,
      gender: Gender,
      birthDate: Date
    ) {
      super(email, password, name, gender, birthDate);
    }
  }

  const newPerson = new Person("John", "M", new Date("1990-01-01"));
  console.log(newPerson);

  const userSettings = new UserSettings(
    "/home/user",
    "/home/user/projects",
    "hola@hola.com",
    "123456",
    "John",
    "M",
    new Date("1990-01-01")
  );
  console.log(userSettings);
  console.log(userSettings.checkCredentials());
})();
