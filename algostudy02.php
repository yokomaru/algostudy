<?php
// 単純なループ

    $N = 10;
    $M = 10;
    print check($N,2);

function check($remain,$pre){
    global $M;
    global $N;
    if ($remain < 0){return 0;}
    if($remain == 0 ){return 1;}

    $cnt = 0;
    
    for($i = $pre ;$i <= $M ; $i++)
    {
       $cnt += check($remain - $i,$i);
    }
    
    return $cnt;
}

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