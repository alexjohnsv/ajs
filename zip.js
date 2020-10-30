function zip(...array) {
  const first = array[0];

  return first.map((v, i) => array.map(a => a[i]));
}

export default zip;
