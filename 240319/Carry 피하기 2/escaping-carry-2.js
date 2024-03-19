const fs = require('fs')
const [n, ...arr] = fs.readFileSync(0).toString().trim().split('\n')
const N = +n
const nums = arr.map(Number)
let maxSum = -1

// isCarray(숫자 2개) => 각 자리수 더했을 때 carry 발생하면 true, 아니면 false 반환 
function isCarry(a, b) {
    for (let i=0;i<3;i++) {
        const mod = 10**(i+1) // 해당 자리수까지의 숫자 구하기
        const divider = 10**i // 해당 자리수 구하기

        const sum = Math.floor(a % mod / divider) + Math.floor(b % mod / divider)

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