const mainArr = [4, 2, 7.3, 7.1, 1, 9, 3, 1, 6];

const bubbleSort = (arr) => {
  let newArr = arr;
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr.length - i; j++) {
      if (newArr[j] > newArr[j + 1]) {
        let temp = newArr[j];
        newArr[j] = newArr[j + 1];
        newArr[j + 1] = temp;
      }
    }
  }

  return newArr;
};

const result = bubbleSort(mainArr);
console.log(result);
