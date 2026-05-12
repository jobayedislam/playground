import { DatabaseSync } from "node:sqlite";
const db = new DatabaseSync(":memory:");

db.exec(`
    CREATE TABLE users(
        key INTEGER PRIMARY KEY,
        name TEXT
    ) STRICT
`);
