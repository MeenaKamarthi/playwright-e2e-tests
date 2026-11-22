/**
 * for
 * foreach - iterate over a array
 * while
 * dowhile
 * for in. - iterate over an object
 * for of - iterate over array
 */

for(let a=0; a<10; a++){
    console.log(a)
}

let arr=["grapes",1,"banana",10, "orange", 20]
let sum=0;
for(let i=0;i<arr.length; i++){
    let arre= arr[i];
    if(typeof arre === "number"){
        sum+=arre
    }
}
console.log(sum)


/**Foreach */
let windows=["Google", "Amazon", "Youtube"]
windows.forEach((value) => {
console.log(value)
})
windows.forEach((value, index, array) => {
console.log(value, index, array)
})

/**for in */
let obj={
    a:"10",
    b:"20",
    c:"30"
}
for(let key in obj){
    console.log(key);
    console.log(obj[key]);
}

for(let value of windows){
    console.log(value);
    console.log(windows);
}