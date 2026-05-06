const mainArray = [4, 5, 2, 7.3, 7.1, 1, 9, 3, 1, 6];

const selectionSort = (arr, start = 0) => {
  if (arr.length === 0) return [];
  let smallest = start;

  for (let i = start; i < arr.length; i++) {
    if (arr[i] < arr[smallest]) {
      smallest = i;
    }
  }

  let temp = arr[start];
  arr[start] = arr[smallest];
  arr[smallest] = temp;

  let next = start + 1;
  if (next < arr.length - 1) selectionSort(arr, next);

  return arr;
};

console.log(selectionSort(mainArray));
