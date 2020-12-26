function sumOfAllOddNumbers(nums) {
  // Insert code here;
  nums = new Array (0,1,2,3,4,5);
  var sum=0;
  
  for (var i=0; i< nums.length; i++)
    {
      if (nums[i]>0 && nums[i]%2!=0)
        {
         sum+=nums[i];
        }
    }
  console.log(sum);
}
// Do not edit this line;
//module.exports = sumOfAllOddNumbers;
sumOfAllOddNumbers();
