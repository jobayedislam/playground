const mainArray = [2, 5, 8, 12, 16, 23, 38, 48];
//                 0, 1, 2,  3,  4,  5,  6,  7

const binarySearch = (arr, searchTerm, start = 0, end = arr.length - 1) => {
  const total = start + end;
  let middleIndex;
  if (total < 0 || start > arr.length - 1) return null;
  else if (total % 2 === 0) middleIndex = total / 2;
  else middleIndex = (total - 1) / 2;
  const middleValue = arr[middleIndex];

  if (searchTerm === middleValue) return middleIndex;
  else if (start === end && searchTerm !== middleValue) return null;
  else if (searchTerm > middleValue)
    return binarySearch(arr, searchTerm, middleIndex + 1, end);
  else if (searchTerm < middleValue)
    return binarySearch(arr, searchTerm, start, middleIndex - 1);

  return null;
};

console.log(binarySearch(mainArray, 16));
