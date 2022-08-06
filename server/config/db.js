require("dotenv-safe").config({ allowEmptyValues: false });

module.exports = {
  client: "mysql2",
  version: process.env.MYSQL_VERSION || "8",
  connection: {
    host: "bamba.cs.colman.ac.il",
    user: "cs115",
    password: "Move@115",
    database: "MusiMatch",
    port: process.env.MYSQL_PORT || 3306,
  },
  migrations: {
    extension: "ts",
    directory: "./migrations",
  },
  debug: process.env.LOG_LEVEL === "debug",
};
