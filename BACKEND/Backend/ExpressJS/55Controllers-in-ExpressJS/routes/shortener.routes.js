import { Router } from "express";
import {
  getShortenerPage,
  postURLShortener,
  redirectToShortLink,
} from "../controllers/postshortener.controller.js";

const router = Router();

// Create Server in Express
router.get("/", getShortenerPage);

router.post("/", postURLShortener);

router.get("/:shortCode", redirectToShortLink);

export const shortenerRoutes = router;
