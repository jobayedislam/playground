import { DatabaseSync } from "node:sqlite";
const database = new DatabaseSync(":memory:");

database.exec(`
    CREATE TABLE data(
        key INTEGER PRIMARY KEY,
        value TEXT
    ) STRICT
`);

const insert = database.prepare("INSERT INTO data (key, value) VALUES (?, ?)");

console.log(insert);
