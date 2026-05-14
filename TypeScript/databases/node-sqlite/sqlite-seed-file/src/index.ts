import { db } from "./seed.js";

const searchKey = (key: number) => {
  const query = db.prepare("SELECT * FROM users WHERE key = (?)");
  const result = query.get(key);

  if (result?.length === 0) return undefined;
  else return result?.name;
};

console.log(searchKey(5));
