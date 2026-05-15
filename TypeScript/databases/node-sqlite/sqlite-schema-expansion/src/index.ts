import { DatabaseSync } from "node:sqlite";
import * as fs from "node:fs";

const dbFile = "./data.db";

if (fs.existsSync(dbFile)) {
  fs.unlinkSync(dbFile);
  console.log("Database deleted");
}

export const db = new DatabaseSync(dbFile);

console.log(db);
