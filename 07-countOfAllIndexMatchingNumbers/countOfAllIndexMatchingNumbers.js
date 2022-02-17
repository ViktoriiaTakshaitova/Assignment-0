function countOfAllIndexMatchingNumbers(nums) {
  // Insert code here;
  nums = new Array (0,1,2,3,4,5);
  let res=0;
  
  for (var i=0; i< nums.length; i++)
    {
      if (nums[i]==i)
        {
          res+=nums[i];
        }
    }
  console.log(res);
}

// Do not edit this line;
//module.exports =countOfAllIndexMatchingNumbers;
countOfAllIndexMatchingNumbers();
