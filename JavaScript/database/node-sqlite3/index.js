import { DatabaseSync } from "node:sqlite";
const database = new DatabaseSync(":memory:");

database.exec(`
    CREATE TABLE data(
        key INTEGER PRIMARY KEY,
        value TEXT
    ) STRICT
`);

console.log(database);
