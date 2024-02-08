const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()
const arr = input.split('')
const first = arr[0]
const second = arr[1]

for (let i=0;i<arr.length;i++) {
    if (arr[i] === second) {
        arr[i] = first
    }
}

console.log(arr.join(''))