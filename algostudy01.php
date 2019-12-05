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
