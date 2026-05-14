


for (var i=0; i<5 ; i++ ){
    console.log(i);
}

function is_prime(s){
    for (var i = 2;i<=Math.sqrt(s) ; i++){
        if (s%i==0){
            return false;
        }
    }
    return true;
}

var num=5;
if (is_prime(num)) {
    console.log(num+"is a Prime Number");
}else{
    console.log(num + "is not a prime Number");
}

function is_palindrome(s){
    var t=num;
    var rev=0
    while (t>0){
        var r=t%10;
        rev=rev*10+r;
        t=Math.floor(t/10);
    }
    if (rev==num){
        return true;
    }else{
        return false;
    }
}

var num=121

if (is_palindrome(num)){
    console.log(num+"is a palindrome");
}else{
    console.log(num +"is not a palidrome");
}
