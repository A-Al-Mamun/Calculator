
var result = document.getElementById('result');
var btn = document.querySelectorAll('button');

function cal(exp){
    

    try {
        return new Function('return ' + exp)();
    } catch (error) {
        return 'Malformed Operation';
    }
}

function op(inputValue) {
    if(inputValue === 'C'){
        result.value = '';
    } else if(inputValue === 'DEL'){
        result.value = result.value.slice(0, -1);
    } else if(inputValue === '='){
        result.value = cal(result.value);
    } else {
        result.value += inputValue;
    }
}


btn.forEach(button =>{
    let inputValue = button.innerHTML;
    button.addEventListener('click', function (){
        op(inputValue);
    });
});