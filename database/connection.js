import sqlite from "node:sqlite";

const db = new sqlite.DatabaseSync('./database/database.sqlite')

export default db;