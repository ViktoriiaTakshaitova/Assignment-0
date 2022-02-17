function countOfAllNumbersSmallerThanTarget(nums, target) {
  // Insert code here;
  num = new Array  (1,2,3,4,5);
  target=9;
  let res=0;
  for (var i=0; i <num.length; i++)
    {
      if (num[i] < target)
        {
          res+=num[i];
        }
    }
   console.log(res);
}

// Do not edit this line;
//module.exports = countOfAllNumbersSmallerThanTarget;
countOfAllNumbersSmallerThanTarget();
