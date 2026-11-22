
/** Assignment operation ways
 * 
 */
let a=0 // = is assignement operator
let x=y=1  //chain assignment
x+=1; // increment by1 and assign to same variable
//similariry
x-=1;
x*=1;
x/=4;

/**
 * Arthemetic operator
 */
let a1=2,b1=5
let sum=a1+b1
let sub=a1-b1
let remainder = b1%3
console.log(remainder)
a1++
console.log(a1);
sum--
console.log(sum);


//unary
console.log("3"+2) // ans 32 if one of the datatype is string, it concanates
console.log(+"3"+2) //just put + before string to convert to relavent datatype
console.log(3+2)

/**
 * Comparision operator !===, <,>,<=,>=
 */
let c1=1;
let c2="1";
let c3="2"
console.log(c1==c2) // ans true - only value compared
console.log(c1===c2) // ans false - strict data type comparision
console.log(c1!=c2) //true

/*** Logical operators
 * && , ||, !
 */

let day="Monday"
console.log(typeof day)
if(typeof day == "string" && day.length>1){ // passes when both conditions pass
    console.log("valid")
}

let day1="Saturday"
console.log(typeof day1)
if(day1 ==="Saturday" || day1==="Sunday" ){ 
    console.log("Weekend")
}
else{
    console.log("Weekday")
}

let fname=""
if(!fname){
    console.log("fname is not valid data")
}

/**default value assign */
let targetBrowser
let browser = targetBrowser || "chrome"
console.log(browser) //ans chrome

/** Ternery operator
 * a?b:c
 */

let runner = "cloud"
let loglevel = (runner === "local") ? "info" : "Error"
console.log(loglevel)

let loglevel1= (runner === "local") ? "info" : (runner==="cloud")?"Silent":"Error"
console.log(loglevel1)