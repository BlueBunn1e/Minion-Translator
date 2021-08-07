var btnTrans = document.querySelector('#btn-click');

var txtInput = document.querySelector('#text-input');

var outputDiv = document.querySelector("#output");

var urlApi = "https://api.funtranslations.com/translate/minion.json"

function getUrl(input){
    return urlApi + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error accured", error);
    alert("Somthing wrong with server: try again after some time");
}

function clickHandler(){
    var inputText = txtInput.value;

    fetch(getUrl(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)
    
};

btnTrans.addEventListener("click", clickHandler);