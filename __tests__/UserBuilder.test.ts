import { UserBuilder } from "../builders/UserBuilder";

describe("UserBuilder", () => {
  it("should build a user with provided properties", () => {
    const user = new UserBuilder()
      .withId("123")
      .withUsername("testuser")
      .withEmail("test@example.com")
      .build();

    expect(user.getId()).toEqual("123");
    expect(user.getUsername()).toEqual("testuser");
    expect(user.getEmail()).toEqual("test@example.com");
  });
});
