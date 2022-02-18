function getPin() {
    const pinInput = document.getElementById('pin-input');
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        pinInput.value = pin;
    }
    else {
        getPin();
    }
}

document.getElementById('generate-button').addEventListener('click', function () {
    getPin();
})
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const numberInput = document.getElementById('display-num');
    if (isNaN(number)) {
        if (number == 'C') {
            numberInput.value = '';
        }
    }
    else {
        const previousNumber = numberInput.value;
        const newNumber = previousNumber + number;
        numberInput.value = newNumber;
    }
})

function verifyPin() {
    const pin = document.getElementById('pin-input').value;
    const typedNumbers = document.getElementById('display-num').value;
    const notifySuccess = document.getElementById('notify-success');
    const notifyfail = document.getElementById('notify-fail');
    if (pin == typedNumbers) {
        notifySuccess.style.display = 'block';
        notifyfail.style.display = 'none';
    }
    else {
        notifySuccess.style.display = 'none';
        notifyfail.style.display = 'block';
    }
}

document.getElementById('submit-pin').addEventListener('click', function () {
    verifyPin();
})