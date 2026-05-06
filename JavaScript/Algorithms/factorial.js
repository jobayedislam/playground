const factorial = (num) => {
  if (num === 1 || num === 0) return 1;
  else if (num < 0) return null;
  else return num * factorial(num - 1);
};

console.log(factorial(5));
