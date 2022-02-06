import assert from "assert";
import { describe, it } from "mocha";

import { insertOne as keywordsInsertOne } from "../src/database/functions/keywords.js";
import { insertOne as conditionsInsertOne } from "../src/database/functions/conditions.js";

describe("Testing keywordsInsertOne", () => {
  it("keywordsInsertOne is function", () => {
    assert(
      typeof keywordsInsertOne === "function",
      "keywordsInsertOne is not a function"
    );
  });
  it("keywordsInsertOne returns type object result", async () => {
    let res = keywordsInsertOne("1");
    assert(
      typeof (await res) === "object",
      `keywordsInsertOne returned wrong result: ${res} (it should be { keyword})`
    );
  });
  it("keywordsInsertOne works with numbers", async () => {
    let res = keywordsInsertOne(1);
    assert(
      (await res) === null,
      `keywordsInsertOne returned wrong result: ${res} (it should be null)`
    );
  });
  it("keywordsInsertOne without parameters", async () => {
    let res = keywordsInsertOne();
    assert(
      (await res) === null,
      `keywordsInsertOne return wrong result: ${res}`
    );
  });
});

describe("Testing conditionsInsertOne", () => {
  it("conditionsInsertOne is function", () => {
    assert(
      typeof conditionsInsertOne === "function",
      "conditionsInsertOne is not a function"
    );
  });
  it("conditionsInsertOne returns type object result", async () => {
    let res = conditionsInsertOne("1", "2");
    assert(
      typeof (await res) === "object",
      `conditionsInsertOne returned wrong result: ${res} (it should be { keyword})`
    );
  });
  it("conditionsInsertOne works with numbers", async () => {
    let res = conditionsInsertOne(1, 2);
    assert(
      (await res) === null,
      `conditionsInsertOne returned wrong result: ${res} (it should be null)`
    );
  });
  it("conditionsInsertOne without parameters", async () => {
    let res = conditionsInsertOne();
    assert(
      (await res) === null,
      `conditionsInsertOne return wrong result: ${res}`
    );
  });
});
