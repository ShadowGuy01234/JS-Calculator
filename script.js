function handleNum(num) {
    let dislpay = document.querySelector(".OnDisplay");
    dislpay.append(num);
}

function operate(operator) {
    let dislpay = document.querySelector(".OnDisplay");
    dislpay.append(` ` + operator + ` `);
}

function calc(arr) {
    let dislpay = document.querySelector(".OnDisplay");
    dislpay.innerHTML = '';
    let num1 = arr[0];
    let num2 = arr[2];
    let op = arr[1];

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
    let dislpay = document.querySelector(".OnDisplay");
    let content = dislpay.innerHTML;
    let params = content.split(" ");
    calc(params);
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