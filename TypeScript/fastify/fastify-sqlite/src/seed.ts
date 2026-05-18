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

const insert = db.prepare("INSERT INTO users (email, password) VALUES (?, ?)");

interface User {
  email: string;
  password: string;
}

const usersList: User[] = [
  { email: "test1@gmail.com", password: "helloworld" },
  { email: "test2@gmail.com", password: "helloworld" },
];

db.exec("BEGIN");
usersList.forEach((item) => {
  insert.run(item.email, item.password);
});
db.exec("COMMIT");

console.log("Data insertion finished!");
