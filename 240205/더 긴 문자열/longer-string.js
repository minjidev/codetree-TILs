const fs = require('fs')
const [word1, word2] = fs.readFileSync(0).toString().trim().split(' ')
const [len1, len2] = [word1.length, word2.length]

if (len1 < len2) {
    console.log(word2, len2)
    return
} else if(len1 > len2) {
    console.log(word1, len1)
    return 
} else {
    console.log('same')
}