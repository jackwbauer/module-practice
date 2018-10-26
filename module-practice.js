numList = [];

function addToList(num) {
  numList.push(num);
}

function sortedNumList() {
  var sortedList = numList.sort(function(a, b) {
    if(numList[a] > numList[b]) {
      return 1;
    }
    if(numList[a] < numList[b]) {
      return -1;
    }
    return 0;
  });
  return numList;
}

exports.addToList = addToList;
exports.sortedNumList = sortedNumList;