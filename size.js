function size(collection) {
  if (Object.prototype.toString.call(collection) === '[object Object]') {
    return Object.keys(collection).length;
  }

  return collection.length;
}

export default size;
