let a="9"
let b="19.4"

sum=parseInt(a)+parseFloat(b)
console.log(sum+" value"+ typeof(sum));


//unary plus way of conversion
num1=+a
num2=+b
console.log(num1+num2)
console.log(typeof(num1+num2))

//covert to string
let str=num1.toString()
console.log(`${str} , ${typeof(str)}`);