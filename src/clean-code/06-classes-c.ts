(() => {
  type Gender = "M" | "F";

  interface PersonProps {
    name: string;
    gender: Gender;
    birthDate: Date;
  }

  class Person {
    public name: string;
    public gender: Gender;
    public birthDate: Date;

    constructor({ name, gender, birthDate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthDate = birthDate;
    }
  }

  interface UserProps extends PersonProps {
    email: string;
    password: string;
  }

  class User extends Person {
    public lastAccess: Date;
    public email: string;
    public password: string;

    constructor({ email, password, name, gender, birthDate }: UserProps) {
      super({ name, gender, birthDate });
      this.lastAccess = new Date();
      this.email = email;
      this.password = password;
    }

    checkCredentials() {
      return true;
    }
  }

  interface UserSettingsProps extends UserProps {
    workingDirectory: string;
    lastOpenFolder: string;
  }

  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({
      workingDirectory,
      lastOpenFolder,
      email,
      password,
      name,
      gender,
      birthDate,
    }: UserSettingsProps) {
      super({ email, password, name, gender, birthDate });
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  const newPerson = new Person({
    name: "John",
    gender: "M",
    birthDate: new Date("1990-01-01"),
  });

  console.log(newPerson);

  const userSettings = new UserSettings({
    workingDirectory: "/home/user",
    lastOpenFolder: "/home/user/projects",
    email: "hola@hola.com",
    password: "123456",
    name: "John",
    gender: "M",
    birthDate: new Date("1990-01-01"),
  });

  console.log(userSettings);
  console.log(userSettings.checkCredentials());
})();
