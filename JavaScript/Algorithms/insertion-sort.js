const mainArray = [4, 2, 7.3, 7.1, 1, 9, 3, 1, 6];

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && key < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }
  return arr;
};

console.log(insertionSort(mainArray));
