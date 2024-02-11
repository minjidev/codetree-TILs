const fs = require('fs')
let [str, commands] = fs.readFileSync(0).toString().trim().split('\n')

for (let type of commands) {
    if (type === 'L') {
        str = str.slice(1) + str[0]
    } else {
        str = str.slice(-1) + str.slice(0, -1)
    }
}

console.log(str)