import { getDb } from "../database.js";

/**
 * Returns all data from collection conditions in MongoDB.
 *
 * @returns {{_id:MongoId, condition: string}|null} - conditions
 * null if not found
 * @memberof conditions
 */
async function getAll() {
  const db = await getDb();
  const rows = await db
    .collection("conditions")
    .find(
      {},
      {
        sort: {
          timestamp: 1,
        },
      }
    )
    .toArray();
  return rows;
}

/**
 * Returns inserted condition or null.
 *
 * @param {string} condition - condition which will be saved in DB
 * @param {string} timestamp - timestamp which will be saved in DB
 * @returns {{_id: MongoId, condition: string}|null} inserted record;
 *    null if not found
 * @memberof conditions
 */
async function insertOne(condition, timestamp) {
  const db = await getDb();
  if (
    typeof condition !== "string" ||
    (condition.trim() === "" && typeof timestamp !== "string") ||
    timestamp.trim() === ""
  ) {
    return null;
  }
  const newRecord = {
    condition,
    timestamp,
  };
  await db.collection("conditions").insertOne(newRecord);
  return newRecord;
}

export { getAll, insertOne };
