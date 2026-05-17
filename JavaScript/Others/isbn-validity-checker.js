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
    .join("");

  return sanitized;
};

console.log(sanitizeIsbn(input));
