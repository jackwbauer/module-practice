numList = [];

function addToList(num) {
  numList.push(num);
}

function sortNumList() {
  var sortedList = numList.sort(function(a, b) {
    return a - b;
  });
  return numList;
}

function returnSortedList() {
  return sortNumList();
}

exports.addToList = addToList;
exports.returnSortedList = returnSortedList;