function myFunction(l, r) {
    maxPrime = 0;
    minPrime = 999;
    count = 0;
    for(let i = l; i <= r; i++) {
        let prime = isprime(i);
        if(prime == 1) {
            count += 1;
            if (i > maxPrime) 
                maxPrime = i;
            if(i < minPrime)
                minPrime = i;
        }
    }
    if(maxPrime == 0 && minPrime == 0)
        document.write(-1);
    else if(count == 1)
        document.write(0);
    else    
        document.write(maxPrime - minPrime);
}

function isPrime(number) {
    flag = 0;
    for(let i = 2; i <= number / 2; i++) {
        if(number % i == 0) {
            flag = 1;
        }
    }
    if(flag == 1)
        return 0;
    else 
        return 1;
}

l = prompt("Enter L");
r = prompt("Enter r");
myFunction(l, r);