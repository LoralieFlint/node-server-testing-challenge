const supertest = require("sqlite3");

const server = require("../index");

const db = require("../data/db-config");
const chars = require("./character-model")


// beforeEach(async () => {
//   await db.seed.run()
// })

describe("create a user route to make a new character", () => {
  it("add new user", async () => { 
  await db("characters").truncate()
  const newCharacter = await chars.insert({
    name: "Harry Potter",
    house: "Gryfendor"
  });

  const character = await db("characters");
  expect(character).toHaveLength(1);
})
})