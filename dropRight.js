function dropRight(array, n = 1) {
  let end = n > array.length ? 0 : array.length - n;
  return array.slice(0, end);
}

export default dropRight;
