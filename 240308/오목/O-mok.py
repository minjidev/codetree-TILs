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
    global winner
    if cnt == 5:
        # 끝점 찾은 경우 
        winner = turn
        # 현재 방향 기준으로 2번 이동 
        location.extend([x - dir_arr[cur_dir][0] * 2 + 1 , y - dir_arr[cur_dir][1] * 2 + 1])
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
        if winner > 0: 
            break
        # 모든 격자에 대해 8방향 확인
        for k in range(DIR_LEN):
            cur = board[i][j]
            board[i][j] = -1
            DFS(i, j, cur, k, 1)
            board[i][j] = cur


if (winner>0):
    print(winner)
    print(location[0], location[1])
else:
    print(0)