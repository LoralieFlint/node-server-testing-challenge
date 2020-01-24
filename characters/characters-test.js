const supertest = require("sqlite3");

const server = require("../index");

const db = require("../data/db-config");

beforeEach(async () => {
  await db.seed.run()
})

test("create a user route to make a new character", async () => {
  const res = await supertest(server)
    .post("/char")
    .send({ name: "Harry Potter", house: "Gryfendor" })
  expect(res.status).toBe(201)
  expect(res.type).toBe("application/json")
  expect(res.body).toEqual({ id: 1, username: "Harry Potter" })
})