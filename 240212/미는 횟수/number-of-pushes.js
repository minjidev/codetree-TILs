const fs = require('fs')
let [str1, str2] = fs.readFileSync(0).toString().trim().split('\n')

let count = 0
const len = str1.length

const pushToRight = (str) => {
    return str.slice(-1) + str.slice(0, -1)
}

for (let i=0;i<len;i++) {
    str1 = str1.slice(-1) + str1.slice(0, -1)
    count += 1
    if (str1 === str2) {
        console.log(count)
        return
    }
}

console.log(-1)