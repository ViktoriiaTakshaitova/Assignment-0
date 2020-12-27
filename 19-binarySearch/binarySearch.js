class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch( nums, target){
    // Insert code here;
    nums = [1,2,3,4,5];//new Array();
    target=3;
    var startIndex=0;
    var endIndex=nums.length;
    
    while (startIndex<=endIndex){
     var midlIndex=Math.floor((startIndex + endIndex)/2);
      if (target==nums[midlIndex])
        {
          return true;
        }
      else if (target < nums[midlIndex])
        {
       endIndex = midlIndex-1;
        }
      else if (target > nums[midlIndex])
          {
        startIndex = midlIndex+1;
          }
      else
       {
         return false;
       }
  }
}
}
// Do not edit this line;
//let StudentSolution = MySolution;
//module.exports = StudentSolution;

var studentSolution = new MySolution();
console.log(studentSolution.binarySearch());
