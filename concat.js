function concat(array, ...values) {
  return [...values].reduce((accumulator, currentValue) => {
    return accumulator.concat(...[currentValue])
  }, [...array]);
}

export default concat;
