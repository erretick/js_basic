function arrayClean(arr, fn) {
  const arrResult = [];
  for (let element of arr) {
    if (fn(element)) continue;
    arrResult.push(element);
  }
  return arrResult;
}

console.log(arrayClean([4, 5, 2, -4, 10, 1, 0, 6], (i) => i >= 4));
