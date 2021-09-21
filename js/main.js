var input1 = document.getElementById('js-input');
var select = document.getElementById('js-select');
var input2 = document.getElementById('js-input2');
var button = document.getElementById('js-btn');
var textarea = document.getElementById('js-area');

// textarea.style.fontSize = '48px'

button.addEventListener('click', function (e) {
    // console.log(input1.value, select.value, input2.value);

    Number(input1.value);
    Number(input2.value);

    if (select.value == '+') {
        textarea.textContent = Number(input1.value) + Number(input2.value);
    } else if (select.value == '-') {
        textarea.textContent = Number(input1.value) - Number(input2.value);
    } else if (select.value == '*') {
        textarea.textContent = Number(input1.value) * Number(input2.value);
    } else if (select.value == '/') {
        textarea.textContent = Number(input1.value) / Number(input2.value);
    }
});