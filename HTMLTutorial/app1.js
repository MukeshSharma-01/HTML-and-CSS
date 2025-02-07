let n =prompt("write your no");
for(let i=1;i<=5;i++){
    console.log(i);
}
    for(let i=1; i<=15;i=i+2){
          console.log(i);
    }
  n=parseInt(n);
    for(let i=n;i<=n*10;i=i+n){
        console.log(i);
    }
    let i=1;
while(i<=6){
    console.log("Mukesh");
    i++;
}
let fruits=["orange","mango","banana","papaya","grapes"];
for(let i=0;i<fruits.length;i++){
    console.log(i,fruits[i]);
}
let fruits1=["apple","mango","banana","grapes","papaya"];                       // for of loop
for(fruit of fruits1){
console.log(fruit);
}
const student={
    name:"Mukesh",
    age:28,
    height:5.8,
    marks:[95,83,57]                 //hum objects ke andar bhi array bna sakte hai.Hum key ko array bhi de kalte hai
};
console.log(student);
const post={
    username:"Boss",
    content:"Funny",
    likes:"1k",
    reposts:500,
    tags:["aman","boss","ghazni"]
};
console.log(post);
post.shared="2k";
console.log(post);                       //agr key na ho toh add aise kr sakte hai
delete post.content;                    //agr key ko deletee krna hai to ye use krenge
console.log(post); 
// Math  object is already present in JS  Generate  random NO.between 1 to 10
let step1=Math.random();
console.log(step1);
let step2=step1*10;
console.log(step2);
let step3=Math.floor(step2);
console.log(step3);
let step4=step3+1;
console.log(step4);
// function to print 1to 5
function print1to5(){
    for(let i=0;i<=5;i++){
        console.log(i);
    }
}
print1to5();
//function with arguments
function printInfo1(name,age){
console.log(`Name ${name}'s age is ${age}`);
}
printInfo1("Aman",20);
function multi(n){
for(let i=n;i<=n*10;i+=n){
    console.log(i);
    console.log("hello")
    return i;                     //return ke baad jo bhi code likha rhega code function mei voh execute nhi hoga
}
}
multi(2);
// Concat the strings
let str=["hi","hello","bye","!"];    //global scope
function concat(str){
    // let str="";             //  function scope
    let result="";
    for(let i=0;i<str.length;i++){
       result+=str[i];
    }
    console.log(result);        
    return result;
}
concat(str);
function multiGreet(func,n){         // Higher order function
    for(let i=1;i<=n;i++){
        func();
    }
}
    let greet=function(){
        console.log("hello");
  
}
multiGreet(greet,2);
let sum={
    add(a,b){
        return a+b;
    },
    Sub(a,b){
return a-b;
    }
}
console.log(sum.add(1,2),"BY methods Shortcut/Shorthand");
console.log(sum);
// Use of try and catch
try{
    console.log(a);
}catch(err){
    console.log(err,"By try and Catch");
}
// let pow=(a,b)=>a**b;              hum haise bhi print kr sakte hai
// console.log(pow(2,3));
let pow=(a,b)=>{
    console.log(a**b,"by arrow function");
}
pow(2,3);
//set time out                            ye functon ek baar execute hoga 
console.log("Hi there!");
setTimeout( ()=>{
    console.log("Apna college");
},8000);
console.log("Welcome");
//set interval                           ye function baar baar chalta rhega isko band krvaane ke liye hame isko ek Id bnaaayenge aur phir clearinterval mein id likh denge
let id=setInterval(()=>{                                           
console.log("Hello Brother bye set Interval");
},4000);
// This with arrow function and normal function
let game={
   first: "cricket",
   second:"tennis",
  third:"vollyball",
 getInfo1:function(){
   setTimeout (()=>{
    console.log(this);           // ye game object ke and jo hai voh usko print krega kyoki iske parent ka scope jo hai vohi iska scpe hau
  },2000)},
  getInfo2:function(){
    setTimeout(function(){
        console.log(this);          // Window ke print krega kyoki setTimeout ka scope window hai
    },2000)
  },
};
// to return the squar of n
const sqr=(n)=> {
   return n*n;}
console.log(sqr(4));

let id1=setInterval(()=>{
        console.log("Hello World");
},2000)
setTimeout(()=>{
    clearInterval(id1);
         console.log("stop print Hello World");
     },10000)
        // array higher order function
let arr=[1,2,3,4,5];
let print=function(el){                // Use of FOr Each Function
    console.log(el);
};
   arr.forEach(print);
   //////               OR                ///
arr.forEach(function(el){
console.log(el);
});
let double=arr.map((el)=>{
    console.log(2*el);
});
let  num=[1,2,3,4,5,6]
let newArr=num.filter((el)=>{                  //return kr rha hai ki console pr print hoga
    return el%2==0})
//       Every function
num.every((el)=>(
   console.log( num%2==0,"By every function")));        // Agr saare elements even hue toh true print  hoga 
   let finalVal=num.reduce((res,el)=>res+el);            // saare elements ko add krne ka logic likha hai isliye add kr rha hai
   console.log(finalVal);

   let max=num.reduce((max,el)=>{
    if(el>max){
      return el;
    }
    else{
        return max;
    }
   });
   console.log(max);
   let char="apnacollege";
   console.log(...char,"by spread function");
   let student1={
name:"Mukesh ",
class:12,
   }
let newStu={...student1,roll:3};
console.log(newStu,"with object literals");
// Arguments   in Rest methods
function min(){
console.log(arguments);
console.log(arguments.length);
// console.log(arguments.push(1));             // kyoki arguments ek array nhi hai isliye ye error show krega
}
// lekin jab hum usme rest methode lga de toh voh array ki tarah treat kregsa
function num12(...args){
    console.log(args.push(13));
    console.log(args.length);
}
let names=["Mukesh", "Aman","Kamal","Indrjit","Varun"];
// let[winner]=names[0];
// let[runnerup]=names[1];        isko aise define kro ya phir niche vaale tarike se dono kaka matla smae hi hai
let [winner,runnerup,...others]=names;           // left side mei likha haiwinner aur runnerup iska mtlb hai ki voh left vaale names ko hi lenge array mei se
console.log(winner,runnerup,...others,"destructurong in arrays");
let student2={           // destrucuring in objects
    name:"Rohit",
    class:9,
    rollno:29,          
    age:14,
    password:1234,
};
let {name:publicname,password}=student2;
console.log(publicname,password,city="Delhi","destructuring in objects");