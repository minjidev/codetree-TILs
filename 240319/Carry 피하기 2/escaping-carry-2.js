const fs = require('fs')
const [n, ...arr] = fs.readFileSync(0).toString().trim().split('\n')
const N = +n
const nums = arr.map(Number)
let maxSum = -1

// isCarray(숫자 2개) => 각 자리수 더했을 때 carry 발생하면 true, 아니면 false 반환 
function isCarry(a, b) {
    for (let i=0;i<4;i++) {
        const divider = 10**i 

        const sum = Math.floor(a / divider) % 10 + Math.floor(b / divider) % 10

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