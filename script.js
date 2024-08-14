let numbers = [];

function addNumber() {
    const numberInput = document.getElementById('numberInput');
    const number = parseFloat(numberInput.value);
    if (!isNaN(number)) {
        numbers.push(number);
        numberInput.value = '';
        displayNumbers();
    } else {
        alert('Por favor, digite um número válido.');
    }
}

function removeNumber() {
    const numberInput = document.getElementById('numberInput');
    const number = parseFloat(numberInput.value);
    if (!isNaN(number)) {
        const index = numbers.indexOf(number);
        if (index !== -1) {
            numbers.splice(index, 1);
            numberInput.value = '';
            displayNumbers();
        } else {
            alert('Número não encontrado na lista.');
        }
    } else {
        alert('Por favor, digite um número válido.');
    }
}

function displayNumbers() {
    const numberList = document.getElementById('numberList');
    numberList.innerHTML = numbers.join(', ');
}

function sortAscending() {
    numbers.sort((a, b) => a - b);
    displayNumbers();
}

function sortDescending() {
    numbers.sort((a, b) => b - a);
    displayNumbers();
}
