var memo = [1];
function factrial(n){
    if (memo[n]) return memo [n]
    return memo[n] = n * factrial(n-1);

}

function ncr(n,r){
    return factrial(n) / (factrial(r) * factrial(n-r));
}

console.log(ncr(5,3));
console.log(memo[0]);