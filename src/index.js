module.exports = function multiply(first, second) {

  //create 2 arrays and reverse them
  var firstArray = first.split("").reverse();
  var secondArray = second.split("").reverse();

  //create empty array, which we use to work
  var workArray = [];

  //count expression
  for (var i = 0; i < firstArray.length; i++) {
    for (var x = 0; x < secondArray.length; x++) {
      var mutli = firstArray[i] * secondArray[x];
      if (workArray[i + x] !== undefined) {
        workArray[i + x] += mutli;
      }
      else {
        workArray[i + x] = mutli;
      }
    }
  }

  //add
  for (var i = 0; i < workArray.length; i++) {
    var number = workArray[i] % 10;
    var countOfTen = Math.floor(workArray[i] / 10);
    workArray[i] = number;

    //if we have tens
    if (workArray[i + 1] !== undefined) {
    //add tens
      workArray[i + 1] += countOfTen;
    } 
    else if (countOfTen != 0) {
      workArray[i + 1] = countOfTen;
    }
  }

  return workArray.reverse().join("");

}
