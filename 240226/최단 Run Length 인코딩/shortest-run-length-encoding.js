const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()
const len = input.length
let minLen = Number.MAX_SAFE_INTEGER


const shiftToRight = (str) => {
    const copy = [...str]
    for (let i=len-1;i>=1;i--) {
        copy[i] = copy[i-1]
    }
    copy[0] = str[len-1]
    return copy.join('')
}

const runLengthEncoding = (str) => {
    let prev = str[0]
    let cnt = 0
    let result = ''
    for (let i=0;i<len;i++) {
        if (prev === str[i]) {
            cnt += 1
        } else {
            result += `${prev}${cnt}`
            cnt = 1
        }
        prev = str[i]
    }
    result += `${prev}${cnt}`
    
    return result

}

let cur = input
for (let i=0;i<len;i++) {
    const shifted = shiftToRight(cur)

    const len = runLengthEncoding(shifted).length
    
    minLen = Math.min(minLen, len)
    cur = shifted
}

console.log(minLen)