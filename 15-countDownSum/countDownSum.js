class MySolution {
  countDownSum(num) {
    // Insert code here;
      if (num==0){
          return 0;
      }else{
          let num1 = num+(countDownSum(num-1))
          return num1;         
      }
    }
}

// Do not edit this line;
//let StudentSolution = MySolution;
//module.exports = StudentSolution;
let studentSolution= new MySolution();
console.log(studentSolution.countDownSum(10));//55
