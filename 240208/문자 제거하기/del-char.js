const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let str = input[0]
const indices = input.slice(1).map(Number)

for (let i=0;i<indices.length;i++) {
    const idx = indices[i]
    if (str.length - 1 < idx) {
        str = str.slice(0, str.length-1)
    } else {
        str = str.slice(0, idx) + str.slice(idx+1)
    }
    console.log(str)
}