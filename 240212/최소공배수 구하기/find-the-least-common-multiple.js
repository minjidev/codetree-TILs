const fs = require('fs')
const [n, m] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

function findLCM(n, m) {
    let gcd = 0
    const min = Math.min(n, m)
    for (let i=1;i<=min;i++) {
        if (n % i === 0 && m % i === 0) {
            gcd = i
        }
    }

    console.log(n * m / gcd)
}

findLCM(n, m)