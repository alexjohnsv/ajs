function zip(...array) {
  const first = array[0];

  const result = [];

  for (let i = 0; i < first.length; i++) {
    result[i] = array.map(a => a[i]);
  }

  return result;
}

export default zip;
