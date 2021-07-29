

let num1 = 4
document.getElementById("munber1-el").textContent = num1
let num2 = 200
document.getElementById("munber2-el").textContent = num2

console.log(num2)
console.log(num1)



let sum = document.getElementById("sum-el")

function add() {
let resultAdd =  num1 + num2
  sum.textContent = resultAdd
  console.log("clikec")
}

function sub() {
let resultSub =  num1 - num2
  sum.textContent = resultSub
  console.log("clikec")
}

function div() {
let resultDiv =  num1 / num2
  sum.textContent = resultDiv
  console.log("clikec")
}

function mult() {
let resultMult =  num1 * num2
  sum.textContent = resultMult
  console.log("clikec")
}
