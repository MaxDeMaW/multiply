module.exports = function multiply(first, second) {
  //get big number with BigInt convert function
  return String(BigInt(first*second));
}
