// 거리가 T인 구간 잡고 H 이상인 경우 최소 비용 구하기 
const fs = require('fs')
const [n, input] = fs.readFileSync(0).toString().trim().split('\n')
const [N, H, T] = n.split(' ').map(Number)
const nums = input.split(' ').map(Number)
let minCost = Number.MAX_SAFE_INTEGER

for (let i=0;i<N-T+1;i++) {
    let cost = 0
    for (let j=0;j<T;j++) {
        // 비용 구하기 
        cost += Math.abs(H - nums[i+j])
        
    }
    minCost = Math.min(minCost, cost)
}

console.log(minCost)