const fs = require('fs')
const [n, m] = fs.readFileSync(0).toString().trim().split(' ').map(Number)
let max = 0

for (let i=1;i<=m;i++) {
    if (n % i === 0 && m % i === 0) {
        max = Math.max(max, i)
    }
}

console.log(max * Math.floor(n/max) * Math.floor(m/max))