function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  nums = new Array (2,4,5,6,23);
  var sum=0;
  
  for (var i=0; i< nums.length; i++){
    var min=nums[0];
    var max=nums[1];
    
      if (nums[i]< min)
      {
        min=nums[i];
      }
    
      if (nums[i] > max)
        {
          max=nums[i];     
        }
    
         sum=min+max;
    }
  console.log(sum);
  
}

// Do not edit this line;
//module.exports = sumOfMinimumAndMaximum;
sumOfMinimumAndMaximum();
