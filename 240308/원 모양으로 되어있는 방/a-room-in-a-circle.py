# 각 방부터 시작할 경우 
# 반시계 방향으로 돌면서 N-1번 이동할 때 각각 이동 합 구하기 

import sys
min_dist = sys.maxsize

n = int(input())
arr = [int(input()) for _ in range(n)]

for i in range(n):
    sum_dist = 0
    for j in range(n-1):
        nextIndex = (i+1+j) % n
        sum_dist += arr[nextIndex] * (j+1)

    min_dist = min(min_dist, sum_dist)

print(min_dist)