n = int(input())
arr = list(int(input()) for _ in range(n))
max_sum = 0

def isCarry(num1, num2):
    arr1 = list(map(int, str(num1)))
    arr2 = list(map(int, str(num2)))

    min_len = min(len(arr1), len(arr2))

    for i in range(min_len):
        if arr1[-1-i] + arr2[-1-i] >= 10:
            return True
    
    return False

def getMaxSum(a, b, c):
    if isCarry(a, b) or isCarry(b, c) or isCarry(a, c):
        return 0
    else:
        return a + b + c



for i in range(n):
    for j in range(i+1, n):
        for k in range(j+1, n):
            result = getMaxSum(arr[i], arr[j], arr[k])
            max_sum = max(max_sum, result)
        

if (max_sum == 0):
    print(-1)
else:
    print(max_sum)