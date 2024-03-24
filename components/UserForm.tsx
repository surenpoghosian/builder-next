import { useState } from "react";
import { UserBuilder } from "../builders/UserBuilder";
import { User } from "../models/User";

interface UserFormProps {
  onSubmit: (user: User) => void;
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit }) => {
  const [id, setId] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Build user using UserBuilder
    const user = new UserBuilder()
      .withId(id)
      .withUsername(username)
      .withEmail(email)
      .build();

    // Call onSubmit prop with the built user
    onSubmit(user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-between w-96 mt-2">
        <label>ID:</label>
        <input
          type="text"
          className="rounded p-1 text-black"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      <div className="flex justify-between w-96 mt-2">
        <label>Username:</label>
        <input
          type="text"
          className="rounded p-1 text-black"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="flex justify-between w-96 mt-2">
        <label>Email:</label>
        <input
          type="email"
          className="rounded p-1 text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex justify-center mt-8 w-96">
        <button className="bg-blue-400 p-2  rounded w-full" type="submit">Submit</button>
      </div>
    </form>
  );
};

export default UserForm;
