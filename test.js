function() {
    var a=1, b=2, fib=0, sum=2;

    while(fib <= 89) {
        fib = a + b;
        b=fib;
        a=b;
        if (fib%2===0) {
            sum=sum+fib
        }
    }
    return sum;
}()
