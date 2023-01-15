const inputANode = document.querySelector(".js-input-a");
const inputBNode = document.querySelector(".js-input-b");
const selectOperNode = document.querySelector(".js-select-operation");
const btnNode = document.querySelector(".js-btn-result");
const outputNode = document.querySelector(".js-output");

btnNode.addEventListener('click', function() {
    const a = Number(inputANode.value);
    const b = Number(inputBNode.value);
    const operation = selectOperNode.value;
    const result = calculate({a,b,operation});

    outputNode.innerHTML = result;


});

