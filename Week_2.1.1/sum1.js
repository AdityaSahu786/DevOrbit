function sum(n) {
    let ans = 0;
    for(i=0; i<=n; i++) {
        ans = ans + i;
    }
    return ans;
}

const ans = sum(100);
console.log(ans);