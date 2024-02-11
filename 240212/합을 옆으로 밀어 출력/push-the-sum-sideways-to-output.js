const fs = require('fs')
const [n, ...arr] = fs.readFileSync(0).toString().trim().split('\n')

const nums = arr.map(Number)
const sum = nums.reduce((acc, cur) => acc + cur, 0)
const sumStr = sum.toString()

console.log(sumStr.slice(1) + sumStr[0])