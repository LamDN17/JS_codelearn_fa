function minTransform(n){
    var dem = 0;
    while(n>1){
        if(n%2 == 0)
        {
            n /= 2;
            dem++;
        }
        else if ((n + 1) % 4 == 0 && (n - 1) !==2)
        {
            n +=1;
            dem++;
        }
        else
        {
            n -= 1;
            dem++;
        }
    }
    return dem++;
}

minTransform(7); //Ex: n=7;