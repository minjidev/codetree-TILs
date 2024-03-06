num = input()
num_len = len(num)
max_num = 0

# 각 숫자 바꿔서 십진수로 변경 후 비교 
def change(cur):
    if (cur == "0"):
        return "1"
    else:
        return "0"


for i in range(num_len):
    new_num = num[0:i] + change(num[i]) + num[i+1:]
    result = 0

    for j in range(num_len-1, -1, -1):
        result += 2**(num_len - j -1) * int(new_num[j])

    
    max_num = max(max_num, result)

print(max_num)