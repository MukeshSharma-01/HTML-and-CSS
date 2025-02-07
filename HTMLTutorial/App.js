// Guess the name of Movie that the user write in the favorite movie

// const favMovie="Avtar";
// let guess=prompt("Guess the name");
// while((guess!=favMovie) &&  (guess != "quit") ){
//      guess=prompt("Wrong guess. Please try again");
// }
// if(guess==favMovie){
//     console.log("Congrats!");
// }
// else{
//     console.log("Quit ");
// }

// Guessing the no. that the generated no. is same as the user inout number

// let max = prompt("Enter max value");
// const random = Math.floor(Math.random()*max)+1;
// let guess=prompt("Guess the number");
// while(true){
//     if(guess=="quit"){
// console.log("You quit");
// break;
//     }
//     if(guess==random){
//         console.log("You are right!congratulations.Your random no.was",random);
//         break;
//     }
//    else if(guess<random){
//         guess=prompt("Hint: this is small value.Please enter the bigger value");
       
//     }else{
//         guess=prompt("Hint : the no. is bigger value.Please enter smaller value");
//     }
// }

//  Take input the user's name and age using prompt and send the alert by the line "name is age years old"

// let name=prompt("Your name");
// let age=prompt("Your age ");
// alert(`${name} is ${age} years old`);

// Write the case to print the months in Quarter

// let Quarter=1;
// switch(Quarter){
//     case 1:console.log("January,February,March");
// break;
//     case 2:console.log("April,May,June");
// break;
//     case 3:console.log("July,August,September");
// break;
//     case 4:console.log("October,November,December");
//   break;  
//     default:("Not A Quarter");
// }

// Wite a code for a word start with "a" the word is golden word

// let string="aherry";
// if((string[0]=="a")&& (string.length>5)){
//     console.log("the word is golden word");
// }
// else{
//     console.log("the word is not a golden word");
// }

// Largest from three numbers
// let a=10 ;
// let b=2;
// let c=4;
// if(a>b){
//     if(a>c){
//         console.log(a,"is the largest");
//     }
//     else{
// console.log(c,"is the largest no.");
//     }
// }
// else{
//     if(b>c){
//         console.log(b,"is thelargest");
//     }
//     else{
//         console.log(c,"is the largest ");
//     }
// }

// Check wheather if the two no. havee the same digit
// let a=23353;
// let b=243;
// if(a%10==b%10){
//     console.log("Both a and b have the same last digit",a%10);
// }
// else{
//     console.log("They don't have the same last digit");
// }

// Print the first n elements of an array
// let arr=[1,2,3,4,5,6];
// let n=3;
// let ans=arr.slice(0,3);
// console.log(ans);

// Check weather the string is blank or not

// let string=prompt("Please write the string");
// if(string.length==0){
//     console.log("string is empty");
// }else{
//     console.log("string is not empty");
// }

// Check wheather the chsracte at the give indecx is smaller case or not

// let str="ApNa CoLlEgE";
// let n=6;
// if(str[n]==str[n].toLowerCase()){
//     console.log("String is lower case");
// }else{
//     console.log("Strig is not a lower case");
// }

//  Trailing spaces from a string

// let str=prompt("Write the string");
// console.log(`Original string ${str}`);
// console.log(`string without spaces ${str.trim()}`);               // Error

// Check wheater the array present in array or not

// let arr=[12,2,4,35,3];
// let element=5;
// if(arr.indexOf(element)!==-1){
//     console.log("ELment Exists in an array");
// }else{
//     console.log("Elements does not exist");
// }

//    Check wheather the all occurances of the element

// let arr=[1,2,3,4,5,6,12,3,1,2];
// let num=2;
// for(let i=0;i<arr.length;i++){
//   if(arr[i]==num){
//     arr.splice(i,1);
//   }
// }
// console.log(arr);

//  Write a program to find the number of digits in a number

// let num=1213233;
// let count=0;
// let copy = num;
// while(copy>0){
//   count++;
//   copy=Math.floor(copy/10);
// }
// console.log(count);

// WAP to add th number present in a number

// let num=1212393;
// let sum=0;
// let copy= num;
// while(copy>0){
//   digit=copy%10;
//   sum+=digit;
//   copy=Math.floor(copy/10);
// }console.log(sum);

// Write a program to find the factorial of a number

// let n=5;
// let factorial=1;
// for(let i=1;i<=n;i++){
//  factorial*=i;
// }
// console.log(factorial);

// Find the largest numbe in a array

// let arr=[1,3,5,3,2,6,7,4];
// let max=0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i];
//     }
// }
//     console.log(max);

//  Generate a random no.  representing the dice roll

// let num;
// num=Math.floor(Math.random()*6)+1;
// console.log(num);

//  Create a object that represnts car and stores certain properties

// let car={
//     Name:"Buccati",
//    Model:"A22243QD",
//    color:"Blue",
// }
// car.Name="BMW"
// console.log(car);

// Write a js function that returns array elements larger than a number

// let arr=[1,2,3,56,6,7,9];
// let num=4;
// function large(arr,num){
//    for(let i=0;i<arr.length;i++){
//     if(arr[i]>num){
//         console.log(arr[i]);
//     }
//    }
// }
// large(arr,num);

// WAP to get unique values from a string
// let str="absashdkfds";
// function unique(str){
// let ans="";
// for(let i=0;i<str.length;i++){
//     let currChar=str[i];
//     if(ans.indexOf(currChar)== -1){               // Samajh nhi aaya
//         ans+=currChar;
//     }
// }
// console.log(ans);
// }
// unique(str);

// Write a function that taken name of countries as a input and give longest country as output
// let arr=["India","Australia","Germany"];
// let ansIdx=0;
// function largest(arr){
//    for(let i=0;i<arr.length;i++){
//     let ansLen=arr[ansIdx].length;
//     let currLen= arr[i].length;
//     if(ansLen<currLen){
//         ansIdx=i;
//     }
//    }
//    console.log(arr[ansIdx]);
// }
// largest(arr);

// WAP in JS to count the number of vowels in str;
// let str="MukeshSharma";
// function vowelCount(str){
// let count=0;
// for(let i=0;i<str.length;i++){
//     if(str.charAt(i)=="a"||str.charAt(i)=="e"|| str.charAt(i)=="i"|| str.charAt(i)=="o"||str.charAt(i)=="u"){
//         count++;
//     }
// }
// console.log(count);
// }
// vowelCount(str);

//  Write a JavaScript function to generate a random number within a range (start, end).
// let start=100;
// let end=200;
// function range(start,end){
//     let diff=end-start;
//     console.log(Math.floor(Math.random()*diff)+start);
// }
// range(start, end);

//  Write the arrow function named arrayavg and takes some value and returns the average of that array

// let arrAvg=(arr)=>{
//     let total=0;
//     for(let num of arr){
//         total+=num;
//     }
//     let avg= total/arr.length;
//     console.log(avg);
// }
// let arr=[1,2,3,4,5];
// arrAvg(arr);
                
                           // OR
// let arr=[1,2,3,4,5];
// let total=0;
// let arrAvg=(arr)=>{
// for(let i=0;i<arr.length;i++){
//    total+=arr[i];
// }
// let avg= total/arr.length;
// console.log(avg);
// }
// arrAvg(arr);

// Write a arrow function and takes a input value one and returns that is even or odd

// let input=prompt("Write a number");
// let evenOdd=(num)=>{
//     if(input%2==0){
//         console.log("number is even ");
//     }
//     else{
//         console.log("nuber is odd");
//     }
// }
// evenOdd(input);
                //OR
// let num=4;
// let isEven=(num)=>{num%2==0;
//     console.log(num,"is Even");
// }
// isEven(num);

// square and add the elements of an array and find the average of an array

// let arr=[1,2,3,4,5,6];
// const square=arr.map((arr)=>arr*arr);
// console.log(square);
// let sum =square.reduce((acc,cur)=>acc+cur,0);
// let avg=sum/arr.length;
// console.log(avg);
// square();

// Create a new array using the map function whose each element is equal to the original element plus 5.
// let arr=[1,2,3,4,5,6];
// console.log(arr);
// console.log(arr.map((num)=>num+5));

// Create a new array whose elements are in uppercase of words present in the original array
// let arr=["Mukesh","Sharma"];
// let newArr =arr.map((arr)=>arr.toUpperCase());
// console.log(newArr);

//  Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the originalarray values and all of the additional arguments doubled

// const doubleAndReturnArgs=(arr,...args)=>[
// ...arr,...args.map((v)=>{v*2;})
// ];
// doubleAndReturnArgs([1,2,3,4]);                   //Print not show

// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object
// const mergeObj=(obj1,obj2)=>({...obj1,...obj2});
// mergeObj({a:1,b:2},{c:3,d:4});                                     // print not show

// TO-Do App  

// let toDo=[];
// let req=prompt("Write your Request")
// while(true){
//     if(req=="quit"){
//         console.log("Exit the App");
//         break;
//     }
//     if(req=="list"){
//     console.log("------------------");
//     for(let i=0;i<toDo.length;i++){
//         console.log(i,toDo[i]);
//     }
//     console.log("------------------");
//     }
//   else  if(req=="add"){
//         let task=prompt("Enter your request to add the elements");
//         toDo.push(task); 
//         console.log("task added");
//     }
// else if(req=="delete"){
//     let idx=prompt("Write the index of task you want to delete");
//     toDo.splice(idx,1);
//     console.log("task deleted");
// }
// else{
//     console.log("Wrong request");
// }
//  req =prompt("Write your request");
// }
