//メモ化

M = 10;
N = 100;

var memo = {};

function check(remain,pre){
    // 一度計算したものがあれば、それを返す
    if(memo[[remain,pre]]) return memo[[remain,pre]];

    // 配置する人がいなくなると終了
    if (remain < 0) 
    return 0;
    if(remain == 0 ) 
    return 1;
    var cnt = 0;
    for(var i = pre ;i <= M ; i++)
    {
        cnt += check(remain -i,i);
    }
    return memo[[remain,pre]] = cnt;
}

console.log(check(N,2));