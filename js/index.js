

/*      exam1
var initYear = 1980
var box = ``

for(var i = 0 ; i<=50 ; i++){

    box +=  `<option value="`+(initYear+i)+`">`+(initYear+i)+`</option>`
}
document.getElementById('mySelect').innerHTML = box;
*/

// if(5>20){
//     console.log('eqwal')
// } else {
//     console.log('not eqwal')
// }

/*
function myOpject (productPrice,profit,tax,ads){
    price1=productPrice+profit
    price2=price1+(price1*tax)
    totalPrice=price2+ads
    console.log(totalPrice)
}

myOpject(10000,500,0.3,20)
myOpject(100000,1000,0.7,100)
myOpject(100500,700,0.4,80)
*/

// document.getElementById('exam1').innerHTML=prompt('enter your name')

/*
var num1=20
var num2=30
console.log(num1+num2)
*/

/*
function arthimaticOprator(num1,num2){

    sum=num1+num2
    sub=num1-num2
    mult=num1*num2
    div=num1/num2
    mod=num1%num2

    console.log(sum,sub,mult,div,mod)
}

arthimaticOprator(20,10)
*/

/*4- Write a program to enter length and breadth of a rectangle and find it’s area . (Area=length*width)
        Example
Input  L=5  W=10
Output  Area=50

function area(length,width){

    length=length*1
    width=length*2
    areas=length*width
    console.log(length,width,areas)
}

area(20)
*/



/*
var fristName = document.getElementById("fristName");
var lastName = document.getElementById("lastName");
 function displayName(){
    console.log(fristName.value+" "+lastName.value)
 }

 displayName()

*/


var user= {
    name:"ahmed",
    salary:1000,
    age:30,
    jop:"developer",
    city:"cairo",
    haveACar:true,
    wife:{
        name:"sara",
        age:26,
        child:{
            name:"abdo",
            age:5,

        }
    },
    eat:function(){
        console.log("I am eating pizza");
    }
} 


console.log(user.eat())
