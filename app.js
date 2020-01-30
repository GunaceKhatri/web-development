

console.log(4);
var name1 =20;
console.log(20);
console.log(typeof name1);
// undefine
var person;
console.log(person);
console.log(typeof person);
// Boolean
var bool=true;
console.log(bool);
console.log(typeof bool);

// null
var nul=null ;
console.log(typeof nul);

// Symbol
var sym= Symbol();
console.log(sym);
console.log(typeof sym);

// math object
var value=Math.PI;
value = Math.random();
value = Math.round(2.8);
value =Math.floor(2.7); 
value =Math.floor(Math.random() * 6); 
value = Math.ceil(2.1);
value = Math.pow(2,3);
value = Math.sqrt(16);
value = Math.min(1.4, -5 ,10);
value = Math.max(12,33,3);

// console.log(value);
// var name1=prompt("enter Your name"); 
// console.log(name1);

// var address1=prompt("What your address");
// console.log(address1);

// Obj literal in js
var car = {
wheel: 4,
color: 'White',
Start: function() {}
}
console.log(car);
console.log(car.wheel);
console.log(car.Start);

// string Concatination in Js




// Template Literal
// console.log(${str1}+${str2});


// var job = 'Developer';

// if(job == 'Designer'); {
// console.log('He is Designer');
// } else {
//     console.log('He is Developer';)
// }


// var mark = prompt("Enter a mark between 1 and 100");
// if(mark >'40'){
// console.log('you pass exam');
// }else if(mark>='40'){
// console.log('you get first Division');
// }else  if(mark >='60')
// {
// console.log('you get distinction')
// }
// else{
//     console.log('You are fail');
// }


// var marks=prompt("Enter your marks");
// if(marks>=40 && marks<60)
// {
//     console.log("you got Second Division");
    
// }else if(marks>=60 && marks<80){
//     console.log("you got FIrst Division");

// }else if(marks >=80 && marks<=100){
//     console.log("YOu got Distinction");
// }
// else
// {
//     console.log("You are Fail");
// }

// Concatination of numbers eg: 4+5=45
var txt1 =4;
var txt2 =5;
var txt3 =txt1 + "" + txt2;
console.log(txt3);

var x=5;
if(x=="5"){
    console.log(x);
}


// switch(x)
// {
//     case 1:
//         console.log(1);
//         break;
//         case 2:
//             console.log(2);
//             break;
//             case 5:
//                 console.log(5);
//                 break;
//                 default:
//                     console.log("Hello");
// }


for(i= 0; i<5; i++)
{
    console.log(i);
 }

//  Ternary Operator
var num=25;
if(num ===25){
    console.log("you type 25");
}


console.log(num>20 ? "hello" :"hi");
 console.log(true && "hi");

 var car = {type:"Fiat", model:"500", color:"white"};
 console.log(car.type);
 console.log(car.model);
 console.log(car.color);



//  While Loop in Js
 var j =0;
 while(j<=5)
 {
     console.log(j);
     j++;

 }
 //string method
 var txt = "ABCDEFGHIJKLMNOPQganeshRSTUVWXYZ";
 var slent= txt.length;
 console.log(slent);

//  var a =1;
//  do{
//      console.log(a);
//      a++;
//  }
//  while(a=10)

//  function decleration in Js milya ko xaina 

function person(name,age,rno){
    console.log('I am ${name}');
    console.log('I am ${age}');
    console.log('I am ${rno}');
}
person("Gunace",23,77);

//arrowfunction
var calAges=(name,age)=> console.log(name,age);
  calAges("saroj");
 calAges(22);


//   Var ter and const milya ko xa
function  LoopData(){
for(b=0 ; b<10; b++)
{
    console.log(b);   
}
}
LoopData();

// Obj in js 
// let user = {
//     name: "Ram";
//     age: 20;
//     hobbies:{'Programming', 'FOotball', 'Reading'};
//     address:{
//         street: 'tinkune';
//         city: 'ktm'
//     }
// };   
    
// console.log(user);
// console.log(user.name);

// const {city , street} = user.address;

// console.log(city);
// console.log(street);

// Number to string
// let num1 = 25;
// console.log(num1);
// console.log(String(num1));

// string to number
// let str = "25";
// console.log(str);
// console.log(number(str));


// Truthy and falsy in JS
console.log(true && 2 );
 console.log(false && 2 );
 console.log( 0 && "Hello" );
 console.log( "" && 4);
 console.log( null && 5);
 console.log( undefined && "hi");
 console.log(NaN && 5);


//  Array
let arr = Array(1,2,4,7);
arr.pop(); //delete last element
arr.push("Hello"); //add element at last
arr.unshift("Hello,5,8"); //add element at arrya  in the start
arr.shift(); //remove from first index
console.log(arr.indexOf("Hello"));

// console.log(arr);
// console.log(arr[0]);
// // is Array or Not
// console.log(Array.isArray("arr"));
// console.log(Array.isArray(arr));

let contact = [
{ id : 1 ,name : "Ganesh" ,phone : 1234},
{ id : 2 ,name : "Ganesh" ,phone : 1234},
{ id : 3 ,name : "Ganesh" ,phone : 1234}
];
console.log(contact);
console.log(contact[0]);

for( let i = 0; i < contact.length; i++);
{
    console.log(contact[i]);

}
// ForEach array method
contact.forEach(function(contact, index, allArray){
console.log(contact);
console.log(index);
console.log(AllArray);
});

// map in Js
let newContact = contact.map(function(data,idx,allData){
console.log(data);
console.log(idx);
console.log(allData);
return idx;
});
console.log(newContact);

// Filter in js

let filterData = contact.filter(function(contact){
    return contact.id === 1
});




