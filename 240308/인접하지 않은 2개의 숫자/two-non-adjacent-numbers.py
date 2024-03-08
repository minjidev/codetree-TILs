# index 값 차이가 1보다 큰 경우 max 확인
import sys

max_sum = - sys.maxsize
n = int(input())
arr = list(map(int, input().split()))


for i in range(n):
    for j in range(i+1, n):
        if (abs(i-j) > 1):
            sum_nums = (arr[i] + arr[j])
            max_sum = max(max_sum, sum_nums)

print(max_sum)