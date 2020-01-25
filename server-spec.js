const request = require("supertest");
const server = require("./server.js");

const db = require("./data/db-config");
const chars = require("./characters/character-model");

describe("index route", () => {
  it("verify testing", async () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
});

describe("create a user route to make a new character", () => {
  it("add new user", async () => {
    await db("characters").truncate();
    const newCharacter = await chars.insert({
      name: "Harry Potter",
      house: "Gryfendor"
    });

    const character = await db("characters");
    expect(character).toHaveLength(1);
  });
});
