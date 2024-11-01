function reverse(ch1) {
    var n=ch1.length ;
    var ch2=""
    for (let i = 0; i < n; i++) {
        ch2=ch1[i]+ch2   
    }
    return ch2
    
}

function count(ch) {
    var n=ch.length ;
    return n
    
}
function sum(arr) {
    var s=0
    var n=arr.length
    for (i=0 ; i<n ; i++){
        s=s+arr[i]
    }
    return s     
}
function fact(num) {
    var n=0
    for (i=1 ; i<num ;i++){
        n=i*(i+1)
    }
    return n
    
}
function prime(num) {
    s=0
    for (let i=1 ; i<= num ;i++) {
        if (num%i==0) {
            s=s+1
        }
    }
    if (s==2){
        return "prime"
    }
    else {
        return "not prime"
    }
    
}
function max_min(arr) {
    var max=arr[0] 
    var min=arr[0]
    n=arr.length
        for (var i=0 ; i<n ;i++) {
            if (arr[i]>max) {
                max=arr[i]
                
            }
            else {
                min=arr[i]
            }
        }
        return max - min  
}
function fibonacci(num){
    let arr=[0,1]
    for (let i = 1; i < num; i++){
        arr[i+1]=arr[i]+arr[i-1]
    }
    return arr
}

