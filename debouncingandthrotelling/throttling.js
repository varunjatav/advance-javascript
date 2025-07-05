
function throttle(func,limit) {
    let isThrottling = false;
    return function(){
        const args = arguments;
        const ctx = this;
        if(!isThrottling){
            func.apply(ctx,args);
            isThrottling = true;
            setTimeout(() => isThrottling = false, limit)
        }
       
    }
}
function throttleAPI(){
    console.log('Head shot');
}

const throttleFunc = throttle(throttleAPI, 500);
document.getElementById('shoot').addEventListener('click', () => {
    throttleFunc();
})

function throttle2(func,limit) {
    let isThrottling = false;
    return function(){
        const args = arguments;
        const ctx = this;
        if(!isThrottling){
            func.apply(ctx,args);
            isThrottling = true;
            setTimeout(() => isThrottling = false, limit)
        }
       
    }
}
function Shoot(args){
    console.log(args);
}

const throttleFunc2 = throttle2(Shoot, 500);
document.getElementById('throttle').addEventListener('input', (e) => {
    throttleFunc2(e.target.value);
})