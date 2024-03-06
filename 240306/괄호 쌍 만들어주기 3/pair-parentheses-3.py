import sys

string = input()
n = len(string)
count = 0

for i in range(n):    
    for j in range(i+1, n):
        if string[i] == '(' and string[j] == ')':
            count += 1

print(count)