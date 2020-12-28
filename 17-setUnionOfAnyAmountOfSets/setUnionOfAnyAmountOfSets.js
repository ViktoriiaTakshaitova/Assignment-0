function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;  
 var num=[1,2,3];
  var nnum=[4,5,6];

for (var i=0; i < num.length; i++){
  
  for(var j=i; j < nnum.length; j++)
  {
   if (num[i] == nnum[j])
      {
        console.log(num[i]);
       } 
      else
        {
          console.log(num[i] + num[j]) ;                   
        }
  }
}
  }

// Do not edit this line;
//module.exports = frequencyCounter;
setUnionOfAnyAmountOfSets();
