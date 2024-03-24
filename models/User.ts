export class User {
    private id: string;
    private username: string;
    private email: string;
  
    constructor(id: string, username: string, email: string) {
      this.id = id;
      this.username = username;
      this.email = email;
    }
  
    getId(): string {
      return this.id;
    }
  
    getUsername(): string {
      return this.username;
    }
  
    getEmail(): string {
      return this.email;
    }
  }
  