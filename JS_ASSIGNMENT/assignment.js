function multiples(){
    for(let l = 0; l <= 100; l++){
        if(l % 3 === 0 && l % 5 === 0){
            console.log("FizzBuzz")
        }
        else if(l % 3 === 0){
            console.log("Fizz")
        }
        else if(l % 5 === 0){
            console.log("Buzz")
        }
        else{
            console.log(l)
        }
    }
}
multiples();

function sumOfMultiples(){
    var sum = 0;
    for(let n = 0; n < 1000; n++){
        if( n % 3 === 0 && n % 5 ===0){
            sum += n
        }
    }
    console.log(sum)
}
sumOfMultiples();

function divisibility(){
    for( m = 0; m <= 20; m++){
        if( m % 2 === 0){
            console.log( m + " " + "Is even")
        }
        else{
            console.log( m + " " + "Is odd")
        }
    }
}
divisibility();


function largestNumber(){
    let largest_number = 0;
    let num = [-2,4-5,6,0]
    for( let f = 0; f < num.length; f++){
        if( largest_number < num[f]){
            largest_number = num[f]
        }  
    }
    console.log(largest_number)
    
}
largestNumber();


function largestNum(){
    var b = 10;
    var p = 40;
    if( b > p){
        console.log(b)
    }
    else{
        console.log(p)
    }
}
largestNum();

function leapYear(){
    for( let t = 2000; t <= 2022; t ++){
        if( t % 4 === 0 || t % 400 === 0){
            console.log( t + " " + "Is a Leap year.")
        }
        else{
            console.log(t)
        }
    }
}
leapYear();