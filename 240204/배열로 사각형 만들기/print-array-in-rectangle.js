const answer = Array.from({ length: 5 }, () => Array(5).fill(0))

for (let i=0;i<5;i++) {
    answer[0][i] = 1
}

for (let i=1;i<5;i++) {
    for (let j=0;j<5;j++) {
        if (i-1 < 0) {
            answer[i][j] = answer[i][j-1]
            continue
        }

        if (j-1 < 0) {
            answer[i][j] = answer[i-1][j]
            continue
        }
        
        answer[i][j] = answer[i-1][j] + answer[i][j-1]
    }
}

console.log(answer.map(row => row.join(' ')).join('\n'))