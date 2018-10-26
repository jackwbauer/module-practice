numList = [];

function addToList(num) {
  numList.push(num);
}

function sortedNumList() {
  var sortedList = numList.sort(function(a, b) {
    return a - b;
  });
  return numList;
}

exports.addToList = addToList;
exports.sortedNumList = sortedNumList;