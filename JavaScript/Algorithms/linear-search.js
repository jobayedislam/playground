const mainArray = [10, 22, 45, 7, 11];

const linearSearch = (arr, searchTerm) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchTerm) {
      return i;
    }
  }
  return null;
};

const result = linearSearch(mainArray, 45);
console.log(result);
