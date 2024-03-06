import sys

arr = input()
n = len(arr)
count = 0

for i in range(n):
    if arr[i] == ')': 
        continue
    
    for j in range(i+1, n):
        if arr[j] == ')':
            count += 1

print(count)