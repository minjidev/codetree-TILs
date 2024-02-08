const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')
const [str, n] = input[0].split(' ')
const arr = str.split('')
const query = input.slice(1).map(row => row.split(' ').map((e) => isNaN(e) ? e : +e))

for (let [type, a, b] of query) {
    if (type === 1) {
        [arr[a-1], arr[b-1]] = [arr[b-1], arr[a-1]]
    } else {
        for (let i=0;i<arr.length;i++) {
            if (arr[i] === a) {
                arr[i] = b
            }
        }
    }
    console.log(arr.join(''))
}