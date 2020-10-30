function difference(array, values) {
  const set = new Set(values);
  const difference = array.filter(x => !set.has(x));
  return [...difference];
}

export default difference;
