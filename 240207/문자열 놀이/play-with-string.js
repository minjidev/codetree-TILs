const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')
const [str, n] = input[0].split(' ')
const arr = input.slice(1).map(row => row.split(' ').map((e) => isNaN(e) ? e : +e))

let result = str
for (let [q, x, y] of arr) {
    let newStr = ''
    if (q === 1) {
        const [first, second] = [x-1, y-1]
        newStr = result.substring(0, first) + result[second] + result.substring(first+1, second) + result[first] + result.substring(second+1)
    } else {
        for (let i=0;i<str.length;i++) {
            if (result[i] === x) newStr += y
            else newStr += result[i]
        }
    }
    result = newStr
    console.log(result)
}