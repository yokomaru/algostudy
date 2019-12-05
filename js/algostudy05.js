function nCr(n,r){
    var resultP = 1;
    var resultC = 1;
    for(var i = r;i <= n;i++)
    {
        resultP *= i;
    }
    
    for(var i = 1;i <= r;i++){
        resultC *= i;
    }
return resultP/resultC
}

console.log(nCr(5,3));
