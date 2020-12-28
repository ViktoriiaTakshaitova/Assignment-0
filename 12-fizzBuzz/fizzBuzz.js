function fizzBuzz(start, end) {
  // Insert code here;
  
  for (var i=0; i<end+1; i++)
   
    {
      if (i/3==0)
        {
          console.log(" "+ "Fizz" + " ");
        }
       if (i/5==0)
        {
          console.log(" "+"Buzz" + " ");
        }
       if (i/3==0 && i/5==0)
        {
          console.log(" " + "FizzBuzz" + " ");
        }
       else // (i/3!=0 && i/5!=0)
        {
          console.log(i); //console.log
        }
    }
 
}

// Do not edit this line;
//module.exports = fizzBuzz;
fizzBuzz(1,5);
