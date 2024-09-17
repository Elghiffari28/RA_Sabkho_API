import { QueryListOfUsers, QueryUserById } from "../services/User.js";

const GetAllUser = (req, res) => {
  res.send("kudanil");
};

const GetUser = (req, res) => {
  console.log(QueryUserById);
};

export { GetAllUser, GetUser };
