function isPrime(n) {
      if (n <=1) return false;
        for (var i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
              if (n % i === 0) 
              return false;
        }
        return true;
  }
  
  function isSemiPrime(n) {
        if(isPrime(n)) 
              return false;
        for (var i = 1; i <= n/2; i ++) {
              if(n % i == 0){
                    if(isPrime(i) == true && isPrime(n/i)== true)
                    {
                          return true;
                    }
              }
        }
    return false;
  }