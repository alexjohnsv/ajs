function union(...arrays) {
  const set = new Set(arrays.flat());
  return [...set];
}

export default union;
