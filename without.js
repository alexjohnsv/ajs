function without(array, ...values) {
  const set = new Set(values);
  return array.filter(v => !set.has(v));
}

export default without;
