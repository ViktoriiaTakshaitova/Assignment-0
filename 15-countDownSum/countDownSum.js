class MySolution {
  countDownSum(num) {
    // Insert code here;
    var nnum=0;
  for (var i=0; i<=num; i++)
    {
       nnum+=i;
    }
    return(nnum);
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
var studentSolution= new MySolution();
console.log(studentSolution.countDownSum(10));//55
