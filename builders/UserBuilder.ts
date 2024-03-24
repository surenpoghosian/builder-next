import { User } from "../models/User";

export class UserBuilder {
  private id: string;
  private username: string;
  private email: string;

  constructor() {
    this.id = "";
    this.username = "";
    this.email = "";
  }

  withId(id: string): UserBuilder {
    this.id = id;
    return this;
  }

  withUsername(username: string): UserBuilder {
    this.username = username;
    return this;
  }

  withEmail(email: string): UserBuilder {
    this.email = email;
    return this;
  }

  build(): User {
    return new User(this.id, this.username, this.email);
  }
}
