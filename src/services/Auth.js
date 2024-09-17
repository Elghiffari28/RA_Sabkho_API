import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  DATA_USER,
  REGISTER_USER,
  LOGIN_USER,
  REFRESH_TOKEN,
} from "../models/Auth.js";

const serviceGetUser = async () => {
  try {
    const results = await DATA_USER();
    return results;
  } catch (error) {
    throw error;
  }
};

const serviceRegisterUser = async (userBody) => {
  if (userBody.password !== userBody.confirm_password) {
    throw new Error("pw tak sesuai");
  }
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(userBody.password, salt);
  try {
    const results = await REGISTER_USER(userBody, hashPassword);
    return results;
  } catch (error) {
    throw error;
  }
};

const serviceLoginUser = async (userBody) => {
  try {
    const results = await LOGIN_USER(userBody);
    const match = await bcrypt.compare(userBody.password, results[0].password);
    if (!match) return res.status(400).json({ msg: "Password Salah" });
    const userId = results[0].id;
    const name = results[0].nama;
    const email = results[0].email;
    const password = results[0].password;
    const accessToken = jwt.sign(
      { userId, name, email },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "30s",
      }
    );
    const refreshToken = jwt.sign(
      { userId, name, email },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );

    await REFRESH_TOKEN(userId, refreshToken);

    return { accessToken, refreshToken };

    // try {
    //   await REFRESH_TOKEN(userId, refreshToken);
    // } catch (error) {
    //   console.log(error);
    // }
    // res.cookie("refreshToken", refreshToken, {
    //   httpOnly: true,
    //   maxAge: 24 * 60 * 60 * 1000,
    // });
    // res.json({ accessToken });
  } catch (error) {
    throw error;
  }
};

export { serviceGetUser, serviceRegisterUser, serviceLoginUser };
