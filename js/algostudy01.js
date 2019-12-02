//単純なループ

M = 10;
N = 1000;

function check(remain,pre){
    if (remain < 0) 
    return 0;
    if(remain == 0 ) 
    return 1;
    var cnt = 0;
    for(var i = pre ;i <= M ; i++)
    {
        cnt += check(remain -i,i)
    }
    return cnt
}

console.log(check(N,2));