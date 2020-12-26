function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;
  nums = new Array (2,4,5,6,23);
  var count=0;
  start=2;
  end=23;
  
  for (var i=0; i< nums.length; i++)
    {
      if (nums[i]>=start && nums[i]<=end)
        {
         count++;
        }
    }
 console.log(count);
}

// Do not edit this line;
//module.exports = sumOfNumsWithinARange;
sumOfNumsWithinARange();
