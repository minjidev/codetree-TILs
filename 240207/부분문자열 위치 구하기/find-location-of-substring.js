const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')
const [str, target] = input


for (let i=0;i<str.length;i++) {
    let sameCount = 0
    if (str[i] !== target[0]) continue
    sameCount += 1
    for (let j=1;j<target.length;j++) {
        if (str[i+j] === target[j]) {
            sameCount += 1
        }
    }
    if (sameCount === target.length) {
        console.log(i)
        return
    }
}


console.log(-1)