const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')
const [str, target] = input
let answer = 0
for (let i=0;i<str.length;i++) {
    if (str[i] !== target[0]) continue
    let count = 0
    for (let j=0;j<target.length;j++) {
        if (str[i+j] === target[j]) {
            count += 1
        }
    }
    if (count === target.length) {
        answer += 1
    }
}

console.log(answer)