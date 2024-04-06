let num = prompt("1-sonni kriting", "Ikkita eng katta sonlarni aniqlab beradi")
let num2 = prompt("2-sonni kriting")
let num3 = prompt("3-sonni kriting")
let num4 = prompt("4-sonni kriting")
let num5 = prompt("5-sonni kriting")
const arr = [num, num2, num3, num4, num5]
console.log(arr.sort((a, b)=>b-a).slice(0, 2));
