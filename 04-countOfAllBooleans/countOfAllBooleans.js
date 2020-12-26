function countOfAllBooleans(arr) {
  // Insert code here;
  arr = new Array ("hello", "world", 3, "nice", 99, Infinity, -Infinity, true, true, true, false);
  var count=0;
  for(var i=0; i<arr.length; i++){
  if (arr[i]==true || arr[i]==false)
  {
    count++;
  }
  }
console.log(count);
}

// Do not edit this line;
//module.exports = countOfAllBooleans;
  countOfAllBooleans();
