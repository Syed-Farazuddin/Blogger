import mongoose from "mongoose";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import json from "jsonwebtoken";
import { uploadPicture } from "../middleware/UploadPicture.js";
import { fileRemover } from "../utils/fileRemover.js";

const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!password) {
      throw new Error("Password is required");
    }
    if (!email) {
      throw new Error("Email is required");
    }
    if (!name) {
      throw new Error("Username is required");
    }
    // Check whether the user exists or not
    let user = await User.findOne({ email });
    if (user) {
      throw new Error("User already exists");
    }
    const hashPass = await bcrypt.hash(password, 10);
    user = await User.create({ name, password: hashPass, email });
    return res.status(201).json({
      _id: user._id,
      name: user.name,
      avatar: user.avatar,
      email: user.email,
      verified: user.verified,
      admin: user.admin,
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      throw new Error("Email is required");
    }
    if (!password) {
      throw new Error("Password is required");
    }
    let user = await User.findOne({
      email,
    });
    if (!user) {
      throw new Error("Email not found");
    }
    const token = await json.sign({ id: user._id }, process.env.JSON_SECRET, {
      expiresIn: "30d",
    });
    if (await bcrypt.compare(password, user.password)) {
      return res.status(201).json({
        _id: user._id,
        name: user.name,
        avatar: user.avatar,
        email: user.email,
        token: token,
        verified: user.verified,
        admin: user.admin,
      });
    } else {
      throw new Error("Invalid email or password");
    }
  } catch (e) {
    next(e);
  }
};

const userProfile = async (req, res, next) => {
  try {
    let user = await User.findById(req.user._id);
    if (user) {
      return res.status(201).json({
        _id: user._id,
        name: user.name,
        avatar: user.avatar,
        email: user.email,
        verified: user.verified,
        admin: user.admin,
      });
    } else {
      let error = new Error("User not found");
      error.statusCode = 404;
      next(error);
    }
  } catch (err) {
    next(err);
  }
};

const updateProfile = async (req, res, next) => {
  try {
    let user = await User.findById(req.user._id);
    if (!user) {
      throw new Error("User not found`");
    }
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password && req.body.password.length < 6) {
      throw new Error("Password length be at least 6 characters");
    } else if (req.body.password) {
      const password = req.body.password;
      const hashPass = await bcrypt.hash(password, 10);
      user.password = hashPass;
    }
    const updatedUserProfile = await user.save();
    const token = await json.sign({ id: user._id }, process.env.JSON_SECRET, {
      expiresIn: "30d",
    });
    return res.status(201).json({
      _id: updatedUserProfile._id,
      name: updatedUserProfile.name,
      avatar: updatedUserProfile.avatar,
      email: updatedUserProfile.email,
      password: updatedUserProfile.password,
      token: token,
      verified: updatedUserProfile.verified,
      admin: updatedUserProfile.admin,
    });
  } catch (e) {
    next(e);
  }
};

const updateProfilePicture = async (req, res, next) => {
  try {
    const upload = uploadPicture.single("profilePicture");

    upload(req, res, async function (err) {
      if (err) {
        const error = new Error(
          "An unknown error occured when uploading " + err.message
        );
        next(error);
      } else {
        // every thing went well
        if (req.file) {
          let filename;
          let updatedUser = await User.findById(req.user._id);
          filename = updatedUser.avatar;
          if (filename) {
            fileRemover(filename);
          }
          updatedUser.avatar = req.file.filename;
          await updatedUser.save();
          res.json({
            _id: updatedUser._id,
            avatar: updatedUser.avatar,
            name: updatedUser.name,
            email: updatedUser.email,
            verified: updatedUser.verified,
            admin: updatedUser.admin,
            token: await updatedUser.generateJWT(),
          });
        } else {
          let filename;
          let updatedUser = await User.findById(req.user._id);
          filename = updatedUser.avatar;
          updatedUser.avatar = "";
          await updatedUser.save();
          fileRemover(filename);
          res.json({
            _id: updatedUser._id,
            avatar: updatedUser.avatar,
            name: updatedUser.name,
            email: updatedUser.email,
            verified: updatedUser.verified,
            admin: updatedUser.admin,
          });
        }
      }
    });
  } catch (error) {
    next(error);
  }
};

export {
  updateProfilePicture,
  registerUser,
  loginUser,
  userProfile,
  updateProfile,
};
