const fs = require('fs')
const [first, second] = fs.readFileSync(0).toString().trim().split(' ')

const arr = second.split('')

arr[0] = first[0]
arr[1] = first[1]

console.log(arr.join(''))