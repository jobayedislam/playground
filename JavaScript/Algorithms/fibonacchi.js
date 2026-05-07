const fibonacchi = (num) => {
  if (num < 0) return null;
  else if (num === 0) return 0;
  else if (num === 1 || num === 2) return 1;
  else return fibonacchi(num - 1) + fibonacchi(num - 2);
};

console.log(fibonacchi(10));
