let str = "Hello World"

console.log(str.charAt(6)); // gives 5th indec char
console.log(str.length) // provides num of chars in string

/**
 * trim() end of string trims all spaces in the string
 * toUpperCase(). converts to uppercase
 * .startsWith("") returns boolena
 * .endsWith("")
 * str.slice()
 */
let dt = "2022-06-10"
dt.slice(2) //22-06-10
dt.slice(0, 4) //2022
dt.slice(5,7) //06
dt.slice(8) //10
dt.slice(-2) //10 

/**
 * replace, replaceall
 */
let dt1= dt.replace("2022","2024") //2024-06-10
dt2=dt.replaceAll("-","")  //20220610
console.log(dt1)
console.log(dt2)
