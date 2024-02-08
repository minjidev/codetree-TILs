const fs = require('fs')
const [n, ...arr] = fs.readFileSync(0).toString().trim().split('\n')

let [str, q] = n.split(' ')
const query = arr.map(Number)

for (let q of query) {
    if (q === 1) {
        // 왼쪽으로 밀기
        str = str.slice(1) + str[0] 
    } else if (q === 2) {
        // 오른쪽으로 밀기
        str = str.slice(-1) + str.slice(0, -1)
    } else {
        // 뒤집기 
        str = str.split('').reverse().join('')
    }

    console.log(str)
}