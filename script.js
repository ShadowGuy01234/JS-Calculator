function handleNum(num) {
    let dislpay = document.querySelector(".OnDisplay");
    dislpay.append(num);
}

function operate(operator) {
    let dislpay = document.querySelector(".OnDisplay");
    let num1 = dislpay.innerHTML;
    dislpay.append(operator);

}

function calc(num1, num2, op) {
    let dislpay = document.querySelector(".OnDisplay");
    dislpay.innerHTML = '';
    switch (op) {
        case '+':
            dislpay.append(add(num1, num2));
            break;
        case '-':
            dislpay.append(substract(num1,num2));
            break
        case '*':
            dislpay.append(mul(num1, num2));
            break;
        case '÷':
            dislpay.append(div(num1,num2)); 
            break;
    }
}

function handleCalc() {

}

function handleClear() {
    let dislpay = document.querySelector(".OnDisplay");
    dislpay.innerHTML = '';
}

function add(a, b) {
    return Number(a) + Number(b);
}

function substract(a, b) {
    return Number(a) - Number(b);
}

function mul(a, b) {
    return Number(a) * Number(b);
}

function div(a, b) {
    if (b === 0) return "Error";
    return Number(a) / Number(b);
}