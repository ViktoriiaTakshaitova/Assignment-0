
function fizzBuzz(start, end) {
  // Insert code here;
for( var i = 1; i <=end; i++)
{
  if (i % 5 == 0 && i % 3 == 0)
  {
    console.log(' FizzBuzz ')
  }
  else if (i % 3 == 0) 
  {
    console.log(' Fizz ');
  }
  else if (i % 5 == 0) 
  {
    console.log(' Buzz ');
  } 
  else
  {
    console.log(' '+ i);
  }
}
}
// Do not edit this line;
//module.exports = fizzBuzz;
fizzBuzz(1,15);
 
