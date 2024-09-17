import { USER_DATA } from "../models/UserData.js";

const QueryListOfUsers = () => {
  return USER_DATA;
};

const QueryUserById = (id) => {
  let users;
  USER_DATA.forEach((userData) => {
    if (userData == id) {
      users = userData;
    }
  });
  return users;
};

export { QueryListOfUsers, QueryUserById };
