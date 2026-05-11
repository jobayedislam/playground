import { DatabaseSync } from "node:sqlite";
import * as fs from "node:fs";

const dbFile = "./data.db";
if (fs.existsSync(dbFile)) {
  fs.unlinkSync(dbFile);
  console.log("File deleted.");
}

const db = new DatabaseSync(dbFile);

db.exec(`
    CREATE TABLE users(
        id INTEGER PRIMARY KEY,
        name TEXT
    ) STRICT
`);

const insert = db.prepare("INSERT INTO users (name) VALUES (?)");
insert.run("John Doe");
insert.run("Jane Doe");
