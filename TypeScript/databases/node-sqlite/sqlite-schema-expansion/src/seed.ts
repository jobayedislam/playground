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
const insertTask = db.prepare(
  "INSERT INTO tasks (user_id, description, priority, completed_at) VALUES (?, ?, ?, ?)",
);

interface Users {
  name: string;
}

const userData: Users[] = [
  { name: "John Doe" },
  { name: "Jahn Doe" },
  { name: "Alice Hamilton" },
  { name: "Bob O'Reilly" },
  { name: "Charlie 123" },
  { name: "Διονύσιος" },
  { name: "রহিম" },
  { name: "" },
];

db.exec("BEGIN");
userData.forEach((item) => {
  insertUser.run(item.name);
});
db.exec("COMMIT");
