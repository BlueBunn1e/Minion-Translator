var btnTrans = document.querySelector('#btn-click');

var txtInput = document.querySelector('#text-input');

var outputDiv = document.querySelector("#output");

function clickHandler(){

    outputDiv.innerText = txtInput.value;
};

btnTrans.addEventListener("click", clickHandler);