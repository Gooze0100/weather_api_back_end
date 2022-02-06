import { MongoClient } from "mongodb";

const URL = "mongodb://localhost/27017";
const DB_NAME = "weathers";
const MAX_TRIES = 3;

let conn;

/**
 * <i><b>Connects to configured database</b></i>
 * @param {number} [tryCounter = 1] - number of tries before giving-up.
 * @throws {Error} when failed to connect specified number of times.
 */
async function connect(tryCounter) {
  if (!tryCounter) {
    tryCounter = 1;
  }
  if (tryCounter > MAX_TRIES) {
    throw new Error(`Failed to connect ${MAX_TRIES} times to db`);
  }
  conn = new MongoClient(URL, {
    minPoolSize: 0,
    maxPoolSize: 3,
  });
  try {
    await conn.connect();
  } catch (err) {
    conn = null;
    connect(++tryCounter);
  }
}

/**
Test specified connection by issuing db.stats().
@returns {boolean} true if connection is alive/false if connection is dead.
*/
/**
 * Test specified connection by issuing db.stats().
 *
 * @param {object} db  - connection to test
 * @returns {boolean} true if connection is alive
 */
async function testConnection(db) {
  try {
    await db.stats();
    return true;
  } catch (err) {
    return false;
  }
}

/**
Returns db for configured data base name from connection.
Automatically connects if there is no connection.
Makes sure that connection is alive before returning it.
*/
/**
 * Returns db for configured data base name from connection.
 * Automatically connects if there is no connection.
 *
 * @returns {object} connected and tested db object.
 * @throws {Error} when fails to connect.
 */
async function getDb() {
  if (!conn) {
    await connect();
  }
  const db = conn.db(DB_NAME);
  if (testConnection(db)) {
    return db;
  }
  conn = null;
  return getDb();
}

/**
Closes connection to database.
*/
async function close() {
  try {
    await conn.close();
  } catch (err) {
    throw new Error(err);
  } finally {
    conn = null;
  }
}

export { close, getDb };
