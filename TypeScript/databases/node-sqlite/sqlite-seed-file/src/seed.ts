import { DatabaseSync } from "node:sqlite";
import * as fs from "node:fs";

const dbFile = "./data.db";

if (fs.existsSync(dbFile)) {
  fs.unlinkSync(dbFile);
  console.log("Database Deleted!");
}

export const db = new DatabaseSync(dbFile);

db.exec(`
    CREATE TABLE users(
        key INTEGER PRIMARY KEY,
        name TEXT
    ) STRICT
`);

const insert = db.prepare("INSERT INTO users (name) VALUES (?)");

interface Users {
  name: string;
}

const data: Users[] = [
  { name: "John Doe" },
  { name: "Jahn Doe" },
  { name: "Alice Hamilton" },
  { name: "Bob O'Reilly" },
  { name: "Charlie 123" },
  { name: "Διονύσιος" },
  { name: "রহিম" },
  { name: "" },
];

data.forEach((item) => {
  insert.run(item.name);
});
