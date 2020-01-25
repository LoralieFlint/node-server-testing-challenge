module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./characters.sqlite3"
    }
  },
  useNullAsDefault: true,
  migrations: {
    directory: "./migrations"
  }
};
