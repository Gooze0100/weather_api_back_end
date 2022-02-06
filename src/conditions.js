import express from "express";
import { getAll, insertOne } from "./database/functions/conditions.js";

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
 * @param {string} condition - condition which will be saved in DB
 * @param {string} timestamp - timestamp which will be saved in DB
 */
router.get("/save/:condition/:timestamp", async (req, res) => {
  res.set("Content-Type", "application/json; charset=utf8");
  if (
    req.params["condition"] &&
    req.params["timestamp"] &&
    req.params["condition"].trim() !== "" &&
    req.params["timestamp"].trim() !== ""
  ) {
    try {
      if (
        typeof req.params["condition"] === "string" &&
        typeof req.params["timestamp"] === "string"
      ) {
        const record = await insertOne(
          req.params["condition"],
          req.params["timestamp"]
        );
        res.send(record);
      }
    } catch (err) {
      res.status(500).end(`Error occurred: ${err.message}`);
    }
  } else {
    res.redirect("/");
  }
});
