function countOfAllBooleansAndStrings(arr) {
  // Insert code here;
  arr = new Array ("hey", "there", "hello", "there", "world", false);
  var count=0;
  for(var i=0; i<arr.length; i++) {
  if (arr[i]=="" || arr[i]==true || arr[i]==false)
  {
    count++;
  }
  }
console.log(count);
}

// Do not edit this line;
//module.exports = countOfAllBooleansAndStrings;
  countOfAllBooleansAndStrings();
