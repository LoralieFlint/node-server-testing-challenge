module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './characters.sqlite3'
    }
  },
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './test.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './migrations',
    }
  },
};
