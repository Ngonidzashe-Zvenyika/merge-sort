function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  } else {
    const mid = Math.round(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    let i = 0;
    let j = 0;
    let mergeArray = [];

    while (i < left.length && j < right.length) {
      left[i] < right[j]
        ? mergeArray.push(left[i++])
        : mergeArray.push(right[j++]);
    }

    i < left.length
      ? (mergeArray = mergeArray.concat(left.slice(i, left.length)))
      : (mergeArray = mergeArray.concat(right.slice(j, right.length)));

    return mergeArray;
  }
}