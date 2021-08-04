var btnTrans = document.querySelector('#btn-click');

var texInput = document.querySelector('#text-input');

 console.log(texInput);

function clickHandler(){
    console.log("clicked");
    console.log("input",texInput.value);
};

btnTrans.addEventListener("click", clickHandler);