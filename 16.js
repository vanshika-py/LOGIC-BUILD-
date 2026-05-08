//  Check if a number is prime.

// let num = 12;

// for(let i = 1; i<= num; i++){
//     if(num === num && num)
// }

// let num = 10;




// if(num%i === 0 && num === num){
//     console.log("prime number")
// }else{
//     console.log("not a prime number")
// }

// let num = 10;
// let i = 3;

// if(num%i !== 0){
//     console.log("prime number")
// }
// else{
//   console.log("not a prime number")
// }


// let num = 10;

// for(let i = 1; i <= num; i++){
//     if(num%i !== 0){
//         console.log("yes prime")
// }
// else{
//     console.log("no")
// }
// }


let num = 15;

for(let i = 1; i <= num; i++){
    if(num%i === 0){
        if(i%num === 1){
            continue;
        }
        console.log("not prime")
        break;
    }
  else{
    console.log("prime")
  }
}

  