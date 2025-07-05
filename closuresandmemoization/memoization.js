
// memoized the add functionality
function addMemoization(){
    let cache = {};
    return function(x,y){
        if(x+y in cache){
            console.log("return from cache");
            return cache[x+y];
        }
        console.log("calculating");
        return cache[x+y] = x+y;

    }
}
const add  = addMemoization();
console.log(add(5,5));
console.log(add(6,6));
console.log(add(5,5));

// memoized the square functionality

function squareMemoized(){

    let cache = {};

    return  function(x){
        if(x in cache){
            console.log("return from cache");
            return cache[x];
        }
        console.log("calculating");
        cache[x] = x*x;
        return cache[x];
    }
    
}
mySquare = squareMemoized();
console.log(mySquare(4));
console.log(mySquare(4));
console.log(mySquare(5));
console.log(mySquare(6));