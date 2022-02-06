import assert from "assert";
import { describe, it } from "mocha";

import { getAll as keywordsGetAll } from "../src/database/functions/keywords.js";
import { getAll as conditionsGetAll } from "../src/database/functions/conditions.js";

describe("Testing keywordsGetAll", () => {
  it("keywordsGetAll is function", () => {
    assert(
      typeof keywordsGetAll === "function",
      "keywordsGetAll is not a function"
    );
  });
});

describe("Testing conditionsGetAll", () => {
  it("conditionsGetAll is function", () => {
    assert(
      typeof conditionsGetAll === "function",
      "conditionsGetAll is not a function"
    );
  });
});
