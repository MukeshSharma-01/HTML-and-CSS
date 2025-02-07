console.log("Mukesh Sharma");
console.log("Hello World");
let a=5;
let b=10;
// let output= "sum is : " +(a + b)+ "rupees";             // comma nhi lgana hota hai isme comma ki jagah add ka sign aayega
// console.log(output);
let output=`The sum is : ${a+b}`;        //back ticks esc ke niche aata hai.
console.log("sum is ", a+b);
console.log(output);
let age=25;
console.log(age<=18);           //to print the comparison of no.

// If statement use
console.log("Before if statment");
let year=2000;
if(year>=2000){
    console.log("It is a twenty first century");
    let a=5;
    console.log(5*a);
}
if(year<2100){
console.log(`print ${year}`);
}
console.log("After If statement");
// Traffic light system   by if statement
 let color="green";
if(color=="red"){
    console.log("Vehicles are stopped");
}
if(color=="green"){
    console.log("Keep Moving Fast");
}
if(color=="yellow"){
console.log("Go slow");
}
//  End of Traffic light

// To give vote  by else if statement
let age1 =18;
if(age1>=18){
    console.log("you can vote.");
}
else if(age1<18){
    console.log("you cannot vote.");
}
else if(age1=18){
    console.log("you can vote1")
}
// End of  if-else

// Practice Question to calculate Popcorn Prices
let size="S";
if(size==="XL"){
    console.log("Price is 250");
}
else if(size==="L"){
    console.log("Price is 200");
}
else if(size==="M"){
    console.log("Price is 150");
}
else {
    console.log(" Price is 100");
}
// End of Question

// Start of the Question 
let str ="abcd";
if((str[0]=='a') && (str.length>3)){
    console.log("This is the best string");
}
else{
    console.log("It is not a good string")
}

//switch statement
let color1="yellow";
switch(color1){
    case"red":
    console.log("Stop");
    break;
    case "green":
        console.log("Go");
        break;
        case "yellow":
            console.log("Go slow")
            break;                                   // break is imp beacause after a case is run the next all case is run
       default :
       console.log("Light is broken");
}
alert("Somethhing went wrong");
// End of the switch statement

//Trim value
let str1="   Hello     ";
console.log(str1.trim());            //after trims the value without spaces
console.log(str1);                // Iinitial value Remains same
console.log(str1.toUpperCase());              // to upper case
let Password=prompt("Enter your Password");
let newPass = Password.trim();
console.log(newPass);            // startig ke spaces and end ke spaces gaya ho jaayenge
console.log(str1.indexOf("o"));
console.log(str1.slice(5));           // iss index ke aur aage vaale ko print krvaane ke liye
// Array of students
let students=["mukesh", "sharma","kumar"];
console.log(students);
let info=["Mukesh",60,9.2];        // mixed array
console.log(info);
console.log(info[0][0]);            //first vaake box se element select krte hai aur second valae se uss element ka character
info.push("Audi");                   //To add at the end
console.log(info);
info.pop();                        // To delete from end
console.log(info);
info.unshift("audi");
console.log(info);                 // To add at start
info.shift();                      //to  delete from staart
console.log(info);
let followers=["a","b","c"];
let blocked=followers.shift();          
console.log(followers);
console.log(blocked);         
// to search the element i array
console.log(followers.indexOf("c"));      
console.log(followers.includes("a"));            // To find elemnts in array or not 
let colors2=["red","blue","yellow","green ","white","orange"];
console.log(colors2.splice(4));                    // Iss index se elements ko delete kr do
console.log(colors2);                              // phir jitne elements bache usko print kra
console.log(colors2.splice(0,2));                   // phir 0 index se 2 elemnts ko delete kra 
console.log(colors2);
console.log(colors2.splice(0,1,"face","golden"));    // phir 0 index se 1 elements ko delete kr diya aur starting mein face and golden ko add kr diya
console.log(colors2);                     //aur pjhir color arra ko print kr diya
// [Practice Question]
let months =["january","july","march","august"];
months.splice(0,1);
console.log(months);
months.splice(1,0,"june");
console.log(months);
//  # Ques 2
let lang=["c","c++","html","javascript","pythan","java","c#","sql"];
lang.reverse();
console.log(lang);
console.log(lang.indexOf("javascript"));          // End of practice Question
const arr2=[1,2,3,4,5];
// arr2=[2,3,4,5];                           // assign kr rhe hai const variable ko possible nhi hai isliye ye error show krega
let arr=[[1,2],[2,4],[3,6],[4,8]];
console.log(arr);                        // array of arrays
//Ques Tic-Tac-Toe game
let game=[["x","","0"],["","X",""],["0",'',"X"]];
console.log(game);
game[0][1]="0";                      // To change the elements of 0th array of 1st element
console.log(game);