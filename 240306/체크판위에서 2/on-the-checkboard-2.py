R, C = map(int, input().split())
board = [list(input().split()) for _ in range(R)]
cnt = 0
# (1, C-2), (2, C-1)
for i in range(1, R-2):
    for j in range(1, C-2):
        for k in range(i+1, R-1):
            for l in range(j+1, C-1):
                if board[i][j] != board[0][0] and board[k][l] == board[0][0] and board[k][l] != board[R-1][C-1]:
                    cnt += 1


print(cnt)