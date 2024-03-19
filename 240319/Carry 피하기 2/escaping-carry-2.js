const fs = require('fs')
const [n, ...arr] = fs.readFileSync(0).toString().trim().split('\n')
const N = +n
const nums = arr.map(Number)
let maxSum = 0

// isCarray(숫자 2개) => 각 자리수 더했을 때 carry 발생하면 true, 아니면 false 반환 
function isCarry(a, b) {
    const num1 = String(a).split('')
    const num2 = String(b).split('')
    const minLen = Math.min(num1.length, num2.length)

    for (let i=0;i<minLen;i++) {
        const sum = Number(num1.at(-1-i)) + Number(num2.at(-1-i))

        if (sum >= 10) return true
    }

    return false
}

for (let i=0;i<N;i++) {
    for (let j=i+1;j<N;j++) {
        if (isCarry(nums[i], nums[j])) continue
        for (let k=j+1;k<N;k++) {
            if (isCarry(nums[i]+nums[j], nums[k])) continue

            maxSum = Math.max(maxSum, nums[i] + nums[j] + nums[k])
        }
    }
}

console.log(maxSum)