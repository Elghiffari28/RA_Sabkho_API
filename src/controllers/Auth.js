import { GETResponse } from "../../response.js";
import {
  serviceGetUser,
  serviceLoginUser,
  serviceRegisterUser,
} from "../services/Auth.js";

const getUsers = async (req, res) => {
  try {
    const dataUser = await serviceGetUser();
    GETResponse(200, dataUser, "Get all data user", res);
  } catch (error) {
    res.json(error);
  }
};
const registerUser = async (req, res) => {
  try {
    const userBody = req.body;
    // console.log(userBody);
    // if (userBody.password !== userBody.confirm_password) {
    //   res.json({ msg: "pw tidak sesuai" });
    // }
    // const salt = await bcrypt.genSalt();
    // const hashPassword = await bcrypt.hash(userBody.password, salt);
    // // console.log(hashPassword);
    const results = await serviceRegisterUser(userBody);
    // console.log(userBody);
    res.json({ msg: "Register Berhasil", userId: results.insertId });
  } catch (error) {
    console.log(error);
    res.json({ msg: error.message });
  }
};
const loginUser = async (req, res) => {
  try {
    const userBody = req.body;
    console.log(userBody);
    const results = await serviceLoginUser(userBody);
    // Atur cookie untuk refresh token
    res.cookie("refreshToken", results.refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 1 hari
    });

    // Kirim hasil (accessToken) dalam response
    res.status(200).json({ accessToken: results.accessToken });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export { getUsers, registerUser, loginUser };
