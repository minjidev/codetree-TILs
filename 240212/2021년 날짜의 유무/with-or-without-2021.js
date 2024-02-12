const fs = require('fs')
const [m, d] = fs.readFileSync(0).toString().trim().split(' ').map(Number)
const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

function checkExist(m, d) {
    if (m > 12) return 'No'
    if (days[m-1] < d) return 'No'
    return 'Yes'
}

const result = checkExist(m, d)
console.log(result)