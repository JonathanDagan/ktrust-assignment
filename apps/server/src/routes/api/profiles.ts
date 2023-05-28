import { Router } from "express";
import * as profile from "../../controllers/profileController";
import * as auth from "../../middleware/auth/authenticator";

const router = Router();

router.get("/:username", auth.optionalAuthenticate, profile.getProfile);


export default router;
