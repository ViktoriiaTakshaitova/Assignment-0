function pairSum(nums, target) {
  // Insert code here;

    nums = [1,2];//new Array();
    target =3 ;
   
  for (var i=0; i<nums.length; i++)
    {
      for (var j=i; j<nums.length; j++)
    {
      if (nums[i]+nums[j]==target)
        {
          return true;
        }
      else
        {
          return false;
        }
    }
}
}

// Do not edit this line;
//module.exports = pairSum;
document.write(pairSum());//console.log
