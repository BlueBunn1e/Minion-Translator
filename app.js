var btnTrans = document.querySelector('#btn-click');

var txtInput = document.querySelector('#text-input');

var outputDiv = document.querySelector("#output");

var urlApi = "https://api.funtranslations.com/translate/minion.json"

function clickHandler(){

    outputDiv.innerText = txtInput.value;
};

btnTrans.addEventListener("click", clickHandler);