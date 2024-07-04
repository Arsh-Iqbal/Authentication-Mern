import { errorHandler } from "./error.js";
import jwt from "jsonwebtoken";

export const isAuthenticatedUser = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(errorHandler(401, "please log in to access this resource"));
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(errorHandler(403, "Token is not valid!"));

    req.user = user;

    next();
  });
};
