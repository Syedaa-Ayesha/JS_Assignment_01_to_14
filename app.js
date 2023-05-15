//------------------------------------Chapter#3-----------------------------------------
//--------------------------VARIABLES FOR NUMBERS-------------------------------------------

//Q#1
//var age ="21";
//alert(age);

//Q#2
//var visit = 14;
//alert ("You have visited this site"+ visit + "times");

//Q#3
//var birthYear ="My birth year is 2002";
//document.write( birthYear);

//Q#4
// var a ="Syeda Ayesha";
// var b =" ordered 5 T-shirt(s)";
// var c =" Outfitter store";
// var clothing =a+b+c;
// document.write(clothing);

//--------------------------------------Chapter#4------------------------------------------
//------------------------------VARIABLE NAMES: LEGAL & ILLEGAL----------------------------

//Q#1

//var a,b,c;

//Q#2

//Legal
//var age;
//var $abc;
//var _xyz;
//var name;
//var email;
 
//illegal
//var @age;
//var !abc;
//var %xyz;
//var 1name;
//var *email;

//Q#3

//--------a

//document.write("A heading stating “Rules for naming JS variables” ");
//document.write("<br>");

//--------b

//document.write("Variable names can only contain $, letter, _, digit");
//document.write("For example $my_1stVariable ");
//document.write("<br>");

//--------c

//document.write("Variables must begin with a $, _,latter  ");
//document.write("<br>");

//-------d

//document.write("Variable names are case sensitive ");
//document.write("<br>");

//--------e

//document.write(" Variable names should not be JS Keywords");

//-------------------------------MATH EXPRESSIONS--------------------------------------
//---------------------------------Chapter 05-------------------------------------------

//Q#1

//var n1 = 3;
//var n2 = 5;
//sum = n1+n2;
//document.write ("sum of " + n1 +" and " + n2 + " is " + sum);

//Q#2
//var n1 = 3;
//var n2 = 5;
//Sub = n1-n2;
//document.write ("Subtraction of " + n1 +" and " + n2 + " is " + Sub);

//var n1 = 3;
//var n2 = 5;
//Mul = n1*n2;
//document.write ("Mul of " + n1 +" and " + n2 + " is " + Mul);

//var n1 = 3;
//var n2 = 5;
//Div = n1/n2;
//document.write ("Div of " + n1 +" and " + n2 + " is " + Div);

//var n1 = 3;
//var n2 = 5;
//Mod = n1%n2;
//document.write ("Mod of " + n1 +" and " + n2 + " is " + Mod);

//Q#3

//------a. Declare a variable.
//var abc;
 
//b. Show the value of variable in your browser like “Value after variable declaration is: ??”.

//document.write (abc);

//c. Initialize the variable with some number.

//abc = 5;
//document.write( "Initial value " + abc);

//e. Increment the variable.

//abc++;

//f. Show the value of variable in your browser like “Value after increment is: 5”.

//document.write ("Value after increment is: " + abc);

//g. Add 7 to the variable.

//document.write (7 +abc);

//h. Show the value of variable in your browser like “Value after addition is: 13”.

//abc += 7;
//document.write("Value of addition is:" + abc);

//i. Decrement the variable.

//abc--;

//j. Show the value of variable in your browser like “Value after decrement is: 12”.

//document.write("value after Decrement is :" +abc--);

//k. Show the remainder after dividing the variable’s value by 3. 

//abc%=3;
 
//document.write("The remainder after dividing the variable’s value by 3: "+abc);

//Q#4

//var ticketCost= 600;
//document.write("Total cost to buy 5 tickets to a movier is "+ticketCost*5+" PKR");

//Q#5

// var table = 8;
// document.write("Table of "+table+ "<br>");
// document.write(table+" * 1 = "+table*1+"<br>");
// document.write(table+" * 2 = "+table*2+"<br>");
// document.write(table+" * 3 = "+table*3+"<br>");
// document.write(table+" * 4 = "+table*4+"<br>");
// document.write(table+" * 5 = "+table*5+"<br>");
// document.write(table+" * 6 = "+table*6+"<br>");
// document.write(table+" * 7 = "+table*7+"<br>");
// document.write(table+" * 8 = "+table*8+"<br>");
// document.write(table+" * 9 = "+table*9+"<br>");
// document.write(table+" * 10 = "+table*10+"<br>");

//Q#6

// var celsuisTemperature = 25;
// var fahrenheitTemperature = 70;
// var cConvertor = (fahrenheitTemperature - 32) * 5/9; 
// var fConvertor = (celsuisTemperature * 9/5) + 32;
// document.write(celsuisTemperature+"C "+"is "+fConvertor+"F"+"<br>" );
// document.write(fahrenheitTemperature+" F "+"is "+cConvertor+"C");


//Q#7

// document.write("<h2>Shopping cart</h2> <br>");
// var item1 =650;
// document.write("price of item1 is "+(item1)+"<br>" );
// var Quantity =3;
// document.write("Quantity of item1 is 3 <br>");
// var cost1 =item1*Quantity;
// var item2 =100;
// document.write("price of item2 is "+(item2)+"<br>" );
// var Quantity =7;
// document.write("Quantity of item2 is 7 <br>");
// var cost2 =item2*Quantity;
// var charges= 100;
// document.write("Shipping Charges 100 <br> <br>");
// document.write("Total cost of your orderis "+(cost1+cost2+charges));



//Q#8

// document.write(" <h2> Marks Sheet </h2> <br> <br>");
// var Total_marks =980;
// document.write("Total marks:"+Total_marks+"<br>");
// var obtained =804;
// document.write("Marks obtained:"+obtained+"<br>")
// var Precentage =obtained/Total_marks*100;
// document.write("percentage "+ Precentage);


//Q#9

// document.write("<h2> Currency in PKR </h2> <br> <br>");  
// var us_dollars =261.68;
// var us_convert =us_dollars*10;
// document.write(us_convert+"<br>");
// var Saudi_Riyals =69.76;
// var Saudi_convert=Saudi_Riyals*25;
// document.write(Saudi_convert+"<br>");
// document.write("Total Currency in PKR: "+(us_convert+Saudi_convert));

//Q#10

// var value1 =10;
// var operation =value1+5 *10 /2;
// document.write(operation);

//Q#11

// document.write("<h2>Age Calculator</h2> <br> <br>");
// var Current_Year =2023;
// document.write("Current Year:"+Current_Year+"<br>");
// var Birth_Year =1993;
// document.write("Birth Year:"+Birth_Year+"<br>");
// var Your_Age =Current_Year-Birth_Year;
// document.write("Your Age is:"+Your_Age);

//Q#12

// document.write("<h2>The Geometrize</h2>");
// var radius = 20;
// const PI = 3.142;
// var c_of_circle = 2 * PI * radius;
// var area_of_circle = PI * (radius * radius);
// document.write("The radius of circle is:" + radius +"<br>" +"The Circucmerence is : "+ c_of_circle + "<br>");
// document.write("Area of Circle is : " + area_of_circle);

//Q#13

// document.write("<h2>The Lifetime Supply Calculator </h2> <br>.");
// var favourite_snack ="chocolate chip";
// document.write ( "favourite snack: "+favourite_snack+"<br>" );
// var current_age = 30;
// document.write("current age: "+current_age+ "<br>" );
// var E_M = 65;
// document.write("Estimated maximum Age:"+ E_M +"<br>");
// var A_S = 3;
// document.write ("Amount of snacks per day:"+ A_S +"<br>");





//-----------------------------------------Chapter # 06 To 09----------------------------------

//Q#01

// document.write ("Result: <br>")
// var a = 10;
// document.write ("The  value of a is: "+ a +"<br>");
// document.write("................................. <br>   <br>");
// document.write("The value of ++a is: "+ ++a + "<br>");
// document.write ("Now the value of a is: "+ a +"<br> <br> ");
// document.write("The value of a++ is: "+ a++ +"<br>");
// document.write ("Now the value of a is: "+ a +"<br> <br> ");
// document.write("The value of --a is: "+ --a +"<br>");
// document.write ("Now the value of a is: "+ a +"<br> <br> ");
// document.write("The value of a-- is: "+ a-- +"<br>");
// document.write ("Now the value of a is: "+ a +"<br> ");

//Q#2

// var a = 2 , b = 1;
// var result = --a - --b + ++b + b-- ;
// document.write (--a +"<br>");
// document.write ( --a - --b +"<br>");
// document.write ( --a - --b + ++b +"<br>");
// document.write ( --a - --b + ++b + b-- +"<br>");
// document.write ( "The value of a is "+ a +"<br>");
// document.write ( "The value of b is "+ b +"<br>");
// document.write ( "The value of resul is "+ result);

//Q#3

// var userName = prompt("Hello! Input your name:");
// alert ("The username is : "+ userName);

// Q#04 Not Appear in PDF

//Q#05


// var table = +prompt("Input your number ");
// document.write("Table of "+table+ "<br>");
// document.write(table+" * 1 = "+table*1+"<br>");
// document.write(table+" * 2 = "+table*2+"<br>");
// document.write(table+" * 3 = "+table*3+"<br>");
// document.write(table+" * 4 = "+table*4+"<br>");
// document.write(table+" * 5 = "+table*5+"<br>");
// document.write(table+" * 6 = "+table*6+"<br>");
// document.write(table+" * 7 = "+table*7+"<br>");
// document.write(table+" * 8 = "+table*8+"<br>");
// document.write(table+" * 9 = "+table*9+"<br>");
// document.write(table+" * 10 = "+table*10+"<br>");

//Q#6

// var total = 100;
// var subjectName1 = prompt("Enter a subject name");
// var subjectName2 = prompt("Enter a subject name");
// var subjectName3 = prompt("Enter a subject name");
// var sub1 = +prompt("Enter Obtained Marks od subject 01");
// var sub2 = +prompt("Enter Obtained Marks od subject 02");
// var sub3 = +prompt("Enter Obtained Marks od subject 03");
// var precentageSubjectName1 = (sub1)/total * 100;
// var precentageSubjectName2 = (sub2)/total * 100;
// var precentageSubjectName3 = (sub3)/total * 100;
// document.write(subjectName1+"   "+sub1+ "   "+precentageSubjectName1+"%<br>");
// document.write(subjectName2+"   "+sub2+ "   "+precentageSubjectName2+"%<br>");
// document.write(subjectName3+"   "+sub3+ "   "+precentageSubjectName3+"%");

//Q#7 Not Appear in PDF










//--------------------------------USER INPUT & CONDITIONAL  STATEMENT--------------------------


//Q#1

// var city = prompt("Enter The City Name");
// if(city =="Karachi" || city == "karachi"){
// document.write("Welcome to City of Lights");
// }
// else{
//     document.write(":(");
// } 

//Q#2
// var gender = prompt("Enter Your Gender");
// if( gender =="Male" || gender == "male"){
//     document.write("Good Morning Sir");
// }
// else if(gender =="Female" || gender =="female"){
//     document.write(" Good Morning Ma’am");
// }
// else {
// document.write ("Not Exist");
// }

//Q#3

// var road_trafic = prompt("input Color of road trafic");
// if( road_trafic =="Red" || road_trafic == "red"){
//     document.write("Must Stop");
// }
// else if (road_trafic =="Yellow" || road_trafic == "yellow"){
//     document.write("Ready to move");
// }
// else if (road_trafic =="Green" || road_trafic == "green"){
//     document.write("Move now");
// }
// else{
//     document.write ("Color is Not Match From thr trafic Signal");
// }

//Q#4

// var fuel = +prompt("input your remaining fuel");
// if( fuel < 0.25 ){
//     document.write("Please refill the fuel in your car ")
// }
// else{
//     document.write("No Need to refill")
// }

//Q#5

//a .alert Msg would be displayed.
//b .alert Msg would be displayed.
//c . condition 1..alert Msg would be displayed.
//c . condition 2..alert Msg would be displayed. 
//c . condition 3..alert Msg would be Not displayed.
//c . condition 4..alert Msg would be displayed.
//d . .alert Msg would be displayed.
//e . condition 1..alert Msg would be displayed.
//e . condition 2..alert Msg would be Not displayed.
//f . alert Msg would be displayed.


//Q#6

// var t_math = +prompt("Plz Enter your subject Math Total Number ");
// var math = +prompt("Plz Enter your subject Math Obtained Number ");
// var t_english = +prompt("Plz Enter your subject English Total Number ");
// var english = +prompt("Plz Enter your subject English obtained Number ");
// var t_science = +prompt("Plz Enter your subject Science Total Number ");
// var science = +prompt("Plz Enter your subject Science obtained Number ");
// var total_marks =(t_math + t_english + t_science);
// var obtained_marks =(math + english + science);

// var percentage = (obtained_marks / total_marks) * 100 ;
// if ( percentage >= 80){
//     document.write("<h2> Marks Sheet </h2>" +"<br>" +"<br>");
//     document.write( "Total Marks: " + total_marks +"<br>");
//     document.write( "Mark Obtained: " + obtained_marks +"<br>");
//     document.write( "Percentage: " + percentage + "%" +"<br>");
//     document.write( "Grade = A-One " +"<br>");
//     document.write("You Are Excellent" +"<br>");
// }
// else if( percentage >= 70){
//     document.write("<h2> Marks Sheet </h2>" +"<br>" +"<br>");
//     document.write( "Total Marks: " + total_marks +"<br>");
//     document.write( "Mark Obtained: " + obtained_marks +"<br>");
//     document.write( "Percentage: " + percentage + "%" +"<br>");
//     document.write( "Grade = A " +"<br>");
//     document.write("Good " +"<br>");
// }
//else if( percentage >= 60){
    //     document.write("<h2> Marks Sheet </h2>" +"<br>" +"<br>");
    //     document.write( "Total Marks: " + total_marks +"<br>");
    //     document.write( "Mark Obtained: " + obtained_marks +"<br>");
    //     document.write( "Percentage: " + percentage + "%" +"<br>");
    //     document.write( "Grade = B " +"<br>");
    //     document.write("You Have Need To Improve " +"<br>");
    // }
    // else {
    //     document.write("<h2> Marks Sheet </h2>" +"<br>" +"<br>");
    //     document.write( "Total Marks: " + total_marks +"<br>");
    //     document.write( "Mark Obtained: " + obtained_marks +"<br>");
    //     document.write( "Percentage: " + percentage + "%" +"<br>");
    //     document.write( "Grade = Fail" +"<br>");
    //     document.write("Sorry " +"<br>");
    // }
    
    //Q#7

// var secret_number = 5;
// var user_guess = +prompt(" Enter Any Number 1 To 10");
// if (secret_number == user_guess){
//     document.write("Bingo! Correct answer")
// }
// else if (secret_number == user_guess -1 || secret_number == user_guess +1){
//     document.write("Close enough to the correct answer")
// }
// else{
//     document.write("Your secret Number Is Wrong")
// }

//Q#8

// var user_input = +prompt(" Enter your Number");
// var divisible = user_input % 3;
// if ( divisible == 0){
//     document.write("The number is divisible by 3")
// }
// else{
//     document.write("The number is Not divisible by 3")
// }

//Q#9
// var input = +prompt("Enter your Number");
// var checks_whether = input % 2;
// if (checks_whether ==0){
//     document.write(" even number")
// }  
// else{
//     document.write(" odd number")
// }

//Q#10

// var  Temperature = +prompt(" Enter Your Temperature");
// if ( Temperature >= 40){
//     document.write ("It is too hot outside.")
// }
// else if ( Temperature >= 30){
//     document.write ("The Weather today is Normal.")
// }
// else if ( Temperature >= 20){
//     document.write ("Today’s Weather is cool.")
// } 
// else if ( Temperature => 10){
//     document.write ("OMG! Today’s weather is so Cool.")
// } 

//Q#11

// var first_number = +prompt("Enter Your First Number");
// document.write( "First Number is : "+ first_number + "<br>");
// var Operation = prompt("Enter your Operation");
// document.write( " Operation : " + Operation + "<br>");
// var second_number = +prompt("Enter Your Second Number");
// document.write( "Second Number : "+second_number + "<br>")
// if ( Operation == '+'){
//     let result = first_number + second_number;
    
//      document.write("Result : "+ first_number + "+" + second_number + "=" + result);
// }
// else if( Operation == '-'){
//     let result = first_number - second_number;
// document.write( "Result : "+first_number + "-" + second_number + "=" + result);
// }
// else if ( Operation == '*'){
//     let result = first_number * second_number;
    
//      document.write( "Result : "+first_number + "*" + second_number + "=" + result);
// }
// else if( Operation == '/'){
//     let result = first_number / second_number;
    
//      document.write( "Result : "+first_number + "/" + second_number + "=" + result);
// }
// else if( Operation == '%'){
//     let result = first_number % second_number;
    
//      document.write( "Result : "+first_number + "%" + second_number + "=" + result);
// }

    
    
//----------------IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS-----------------------

//Q#1

// let input = prompt("Input any Character");

// if(input.charCodeAt(0) >= 97 && input.charCodeAt(0) <= 122 ){
//     document.write("Lowercase letter");

// }
// else if(input.charCodeAt(0) >= 65 && input.charCodeAt(0) <= 90){
//     document.write("Upper Case Letter");
// }
// else if(input.charCodeAt(0) >= 48 && input.charCodeAt(0) <= 57){
//     document.write("Number");
// }
// else{
//     document.write("Invalid");
// }

//Q#2

// var input_1 = +prompt ("Enter Your First Number");
// var input_2 = +prompt ("Enter Your Second Number");
// if (input_1 > input_2){
//     document.write ("The First Number is Greater Than Second Number")
// }
// else if (input_1 < input_2){
//     document.write ("The First Number is Less Than Second Number")
// }
// else{
//     document.write ("Numbers Are Equal");
// }


//--------------------------------------Q#3-----------------------------

// var input = +prompt("Enter number");  
// if(input == 0){
//         document.write ("The Number is Zero ");
//     }
// else if( input > 0){
//     document.write("The Number is positive");
// }
// else if( input < 0){
//     document.write("The Number is Negative");
// }else{
//     document.write("Not a number");
// }


//------------------------------------Q#4-------------------------------

// let input = prompt ("Enter A Letter");
// if ( input == 'a' || input =='e' || input =='i' || input =='o' || input =='u' || input =='A' || input =='E' || input =='I' || input =='O' || input =='U'){
//     document.write("This is a Vowel");
// }
// else{
//     document.write("This is Cosonant");
// }

//------------------------------------Q#5-------------------------------

// let storedPassword = "SyedaAyesha%!*";
// let password = prompt("Enter his/ her password");

// if(storedPassword === password){
//     document.write("Correct! The password you entered matches the original password");
// }
// else if(storedPassword !== password){
//     document.write("Incorrect Passward!");
//     let password = prompt("Enter his/ her password");
// }
// else{
    
// }

//------------------------------------Q#6-------------------------------

// var greeting;
// var hour = 13;
// if (hour < 18) {
// document.write(greeting = "Good day");
// }
// else{
//     document.write(greeting = "Good evening");
// }

//------------------------------------Q#7-------------------------------

// let time = +prompt("Enter time in 24 hours clock");
//     let convert = time % 24;

// if( convert === 13){
//     document.write(convert +" in 12 hours is "+"1");
// }
// else if(convert === 14){
//     document.write(convert +" in 12 hours is "+"2");
// }
// else if(convert === 15){
//     document.write(convert+" in 12 hours is "+"3");
// }
// else if(convert === 16){
//     document.write(convert+" in 12 hours is "+"4");
// }
// else if(convert === 17){
//     document.write(convert+" in 12 hours is "+"5");
// }
// else if(convert === 18){
//     document.write(convert+" in 12 hours is "+"6");
// }
// else if(convert == 19){
//     document.write(convert+" in 12 hours is "+"7");
// }
// else if(convert == 20){
//     document.write(convert+" in 12 hours is "+"8");
// }
// else if(convert == 21){
//     document.write(convert+" in 12 hours is "+"9");
// }
// else if(convert == 22){
//     document.write(convert+" in 12 hours is "+" 10");
// }
// else if(convert == 23){
//     document.write(convert+" in 12 hours is "+" 11");
// }
// else if(convert == 24){
//     document.write(convert+" in 12 hours is "+" 12");
// }
// else{
//     document.write("Not in 24 hours");
// }

//---------------------------------------Array----------------------------------------------
//---------------------------------------14 to 16------------------------------------------
//Q#1

//const student_Name = [];

//Q#2

//const student_Name ={};

//Q#3

//const string =["Syeda","Ayesha",];

//Q#4

//const number =[13,04,2002];

//Q#5

//const boolean =[True , False];

//Q#6

//const mixed_array =["syedaayeshaa923@gmail.com" ,13,05,2002, $ ];

//Q#7

// const education =[" SSC", " HSC ", " BCS"," BS", " BCOM", " MS ", " M. Phil", " PhD"];
// document.write ("<h1> Qualifications : </h1> <br>");
// document.write ( " <h2> 1) "+education [0] +"<br> ");
// document.write ( "2) "+education [1] +"<br>");
// document.write ( "3)"+education [2] +"<br>");
// document.write ( "4)"+education [3] +"<br>");
// document.write ( "5)"+education [4] +"<br>");
// document.write ( "6)"+education [5] +"<br>");
// document.write ( "7)"+education [6] +"<br>");
// document.write ( "8)"+education [7]);

//Q#8
// const studentnames = ["Michael" , "John" , "Tony"];
// const score = [320 , 230 , 480];
// let totalmarks = 500;

// document.write("Score of " + studentnames[0] + " is " + score[0] + ".Percentage is " + score[0]/500*100 + "% <br><br>" );
// document.write("Score of " + studentnames[1] + " is " + score[1] + ".Percentage is " + score[1]/500*100 + "% <br> <br>" );
// document.write("Score of " + studentnames[2] + " is " + score[2] + ".Percentage is " + score[2]/500*100 + "%" );


//Q#9
//  // a)---------------

//  const colorNames = [" Black " , " White " , " Blue " , " Pink " , " Grey "];
//  document.write("Colors are: <br>" + colorNames + "<br><br>");

// // b)---------------

//   let inputColor = prompt("Enter color to add at the begining.<br>");
//   colorNames.splice(0, 0, inputColor);
//   document.write(colorNames + "<br><br>");

// // c---------------

//   colorNames.splice(0, 0 , "Red" , "Orange");
//   document.write(colorNames + "<br><br>");

// // d---------------

//    colorNames.splice(0 , 1);
//    document.write(colorNames + "<br><br>");

// // e---------------

//    colorNames.splice(-1 , 1);
//    document.write(colorNames + "<br><br>");

// // f---------------
//    let input_Color = prompt("Enter color to add.<br>");
//    let desiredindex = prompt("Enter the Index number where you want to add the color");
//    colorNames.splice(desiredindex , 0 , input_Color);
//    document.write(colorNames + "<br><br>");

//    // g---------------
      
//    let desired_index = +prompt("Enter the Index number where you want to delete the color");
//    let numberOfColors = +prompt("Enter number of color you wants to delete.<br>");
//    colorNames.splice(desired_index , numberOfColors);
//    document.write(colorNames + "<br><br>");
//    colorNames.splice(desired_index , desired_index);


//Q#10
// const scores = [320 , 230 , 480 , 120];
// document.write("Scores :" + scores + "<br>");
// document.write("Ordered score of students : " + scores.sort());


//Q#11

//   const cityNames = ["karachi" , "Islamabad" , "Lahore" , "Quetta" , "Peshawar"];
//   document.write(cityNames + "<br>") ;
//   document.write("Selected Cities: <br>" + cityNames.slice(0 , 3));

//Q#12
//   const arr = ["This" , "is" , "my" , "cat"];
//   document.write("The sentence is : " + arr.join(' '));

//Q#13

       
//  const arr = ["Keyboard" , "Mouse" , "Printer" , "Monitor"];
//  document.write("Devices: <br>" + arr);
//  document.write("<br>Out:<br>" + arr[0]);
//  document.write("<br>Out:<br>" + arr[1]);
//  document.write("<br>Out:<br>" + arr[2]);
//  document.write("<br>Out:<br>" + arr[3]);

//Q#14
// const arr = ["Keyboard" , "Mouse" , "Printer" , "Monitor"];
// document.write("Devices: <br>" + arr);
// document.write("<br>Out:<br>" + arr[3]);
// document.write("<br>Out:<br>" + arr[2]);
// document.write("<br>Out:<br>" + arr[1]);
// document.write("<br>Out:<br>" + arr[0]);

//Q#15
//  const mobileCompanies = ["Apple" , "Samsung" , "Motrola" , "Nokia" , "Sony" , "Haier"];
//  document.write("<select><option>" +mobileCompanies[0] +  "</option><option>" +mobileCompanies[1] +  "</option><option>" +mobileCompanies[2] +  "</option><option>" +mobileCompanies[3] +  "</option><option>" +mobileCompanies[4] +  "</option><option>" +mobileCompanies[5] +  "</option></select>")