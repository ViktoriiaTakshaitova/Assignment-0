function frequencyCounter(word) {
  // Insert code here;
word=word.toLowerCase();//.split('');
var count=1;
for (var i=0; i < word.length; i++)
  for(var j=i+1; j < word.length; j++)
  {
   if (word[i] == word[j])
      {
       count++;
       } 
      else
        {
          count=1;
        }
   document.write( word[i] + ":"+ count + ",\t");
  }
}
// Do not edit this line;
//module.exports = frequencyCounter;
frequencyCounter("DooD");
