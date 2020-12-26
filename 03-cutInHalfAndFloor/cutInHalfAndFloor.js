function cutInHalfAndFloor(num) {
  // Insert code here;
 var num = new Array(20,30,33,55);
  for (var i=0; i<num.length;i++)
  {
    num[i]=Math.floor(num[i]/2);
  }

  console.log(num);
 
}

// Do not edit this line;
//module.exports = cutInHalfAndFloor;
  cutInHalfAndFloor();

