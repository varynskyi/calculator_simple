var str;
var newStr;
var SYMBOL_KEYCODES = {
    '45':'0',
    '35':'1',
    '40':'2',
    '34':'3',
    '37':'4',
    '12':'5',
    '39':'6',
    '36':'7',
    '38':'8',
    '33':'9',
    '107':'+',
    '109':'-',
    '106':'*',
    '111':'/',
    '46':'.'
};
var ENTER_KEYCODE = 13;
var BACKSPACE_KEYCODE = 8;

function onClickClear () {
    str = document.getElementById("output");
    str.value="";
    newStr = document.querySelector(".result");
    newStr.value="";
}
function onClickCalculate () {  
    newStr = document.querySelector(".result");
    newStr.value= '=' + ' ' + eval(str.value);
}

function onClickNumber (num) {
    str = document.getElementById("output");
    str.value=str.value + num;
}

function onClickDelete () {
    str = document.getElementById("output");
    var subStr = str.value.slice(0, -1)
    str.value = subStr === '' ? '0' : subStr;
}

document.addEventListener('keydown', function(evt) {
    if (evt.keyCode in SYMBOL_KEYCODES) {
        evt.preventDefault();
        onClickNumber(SYMBOL_KEYCODES[evt.keyCode])
    } else if (evt.keyCode === ENTER_KEYCODE) {
        onClickCalculate();
    } else if (evt.keyCode === BACKSPACE_KEYCODE) {
        onClickDelete();
    }
})

function onClickMessage() {
    str = document.getElementById("output");
    str.value= 'by Varynskyi';
    newStr = document.querySelector(".result");
    newStr.value = '^.^';
}
