'use client'
import { useState } from "react";
import UserForm from "../components/UserForm";
import { User } from "../models/User";

const CreateUser: React.FC = () => {
  const [submittedUser, setSubmittedUser] = useState<User | null>(null);

  const handleSubmit = (user: User) => {
    // Handle the submitted user, e.g., send it to backend, etc.
    setSubmittedUser(user);
  };

  return (
    <div>
      <h1>User Form</h1>
      <UserForm onSubmit={handleSubmit} />
      {submittedUser && (
        <div className="flex flex-col mt-10">
          <h2 className="">Submitted User Details:</h2>
          <p className="mt-4">ID: {submittedUser.getId()}</p>
          <p className="mt-2">Username: {submittedUser.getUsername()}</p>
          <p className="mt-2">Email: {submittedUser.getEmail()}</p>
        </div>
      )}
    </div>
  );
};

export default CreateUser;
