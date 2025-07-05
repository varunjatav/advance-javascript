// a normal function that increment a count


// function increment(){
//     let count = 0;
//     count = count + 1;
//     return count;
// }

// console.log(increment());  // 1
// console.log(increment());  // 1
// console.log(increment());  // 1

// a function with closure that increments a count

function increment(){
    let count = 0;
    return function(){
        count = count + 1;
        return count;
    }
}

const myInc = increment();
console.log(myInc()); // 1 
console.log(myInc()); // 2
console.log(myInc()); // 3


const arrayCreate = () => {
    let arr = [];
    return function(arg){
        arr.push(arg);
        return arr;
    }
}

const myArr = arrayCreate();
console.log(myArr(1));
console.log(myArr(2));
console.log(myArr(3));