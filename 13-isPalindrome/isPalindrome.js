function isPalindrome(word) {
  // Insert code here;
  word=word.toLowerCase();
  var nword=word.split('').reverse().join('');
  if (word == nword)
    {
      return true;
    }
 else
   {
     return false;
   }
}
// Do not edit this line;
//module.exports = isPalindrome;
console.log(isPalindrome("Doodood"));
