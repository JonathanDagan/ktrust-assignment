import { Router } from "express";

import usersRouter from "./api/users";
import userRouter from "./api/user";
import profilesRouter from "./api/profiles";
import articlesRouter from "./api/articles";

const router = Router();

router.use("/users", usersRouter);
router.use("/user", userRouter);
router.use("/profiles", profilesRouter);
router.use("/articles", articlesRouter);


export default router;