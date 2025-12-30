import sqlite from "node:sqlite";

const createDB = () => {return new sqlite.DatabaseSync('./database/database.sqlite')}

export default createDB;