import { DatabaseSync } from "node:sqlite";
import * as fs from "node:fs";

const dbFile = "./data.db";

if (fs.existsSync(dbFile)) {
  fs.unlinkSync(dbFile);
  console.log("Database Deleted!");
}

const db = new DatabaseSync(dbFile);
