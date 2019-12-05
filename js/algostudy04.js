function nPr(n,r){
    var result = 1;
    for(var i = r;i <= n;i++)
    {
        result *= i;
    }
    return result;
}

console.log(nPr(5,3));
