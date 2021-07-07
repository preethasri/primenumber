const chalk =require('chalk');
const readline = require('readline-sync');
const maxdate= 31 ;
const maxmonth= 12 ;

function welcome()
{
  console.log(chalk.red("hii this preetha. Are u excited to know that your birthday is a prime number or not? guess'yes'\n"))
  console.log(chalk.green("let s know about what is a prime number? A PRIME NUMBER is nothing but the number which is divisible by one and the number itself('ex:2,3,5,7')\n"))
}
function userdata()
{
   var username=readline.question("hii your sweet name please..\n");
  console.log("hello"+username)
  var birthdate=readline.question("please enter your birth date\n");
  var birthmonth=readline.question("please enter your birth month\n");
  var userans= birthdate+birthmonth;
  
if(isNaN(birthdate)|| isNaN(birthmonth))
   {
    console.log("please enter a number");
   }
  else if(birthdate > maxdate || birthmonth > maxmonth)
     {
      console.log(`date should not exceed ${maxdate}  and month should not ${maxmonth} exceed `)
      }
  else{
     checkprime(userans)
     }
}
function checkprime(userans)
{
  var correctans= parseInt(userans)
  var isPrime=true;
  for(i=2;i<correctans;i++)
  {
    if(correctans%i==0)
    {
    isPrime=false;
    break
    }
  }
  if(isPrime)
  {
    console.log(chalk.yellow("your birthday is a PRIME NUMBER"))
  }
  else
  {
    console.log(chalk.yellow("oopse!!! your birthday is not a prime number"))
  }

}
welcome();
userdata();
