import { DatabaseSync } from "node:sqlite";
const db = new DatabaseSync(":memory:");

db.exec(`
    CREATE TABLE users(
        key INTEGER PRIMARY KEY,
        name TEXT
    ) STRICT
`);

const insert = db.prepare("INSERT INTO users (name) VALUES (?)");

insert.run("John Doe");
insert.run("Jane Doe");

const query = db.prepare("SELECT * FROM users");
console.log(query.all());
