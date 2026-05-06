const mainArray = ["A", "B", "C", "D", "E", 5, 8, "ASCII"];

const reverseArray = (arr, start = 0, end = arr.length - 1) => {
  let temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;

  if (start !== end && start + 1 !== end) {
    reverseArray(arr, start + 1, end - 1);
  }

  return arr;
};

console.log(reverseArray(mainArray));
