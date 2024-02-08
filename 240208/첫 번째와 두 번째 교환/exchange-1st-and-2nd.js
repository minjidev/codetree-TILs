const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

const first = input[0]
const second = input[1]
const arr = input.split('')

for (let i=0;i<arr.length;i++) {
    if (arr[i] === first) {
        arr[i] = second
    } else if (arr[i] === second) {
        arr[i] = first
    }
}

console.log(arr.join(''))