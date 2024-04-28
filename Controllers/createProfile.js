const profiles = require("../Modules/profiles");
require("dotenv").config();
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const ObjectId = require("mongodb").ObjectId;

const generateToken = (userData) => {
  const secretKey = process.env.SECRET_KEY; // Replace with your actual secret key
  const token = jwt.sign(userData, secretKey, { expiresIn: "2h" });
  return token;
};

const signup = async (req, res) => {
  // instituteName , yoe , yoj , activity , skill , district , state , language

  console.log("req.body : ", req.body);

  const firstname = req.body.firstName;
  const lastname = req.body.lastName;
  const email = req.body.emailAddress;

  const newPassword = CryptoJS.AES.encrypt(
    req.body.password,
    process.env.SECRET_KEY
  ).toString();

  const newProfiles = new profiles({
    firstName: firstname,
    lastName: lastname,
    email: email,
    passward: newPassword,
    instituteName: "",
    yoe: "",
    yoj: " ",
    activity: "",
    skill: "",
    district: "",
    state: "",
    password: "",
    language: "abc",
  });

  await newProfiles.save();
  const token = generateToken({ email });
  res
    .status(201)
    .json({ message: "Signup successful", token: token, data: newProfiles });
};

const signin = async (req, res) => {
  try {
    console.log("emain", req.body.emailAddress);
    const email = req.body.emailAddress;
    const user = await profiles.findOne({ email: email });

    if (user) {
      console.log("user11 ", user);
      const bytes = CryptoJS.AES.decrypt(user.passward, process.env.SECRET_KEY);
      const password = bytes.toString(CryptoJS.enc.Utf8);

      const password1 = password;
      const password2 = req.body.password;
      console.log("password1 : ", password1);
      console.log("password2 : ", password2);
      if (password1 !== password2) {
        res.status(500).json("passward not match");
      } else {
        const userId = user._id.valueOf();
        console.log("userId", userId);
        // console.log('userId string ' , userId.toString());
        const token = generateToken({ email });
        res
          .status(201)
          .json({
            message: "Signin successful",
            token: token,
            data: user,
            userId: userId,
          });
      }
    } else {
      res.status(400).json("user not found");
    }
  } catch (err) {
    console.log("err : ", err);
  }
};

module.exports = {
  signin,
  signup,
};
