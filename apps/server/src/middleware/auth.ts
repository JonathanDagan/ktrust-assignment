import { ENV } from "../config/env";

import { expressjwt } from "express-jwt";
import { Request, Response, NextFunction } from "express";
import { SigningAlgorithm } from "../utils/consts";

export const jwtCheck = expressjwt({
  secret: ENV.JWT_SECRET,
  algorithms: [SigningAlgorithm],
});

export const authorize = (roles: string[]) => {
  // Todo: fix any, should be Request
  return (req: any, res: Response, next: NextFunction) => {
    if (roles.includes(req.user.role)) {
      next();
    } else {
      return res.status(403).json({ message: "Unauthorized" });
    }
  };
};
