import json from "jsonwebtoken";
import User from "../models/User.js";

export const authGuard = async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  )
    try {
      const token = req.headers.authorization.split(" ")[1];
      const { id } = json.verify(token, process.env.JSON_SECRET);
      req.user = await User.findById(id).select("-password");
      next();
    } catch (error) {
      const err = new Error("Not authorized,Token failed");
      err.statusCode = 401;
      next(error);
    }
  else {
    let error = new Error("Not authorized, No token");
    error.statusCode = 401;
    next(error);
  }
};
