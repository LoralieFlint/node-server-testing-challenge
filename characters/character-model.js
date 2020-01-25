const db = require("../data/db-config");

function find() {
  return db("characters").select("id", "name", "house");
}

function insert(char) {
  return db("characters")
    .insert(char)
    .then(saved => {
      return saved;
    });
}

function remove(id) {
  return db("characters")
    .where({ id })
    .del();
}

module.exports = {
  find,
  insert,
  remove
};
