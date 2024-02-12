const fs = require('fs')
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

function calculate(a, b) {
    const min = Math.min(a, b)
    const max = Math.max(a, b)

    return min === a ? [min+10, max * 2] : [max*2, min+10]
}

const [n, m] = calculate(a, b)
console.log(n, m)