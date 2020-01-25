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
    })
    const newCharacter2 = await chars.insert({
      name: "Hermione Granger",
      house: "Gryfendor"
    })
    const newCharacter3 = await chars.insert({
      name: "Ron Weasley",
      house: "Gryfendor"
    })

    const character = await db("characters");
    expect(character).toHaveLength(3);
  });
});

describe("it should delete a character", () => {
  it("deletes a character", async () => {
    await db("characters").truncate()
    const delchar = await chars.remove(1)
        expect(delchar).toHaveLength(2)

  })
})
//     
