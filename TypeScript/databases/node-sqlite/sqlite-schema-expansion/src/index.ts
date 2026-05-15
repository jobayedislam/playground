import { DatabaseSync } from "node:sqlite";
import * as fs from "node:fs";

const dbFile = "./data.db";

if (fs.existsSync(dbFile)) {
  fs.unlinkSync(dbFile);
  console.log("Database deleted");
}

export const db = new DatabaseSync(dbFile);

db.exec(`
    CREATE TABLE users (
        id INTEGER PRIMARY KEY,
        name TEXT
    ) STRICT
`);

db.exec(`
    CREATE TABLE tasks (
        id INTEGER PRIMARY KEY,
        user_id INTEGER,
        description TEXT,
        priority REAL,
        completed_at INT,
        FOREIGN KEY(user_id) REFERENCES users(id)
    ) STRICT
`);

const insertUser = db.prepare("INSERT INTO users (name) VALUES (?)");

console.log(db);
