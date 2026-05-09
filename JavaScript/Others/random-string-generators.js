import { randomUUID } from "node:crypto";
console.log("crypto: " + randomUUID());

const randStr = Math.random().toString(32).substring(2);
console.log("math.random: " + randStr);
