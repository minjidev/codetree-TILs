const fs = require('fs')
const [str1, str2] = fs.readFileSync(0).toString().trim().split(' ')
let num1 = ''
let num2 = ''
for (let ch of str1) {
    if (isNaN(ch)) break
    num1 += ch
}

for (let ch of str2) {
    if (isNaN(ch)) break
    num2 += ch
}

console.log(Number(num1) + Number(num2))