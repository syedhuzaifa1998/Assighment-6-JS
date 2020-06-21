
       // ===========================Chapters_21-25======================= //

//***************************************************Task-1 ******************************



// var first=prompt("Enter first name","Enter here..");
// var last=prompt("Enter last name","Enter here..");
// var fullname=first+" "+last;
// document.write("Welcome "+fullname+"....!!");


//***************************************************Task-2 ******************************



// var mob=prompt("Enter favourite mobile model","Enter here..");
// document.write("My favourite phone is: "+mob+"<br>");
// document.write("Length of string:"+mob.length);



//***************************************************Task-3 ******************************

// var s1="Pakistan";
// var l1=s1.length;
// document.write("String :"+s1+"<br>");
// for(var a=0;a<l1;a++)
// {
//         if(s1[a]=='n')
//         document.write("Index of "+"'n':"+a);

// }



//***************************************************Task-4 ******************************



// var s1="Hello World";
// var l1=hw.length;
// for(var a=0;a<l1;a++)
// {
//         if(s1[a]=='l')
//         var temp=a;
// }
// document.write("String :"+s1+"<br>");
// document.write("Index of 'l':"+temp);



//***************************************************Task-5 ******************************


// var s1="Pakistan";
// var l1=s1.length;
// document.write("String :"+s1+"<br>");
// for(var a=0;a<l1;a++)
// {
//         if(a==3)
//         document.write("Character at Index "+a+":"+s1[a]);
// }



//***************************************************Task-6 ******************************



// var first=prompt("Enter first name","");
// var last=prompt("Enter last name","");
// var full=first.concat(last);

// document.write("Welcome "+full);



//***************************************************Task-7 ******************************



// var city="Hyderabad";
// document.write("City :"+city+"<br>");
// city="Islamabad";
// document.write("After replacement :"+city);



//***************************************************Task-8******************************


// var message = "Ali and Sami are best friends. They play cricket and football together";
// document.write("Paragraph : "+message)
// document.write("<br> After Replacement of and: "+message.replace(/and/g,"&"))



//***************************************************Task-9 ******************************



// var s1="427";
// document.write("Value:"+s1+"<br>"+"Type:"+typeof(s1));
// var n1=parseInt(s1);
// document.write("<br>"+"Value:"+n1+"<br>"+"Type:"+typeof(n1));



//***************************************************Task-10 ******************************



// var s1="peanuts";
// document.write("User input:"+s1+"<br>");
// document.write("Uppercase:"+s1.toUpperCase());



//***************************************************Task-11 ******************************


// var string = window.prompt("Enter Any String")
// document.write("User Input : "+string)
// string = string.toLowerCase().split(" ");
// for(var i = 0; i < string.length;i++)
// {
//     string[i] = string[i].charAt(0).toUpperCase()+string[i].slice(1) + " ";
// }
// document.write("<br>Title Case :"+string.join(" ") )



//***************************************************Task-12******************************

// var Number = 35.67
// document.write("Number : "+Number)
// Number = String(Number)
// document.write("<br> Result : "+Number.replace(".",""));


///***************************************************Task-13 ******************************
// var username = window.prompt("Enter your username : ")
// for(var i = 0; i < username.length;i++)
// {
//     if (username.charCodeAt(i) == 33 || username.charCodeAt(i) == 44 || username.charCodeAt(i) == 46 || username.charCodeAt(i) == 64 )
//     {
//         alert("Please enter avalid username")
//     }
// }

//***************************************************Task-14 ******************************



// var arr1=["cake","apple pie","cookie","chips","patties"];
// var input=prompt("Search...","Enter here");
// var temp=0;

// for(var a=0;a<arr1.length;a++)
// {

//         if(arr1[a].toLowerCase()==input.toLowerCase())
//         {
//                 document.write(arr1[a]+" is available at index "+a+" in our bakery");
//                 temp++;
//         }
// }

// if(temp==0)
// document.write("We are Sorry "+input+" is not available in our bakery");



///***************************************************Task-15 ******************************
// var password = window.prompt("Enter A Password")
// var value= false
// if(password.length >=6)
// {
//     if(password.charCodeAt(0) >=48 && password.charCodeAt(0) <=57)
//     {
//         alert("Password can't begin with a number")
//     }
//     else
//     {
//         password = password.toUpperCase()
//         for ( var i =0; i < password.length;i++)
//         {
//             if((password.charCodeAt(i)>=65 && password.charCodeAt(i)<=90) || (password.charCodeAt(i)>=48 && password.charCodeAt(i)<=57))
//             {
//                 value = true
//             }
//             else
//             {
//                 alert("enter a valid password");
//                 break
//             }
//         }
//     }
// }
// else
// {
//     alert("Password Mus be atleast 6 charcter long");
// }


//***************************************************Task-16******************************

// var university = "University of Karachi";
// university = university.split("")
// for (var i = 0;i<university.length;i++)
// {
//     var string = university[i]
//     for (var j = 0 ; j < string.length;j++)
//     {
//         document.write(string.charAt(j)+"<br>")
//     }
// }
//***************************************************Task-17******************************

// var string = window.prompt("Enter Any String")
// document.write("User Input : "+string)
// document.write("<br>Last character of input : "+string[string.length-1])


//***************************************************Task-18******************************

// var string = "the quick brown fox jumps over the lazy dog"
// document.write("String : "+string);
// var count = (string.match(/the/g)).length;
// document.write("<br>There are "+count+" occurneces of the word \'the\'");
//==========================================chapter26-30========================== */
//*******************************task1********************************** */
// var num = parseFloat(prompt("enter postive number"));
// document.write("number :" + num);
// var a = num;
// var a=Math.round(a);
// document.write( "</br>");
// document.write( "round off value:" + a);
// var b=num;
// var b = Math.floor(b);
// document.write( "</br>");
// document.write( "floor value:" + b);
// var c=num;
// var c = Math.ceil(c);
// document.write( "</br>");
// document.write( "ceil value:" + c);
//************************************task2**************************************/
// var num1 = parseFloat(prompt("enter negative number"));
// document.write("number :" + num1);
// var a = num1;
// var a=Math.round(a);
// document.write( "</br>");
// document.write( "round off value:" + a);
// var b=num1;
// var b = Math.floor(b);
// document.write( "</br>");
// document.write( "floor value:" + b);
// var c=num1;
// var c = Math.ceil(c);
// document.write( "</br>");
// document.write( "ceil value:" + c);
//***************************************************task3*********************** */
// var value = parseInt(prompt("enter a value in interger postive or negative ts your choice"));
// var d = Math.abs(value);
// document.write("the absolute value of " + value + "is" + d);
//**************************************task4*************************** */
// var diceRoll = Math.floor( Math.random() * 6 ) +1;
// alert('You rolled a ' + diceRoll);
//********************************************task5********************** */
// var n = Number(prompt("How many times do you want to flip the coin?")); // Gets the number of times to flip the coin.
//     var heads = 0, tails = 0; // Initiates the heads and tails variables.
//     for(var i = 0; i < n; i++) {

//         // Uses the Math.random function to generate a random number.
//         // If the rand num is less than 1/2, it is classified as heads.
//         // Otherwise, the num is above 1/2 and is classified as tails.
//         if(Math.random() < 0.50) {
//            document.write("random coins heads:" ); heads++
//         } else {
//             document.write("random coins tails:" ); tails++
//         }
//         document.write(n + "</br>");
//     }
//*****************************************************task6*********************** */
// var e = Math.floor(Math.random() * 100);     // returns a random integer from 0 to 99
// document.write(" random number between 1 and 100 :" + e);
//*********************************************************task7**************************** */
// var weight = window.prompt("enter your weight in kilogram : ");
// weight= parseFloat(weight);
// document.write("the weight of user is " + weight + "kilogram");


//*****************************************************task8***************** */
// var y = Math.floor(Math.random() * 10 + 1); 
      
//     // counting the number of guesses 
//     // made for correct Guess 
//     var guess = 1; 
//     var x = prompt("enter the number"); 
  
//    if(x == y) 
//    {     
//        alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
//                + guess + " GUESS "); 
//    } 
//    else if(x > y) /* if guessed number is greater 
//                    than actual number*/ 
//    {     
//        guess++; 
//        alert("OOPS SORRY!! TRY A SMALLER NUMBER"); 
//    } 
//    else
//    { 
//        guess++; 
//        alert("OOPS SORRY!! TRY A GREATER NUMBER") 
//    } 


//====================================chapter 31-34=====================================//
//*****************************************task1******************************************* */

// var rightNow = new Date();
// document.write(rightNow);
//**********************************************task2*************************** */

// var d = new Date();
// var month = new Array();
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";
// month[10] = "November";
// month[11] = "December";
// var n = month[d.getMonth()];
//  alert("current month is : " + n);

//******************************************task3********************************* */
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; 
// var now = new Date(); 
// var theDay = now.getDay(); 
// var nameOfToday = dayNames[theDay];
 
// document.write(nameOfToday);
//**************************************************task4******************************** */
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; 
// var now = new Date(); 
// var theDay = now.getDay(); 
// var nameOfToday = dayNames[theDay];
// if (nameOfToday == "sat" || nameOfToday =="sun")
// {
//     document.write("THE FUN DAY");
// }
// else{
//     document.write("THE NO FUN DAY");
// }
//************************************************task5***************************** */


// var rightNow = new Date();
// var Date = rightNow.getDate();
// if (Date <=15)
// {
//     document.write("First fifteen days of the month");

// }
// else{
//     document.write("Last days of the month");
// }

//****************************************************task6**************************** */
// var rightNow = new Date();
// document.write("Current Date: " + rightNow);
// document.write("</br>");
// var milisec =rightNow.getTime();
// document.write("Elapsed miliseconds since january 1,1970:" + milisec);
// document.write("</br>");
// var min = (milisec/100*60*60);
// document.write("Elapsed mintues since january 1,1970:" + min);

//******************************************************************task7******************** */
// var now = new Date();
// var hours = now. getHours();
// if(hours< 12){
//     document.write("ITS AM");
// }
// else{
//     document.write("ITS PM");
// }
//*********************************************************************task8************************** */
// var laterDate = new Date("thu Dec 31 2020");
// document.write("later date" + laterDate);

//********************************************************************task9*************************** */
// var time = new Date("june 18, 2015");
// var timemile = time.getTime();
// var today = new Date("june 20,2020");
// var todaymile = today.getTime();
// var diff = todaymile - timemile;
// var passed = Math.floor(diff/(1000*60*60*24));
// document.write(passed + " days have passed since 1st Ramdan ,2015");

//*******************************************************************task10****************************** */
// var first = new Date("dec 05, 2015 22:50:16");
// var firstmili = first.getTime();
// var second = new Date("jan 01, 2015");
// var secondmili = second.getTime();
// var diff = firstmili - secondmili;
// var passed = Math.floor(diff/(1000*60));
// document.write("on reference date  " + first + "<br>");
// document.write(passed + " second had paassd since beging of 2015");
//*************************************************task11*********************************** */
// var currenttime = new Date();
// var time = new Date();
// var extract = time.setHours(time.getHours() - 1);
// document.write("current date :" + currenttime + "<br>");
// document.write("1 hours ago, it was :" + time);

//**********************************************************task12************************ */
// var currenttime = new Date();
// var time = new Date();
// var extract = time.setFullYear(time.getFullYear() - 100);
// document.write("current date :" + currenttime + "<br>");
// document.write("100 years ago, it was :" + time);
//*****************************************************************task13*********************** */

//  var year =new Date();
//  var age = window.prompt("enter your age :");
//  document.write( "your age is :" +age);
//  document.write("</br>"); 
//  document.write("</br>");
//  document.write("your birth year is:" + (year.getFullYear()-age));

//****************************************************************task14*************************** */
// document.write("K-Electric Bill");
//  var name =prompt("enter customer name");
//  document.write("customer name : " + name);
//  document.write("</br>");
//  var month = prompt("enter month ");
//  document.write("Month : " + month);
//  document.write("</br>");
//  var number_of_unit = prompt("enter number of unit");
//  document.write("Number of unit : " + number_of_unit );
//  document.write("</br>");
//  var charge_per_unit = prompt("enter per unit charge");
//  document.write("charge per unit : " + charge_per_unit);
//  document.write("</br>");
//  document.write("</br>");
//  document.write("</br>");
//  var Net_Amount_Payable  = number_of_unit * charge_per_unit;
//  document.write("Net Amount Payable (within Due Date) : " + Net_Amount_Payable);
//  document.write("</br>");
//  var surcharge = 350;
//  document.write("late payment surchage : " + surcharge);
//  document.write("</br>");
//  var Gross_Amount_Payable = Net_Amount_Payable + surcharge;
//  document.write(" Gross Amount Payable (after Due Date)  : " + Gross_Amount_Payable);

  //====================================chapter 31-34=====================================//
//****************************************************************task1*************************** */

/*
function tell_date_time()
{
        var g1=new Date();
        var date1=g1.toDateString();
        var hour1=g1.toTimeString();
        document.write(date1+" "+hour1);
}

tell_date_time();
*/



///****************************************************************task2*************************** */



/*
function first_last(f1,l1)
{
        alert("Welcome "+f1+" "+l1);

}
first_last("Khan","Sanober");
*/



//****************************************************************task3*************************** */



/*
function add(num1,num2)
{
        document.write("Addition of "+num1+" and "+num2+"="+(parseInt(num1)+parseInt(num2)));

}
var n1=prompt("Enter number ","Enter here....");
var n2=prompt("Enter number ","Enter here....");

add(n1,n2);
*/


//****************************************************************task14*************************** */


/*
var n1=prompt("Enter number","");

if(n1=="")
{
        alert("Error!...empty input");
        n1=prompt("Enter number","");
}

var n2=prompt("Enter number","");

if(n2=="")
{
        
        alert("Error!...empty input");
        n2=prompt("Enter number","");
}

var c=prompt("Enter any character (+,-,x,/)","");

if((c!="+"&&c!="-"&&c!="x"&&c!="/")||c=="")
{
        alert("Error!....enter valid input");
        c=prompt("Enter any character (+,-,x,/)","Enter here...");
}


function calculator(num1,num2,ch)
{
        if(ch=="+")
        document.write(num1+" "+ch+" "+num2+"="+(parseInt(num1)+parseInt(num2)));
        if(ch=="-")
        document.write(num1+" "+ch+" "+num2+"="+(parseInt(num1)-parseInt(num2)));
        if(ch=="*")
        document.write(num1+" "+ch+" "+num2+"="+(parseInt(num1)*parseInt(num2)));
        if(ch=="/")
        document.write(num1+" "+ch+" "+num2+"="+(parseInt(num1)/parseInt(num2)));
}

calculator(n1,n2,c);
*/



//****************************************************************task5*************************** */



/*
function sq(n1)
{
        document.write("Square of number "+n1+":"+parseInt(n1)*parseInt(n1));
}
var num1=prompt("Enter a number for squaring","");
if(num1=="")
{
        alert("Error!....valid entry plzz");
        num1=prompt("Enter a number for squaring","");
}

sq(num1);
*/



//****************************************************************task6*************************** */



/*
function fact(num1)
{
        var temp1=1;
        for(var a=num1;a>=1;a--)
        {
                temp1=a*temp1;
        }
        document.write("Factorial of "+num1+":"+temp1);
}
fact(4);
*/



//****************************************************************task7*************************** */



/*
function start_end(num1,num2)
{
        for(var a=num1;a<=num2;a++)
        {
                document.write(a+" ");
        }
}

var n1=prompt("Enter start number","");
var n2=prompt("Enter end number","");

start_end(parseInt(n1),parseInt(n2));
*/



//****************************************************************task8*************************** */


/*
function calculatehypotenuse()
{
        var b1=prompt("Enter base value","");
        var p1=prompt("Enter perpendicular value","");

       function calculatebase(b1)
       {
                return parseInt(b1)*parseInt(b1);
       }

       function calculateperpendicular(p1)
       {
                return parseInt(p1)*parseInt(p1);
       }

       var h1=Math.sqrt(calculatebase(b1)+calculateperpendicular(p1));
       document.write("Hypothesis:"+h1);
}


calculatehypotenuse();
*/


//****************************************************************task9*************************** */


/*
function area(w,h)
{
        a=w*h;
        document.write("Area: "+a);
}
        
        document.write("Argument as variable"+"<br>");
        var width=8;
        var height=4;
        area(width,height);
        document.write("<br>"+"Argument as value"+"<br>");
        area(8,4);
*/



//****************************************************************task10*************************** */



/*
function palindrome(str)

        {

        var count=str.length;
        var count2=parseInt(count/2);
        var count3=count-1;
        var temp=0;

        if(count/2!=0)
        {
                for(var a=0;a<count;a++)
        {
                for(var b=count3;b>=0;b--)
                {
                        if(a==b)
                        break;
                        if((str[a]==str[b])&&(a!=b))
                        {
                        temp++;
                        }              
                }
        }

        if(temp==count2)
        {
                document.write("String is palindrome");
        }
        else
        document.write("String is not palindrome");

        }

        else
        document.write("String is not palindrome");

        }



var s1=prompt("Enter here","");
palindrome(s1);
*/


//****************************************************************task11*************************** */
// function titlecase(string)
// {
//     document.write("User Input : "+string)
//     string = string.toLowerCase().split(" ");
//     for(var i = 0; i < string.length;i++)
//     {
//         string[i] = string[i].charAt(0).toUpperCase()+string[i].slice(1) + " ";
//     }
//     return string.join(' ')    
// }
// document.write("<br>Output : "+titlecase("the quick brown fox"));
//****************************************************************task12*************************** */
// function longest(string)
// {
//     var j = 0
//     var a = string.split(" ")
//     var length = a[0].length
//     for(var i =0 ; i<a.length;i++)
//     {
//         if(a[i].length > length)
//         {
//             length = a[i].length
//             j = i
//         }
//     }
//     return a[j]
// }
// document.write(longest("web development tutorial"));
//****************************************************************task13*************************** *
// function count_letter(string,letter)
// {
//     var count = 0
//    for(var i =0;i<string.length;i++)
//    {
//        if(string[i] == letter)
//        {
//            count+=1
//        }
//    }
//    return count
// }
// var string = window.prompt("Enter Any String :")
// var letter = window.prompt("Enter Any letter from String :")
// document.write("Occurence of letter "+letter+" in "+string+" is : "+count_letter(string,letter));
//****************************************************************task14*************************** */



// function calcCircumference(r)
// {
//         var p=Math.PI;
//         var circ=2*p*r;
//         document.write("Circumference of Circle having Radius "+r+" : "+circ);
// }

// function calcArea(r)
// {
//         var p=Math.PI;
//         var area=p*r*r;
//         document.write("Area of Circle having Radius "+r+" : "+area);
// }

// calcCircumference(3);
// document.write("<br>");
// calcArea(2);



 