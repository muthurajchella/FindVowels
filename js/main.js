// let num = parseInt(prompt("Given Number Prime or Not"));
// let isPrime = true;

// for(let i=2; i<=num; i++){
//    if(i%2 === 0 && i%3 === 0 && i%5 === 0 && i%7 === 0){
//         console.log(i,"It's Not a Prime");
//    } 

//    if(i==2 || i==3 || i==5 || i==7){
//         console.log(i,"It's a PrimeNumber");
//    }

//    if(i%2 !== 0 && i%3 !== 0 && i%5 !== 0 && i%7 !== 0){
//     console.log(i,"It's a Prime");
// } 



let string = "Veera"
let count = 0;
 string = string.toLowerCase();
for(let i=0; i<string.length; i++){
    if(string [i] == "a" || string [i] == "e" || string [i] == "i" || string [i] == "o" || string [i] == "u"){
        count++;  
    }
}
console.log(count)
