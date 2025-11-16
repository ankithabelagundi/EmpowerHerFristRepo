let number =7;
let isPrime = true;
if(number<=1){
    isPrime=false;
} else{
    for(let i=2;i<number;i++){
        if(number%i===0){
        isPrime=false;
        break;
      }
    }
}
console.log("Is number prime?"+
    isPrime);
    let num=10;
    let isEven=(num%2===0);
    console.log("Is number even?"+
    isEven);