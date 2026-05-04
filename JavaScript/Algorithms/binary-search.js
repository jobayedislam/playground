const mainArray = [2, 5, 8, 12, 16, 23, 38];

const getCenter = (n) => {
  if (n % 2 === 0) return n / 2;
  else return (n + 1) / 2;
};

const splitArray = (array, start, end) => {
  let newArray = [];
  for (i = start; i < end; i++) newArray.push(array[i]);
  return newArray;
};

const binarySearch = (arr, searchTerm) => {
  let middleIndex = getCenter(arr.length - 1);
  let middleValue = arr[middleIndex];

  if (middleValue === searchTerm) {
    return "found";
  } else if (searchTerm > middleValue) {
    let newArray = splitArray(arr, middleIndex + 1, arr.length);
    return binarySearch(newArray, searchTerm);
  } else if (searchTerm < middleValue) {
    let newArray = splitArray(arr, 0, middleIndex);
    return binarySearch(newArray, searchTerm);
  }

  return "not found";
};

const result = binarySearch(mainArray, 38);
console.log(result);
