//動的計画法

M = 10;
N = 100;

var table = new Array(M + 1);

for (var i = 0;i <= M;i++){
    table[i] = new Array(N + 1);
    for(var j = 0;j <= N;j++) table[i][j] = 0;
}

for(var i = 0; i <= M; i++)
table[i][0] = 1;

for (var i = 1 ; i <= M; i++){
    for (var j = 2 ; j <= N; j++){
        if(( i >= 2) && (j >= i))
        table[i][j] = table[i][j - i];
        if(i > 2) table[i][j] += table[i-1][j];
    }
}

console.log(table[M][N]);
