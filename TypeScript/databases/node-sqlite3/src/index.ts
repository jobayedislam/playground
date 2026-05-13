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

// NOTE: The case for using uppercase for SQL query keywords
// 1. SQL style guide recommends it.
// 2. It offers readability without highlight.
// 3. It provides a distinction between keywords and constants
// 4. During 1970s, when SQL was born, many keyboards apparently did not support
//    lowercase letters. (That's news to me). So, languages like COBOL and
//    FORTRAN also use uppercase by default.
const query = db.prepare("select * from users");
console.log(query.all());
