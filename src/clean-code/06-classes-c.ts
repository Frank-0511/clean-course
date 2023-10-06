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

  interface UserProps {
    email: string;
    password: string;
  }

  class User {
    public email: string;
    public lastAccess: Date;
    public password: string;

    constructor({ email, password }: UserProps) {
      this.lastAccess = new Date();
      this.email = email;
      this.password = password;
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProps {
    workingDirectory: string;
    lastOpenFolder: string;
  }

  class Settings {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  interface UserSettingsProps extends UserProps, PersonProps, SettingsProps {}

  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
      name,
      gender,
      birthDate,
      email,
      password,
      workingDirectory,
      lastOpenFolder,
    }: UserSettingsProps) {
      this.person = new Person({ name, gender, birthDate });
      this.user = new User({ email, password });
      this.settings = new Settings({ workingDirectory, lastOpenFolder });
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
  console.log(userSettings.user.checkCredentials());
})();
