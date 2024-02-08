const fs = require('fs')
let [str, target] = fs.readFileSync(0).toString().trim().split('\n')



while (true) {
    const idx = str.indexOf(target)

    if (str.indexOf(target) < 0) break

    str = str.slice(0, idx) + str.slice(idx+target.length)
}

console.log(str)