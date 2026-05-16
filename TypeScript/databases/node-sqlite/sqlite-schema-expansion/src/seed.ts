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

interface Tasks {
  userId: number;
  description: string;
  priority: number;
  completedAt: number;
}

const taskData: Tasks[] = [
  { userId: 1, description: "Task 1", priority: 0.5, completedAt: Date.now() },
  { userId: 2, description: "Task 2", priority: 0.5, completedAt: Date.now() },
  { userId: 1, description: "Task 3", priority: 0.5, completedAt: Date.now() },
  { userId: 5, description: "Task 4", priority: 0.5, completedAt: Date.now() },
  { userId: 2, description: "Task 5", priority: 0.5, completedAt: Date.now() },
  { userId: 6, description: "Task 6", priority: 0.5, completedAt: Date.now() },
  { userId: 3, description: "Task 7", priority: 0.5, completedAt: Date.now() },
  { userId: 7, description: "Task 8", priority: 0.5, completedAt: Date.now() },
  { userId: 8, description: "Task 9", priority: 0.5, completedAt: Date.now() },
];

db.exec("BEGIN");
userData.forEach((item) => {
  insertUser.run(item.name);
});
db.exec("COMMIT");
