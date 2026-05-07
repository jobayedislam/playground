const memo = {};

const fibonacchi = (num) => {
  if (num < 0) return null;
  else if (num === 0) return 0;
  else if (num === 1 || num === 2) return 1;

  let lastId = num - 1;
  let lastOfLastId = num - 2;
  let lastNum;
  let lastOfLastNum;

  if (memo[lastId]) {
    lastNum = memo[lastId];
  } else {
    lastNum = fibonacchi(lastId);
    memo[lastId] = lastNum;
  }

  if (memo[lastOfLastId]) {
    lastOfLastNum = memo[lastOfLastId];
  } else {
    lastOfLastNum = fibonacchi(lastOfLastId);
    memo[lastOfLastId] = lastOfLastNum;
  }

  let fib = lastNum + lastOfLastNum;
  if (!memo[num]) memo[num] = fib;
  return fib;
};

console.log(fibonacchi(70));
console.log(memo);
