import express from "express";
import { getAll, insertOne } from "./database/functions/keywords.js";

export const router = express.Router();

/**
 * GET router
 * Gets all record from MongoDB or returns 500 error
 */
router.get("/", async (req, res) => {
  res.set("Content-Type", "application/json; charset=utf8");
  try {
    const records = await getAll();
    res.send(records);
  } catch (err) {
    res.status(500).end(`Error occurred: ${err.message}`);
  }
});

/**
 * GET router
 * Insert one record to MongoDB or return 500 error
 * @param {string} keyword - keyword which will be saved in DB
 */
router.get("/save/:keyword", async (req, res) => {
  res.set("Content-Type", "application/json; charset=utf8");
  if (req.params["keyword"] && req.params["keyword"].trim() !== "") {
    try {
      if (typeof req.params["keyword"] === "string") {
        const record = await insertOne(req.params["keyword"]);
        res.send(record);
      }
    } catch (err) {
      res.status(500).end(`Error occurred: ${err.message}`);
    }
  } else {
    res.redirect("/");
  }
});
