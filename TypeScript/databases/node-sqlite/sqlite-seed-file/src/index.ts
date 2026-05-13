import { db } from "./seed.js";

const query = db.prepare("SELECT * FROM users");
console.log(query.all());
