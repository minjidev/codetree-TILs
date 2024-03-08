arr = input()
n = len(arr)
count = 0

for i in range(n):
    for j in range(i+1, n-1):
        if arr[i] == '(' and arr[i+1] == '(' and arr[j] == ')' and arr[j+1] == ')':
            count += 1 

print(count)