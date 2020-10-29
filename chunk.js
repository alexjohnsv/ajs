function chunk(array, size = 1) {
  if (size < 1) {
    return [...array];
  }

  if (array.length < 1) {
    return [];
  }

  const r = [];

  let arr = [...array];

  while (arr.length > 0) {
    let items = arr.splice(0, size);
    r.push(items);
  }

  return r;

}

export default chunk;
