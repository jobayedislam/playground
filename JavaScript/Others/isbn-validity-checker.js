import { test } from "node:test";
import assert from "node:assert";

const input = "978-0-553-59371-6"; // 13-digit (valid)
// const input = "9780553593716"; // 13-digit (valid)
// const input = "978-0-553-59371-7"; // 13-digit (invalid)
// const input = "9780553593717"; // 13-digit (invalid)

// const input = "0-316-76948-7"; // 10-digit (valid)
// const input = "0316769487"; // 10-digit (valid)
// const input = "0-12-515430-X"; // 10-digit (invalid)
// const input = "012515430X"; // 10-digit (invalid)

const sanitizeIsbn = (isbn) => {
  const sanitized = isbn
    .split("")
    .map((n) => (n === "-" ? "" : n))
    .map((n) => (n === " " ? "" : n))
    .join("");

  return sanitized;
};

const validateTenDigit = (isbn) => {
  let total = 0;
  for (let i = 0; i < isbn.length; i++) {
    if (isbn[i].toLowerCase() === "x") total += 10;
    else total += Number(isbn[i]) * (10 - i);
  }

  if (total % 11 === 0) return true;
  else return false;
};

const validateThirteenDigit = (isbn) => {
  let total = 0;
  for (let i = 0; i < isbn.length; i++) {
    let curElement = i + 1;
    if (curElement % 2 !== 0) total += Number(isbn[i]) * 1;
    else total += Number(isbn[i]) * 3;
  }

  if (total % 10 === 0) return true;
  else return false;
};

const checkIsbn = (isbn) => {
  const sanitizedIsbn = sanitizeIsbn(isbn);

  if (sanitizedIsbn.length === 10) return validateTenDigit(sanitizedIsbn);
  else if (sanitizedIsbn.length === 13)
    return validateThirteenDigit(sanitizedIsbn);
  else return "Invalid input length.";
};

// console.log(checkIsbn(input));

test("13-digit valid (dashes)", () =>
  assert.strictEqual(checkIsbn("978-0-553-59371-6"), true));
