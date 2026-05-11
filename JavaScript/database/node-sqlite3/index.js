import { DatabaseSync } from "node:sqlite";
const database = new DatabaseSync(":memory:");

console.log("hello");
