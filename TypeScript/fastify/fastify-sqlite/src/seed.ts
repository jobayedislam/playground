import { DatabaseSync } from "node:sqlite";
import * as fs from "node:fs";

const dbFile = "./data.db";

if (fs.existsSync(dbFile)) {
  fs.unlinkSync(dbFile);
  console.log("Database Deleted!");
}

const db = new DatabaseSync(dbFile);
console.log("Database Created!");

db.exec(`
    CREATE TABLE users (
        id INTEGER PRIMARY KEY,
        email TEXT,
        password TEXT
    ) STRICT
`);
console.log("Schema Definition Finished!");
