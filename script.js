function handleNum(num) {
    let dislpay = document.querySelector(".OnDisplay");
    dislpay.append(num);
}

function operate(operator) {
    let dislpay = document.querySelector(".OnDisplay");
    let content = dislpay.innerHTML;
    let params = content.split(" ");
    if (dislpay.innerHTML.length == 0) {
        handleClear();
        return;
    }
    if (params.length >= 3) {
        calc(params);
    }
    dislpay.append(` ` + operator + ` `);
}

function calc(arr) {
    let dislpay = document.querySelector(".OnDisplay");
    if (arr.length != 3) {
        dislpay.innerHTML = 'Error';
        return false;
    }
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

function handleDelete() {
    let dislpay = document.querySelector(".OnDisplay");
    let content = dislpay.innerHTML.split("");
    let lastElem = content.pop();
    if (lastElem == ' ' || lastElem == '+' || lastElem == '-' || lastElem == '*' || lastElem == '÷') {
        content.pop();
        content.pop();
    }
    dislpay.innerHTML = content.join("");
}

function handleDecimal() {
    let dislpay = document.querySelector(".OnDisplay");
    let content = dislpay.innerHTML.split(" ");
    content.forEach((currValue) => {
        if (currValue.includes('.') || currValue.includes('+') || currValue.includes('-') || currValue.includes('*') || currValue.includes('÷')) {
            return;
        }
        else {
            dislpay.append('.');
        }
    })
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
    if (b === '0') {
        window.alert( "If you’re trying to break me, you’ll have to try harder. 😎");
        return "";
    }
    return Number(a) / Number(b);
}