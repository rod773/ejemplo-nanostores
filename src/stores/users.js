import { createStore, update, effect } from "nanostores";

const initialState = [];

export const users = createStore(() => {
  users.set(initialState);
});

const updateUsers = (data) => {
  update(users, () => data);
};

const LoadUsersFromApi = () => {
  effect(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
  });
};
