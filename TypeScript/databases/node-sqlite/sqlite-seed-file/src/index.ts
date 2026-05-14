import { db } from "./seed.js";

const query = db.prepare("SELECT * FROM users WHERE key = (?)");
console.log(query.all(5));
