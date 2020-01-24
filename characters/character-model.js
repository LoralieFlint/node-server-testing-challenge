const db = require("../data/db-config");

function insert(char) {
  return db("characters")
    .insert(char)
    .then(saved => {
      return { id: ids[0] };
    });
}

function remove() {
  return db("characters")
    .where({ id })
    .del();
}

module.exports = {
  insert,
  remove
};
