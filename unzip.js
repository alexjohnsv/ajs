function unzip(array) {
  const len = array[0].length;

  const result = [];

  for (let i = 0; i < len; i++) {

    result[i] = [];

    for (let j = 0; j < array.length; j++) {
      result[i].push(array[j][i]);
    }

  }

  return result;
}

export default unzip;
