# DFS로 8방향 연속 5개 더해지는 순간 정답 출력  
# (행, 열) 출력 
BOARD_LEN = 19
DIR_LEN = 8
board = [list(map(int, input().split())) for _ in range(BOARD_LEN)]
dir_arr = [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [1, 1], [-1, 1], [1, -1]] # 8방향 확인 
location = []
winner = 0
def isOutside(x, y):   
    return x < 0 or y < 0 or x >= BOARD_LEN or y >= BOARD_LEN


def DFS(x, y, turn, cur_dir, cnt):
    if cnt == 5:
        global winner
        winner = turn
        location.extend([x, y])
        return
    
    nx = x + dir_arr[cur_dir][0]
    ny = y + dir_arr[cur_dir][1]
    # 격자 외부이거나 방문한 경우 skip 
    if isOutside(nx, ny) or board[nx][ny] != turn: return

    # 같은 숫자인 경우 같은 방향으로 이동 
    board[nx][ny] = -1
    DFS(nx, ny, turn, cur_dir, cnt + 1)
    board[nx][ny] = turn



for i in range(BOARD_LEN):
    for j in range(BOARD_LEN):
        if board[i][j] == 0: 
            continue
        # 모든 격자에 대해 8방향 확인
        for k in range(DIR_LEN):
            cur = board[i][j]
            board[i][j] = -1
            DFS(i, j, cur, k, 1)
            board[i][j] = cur


if (winner>0):
    print(winner)
    [r1, c1, r2, c2] = location
    # 열로 놓인 경우 
    if r1 == r2:
        print(r1+1, (c1+c2)//2+1)
    # 행으로 놓인 경우
    elif c1 == c2:
        print((r1+r2)//2+1, c1+1) 
    # 대각선으로 놓인 경우 
    else:
        print((r1+r2)//2+1, (c1+c2)//2+1)
else:
    print(0)