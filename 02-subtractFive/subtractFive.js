function subtractFive(num) {
  // Insert code here;
  num = new Array (20,30,40,50);
  for(i=0;i<num.length;i++)
    {
     num[i]-=5;
    }
  return (num);
}

// Do not edit this line;
//module.exports = subtractFive;
console.log(subtractFive());
