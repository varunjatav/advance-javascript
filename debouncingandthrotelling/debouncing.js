

function debounce(func,delay) {
    let id;
    return function(args){
        clearTimeout(id);
        id = setTimeout(() => func(args), delay);
    }
}
const callAPI = (args)=> {
    console.log('calling api...',args);
    
}

const debounceFunc = debounce(callAPI, 500);

document.getElementById('input-text').addEventListener('input', (e) => {
    debounceFunc(e.target.value)
});

