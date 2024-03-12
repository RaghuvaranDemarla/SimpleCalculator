let display = document.getElementById("display");

function inputToDisplay(input) {
    display.innerText += input;
}

function calculate() {
    try {
        display.innerText = eval(display.innerText);
    } catch (error) {
        display.innerText = "error";
    }
}
function elementDelete() {
    let value = display.innerText;
    if (value === "error" ) {
        display.innerText = "";
    } else {
        let res = display.innerText.slice(0, length - 1);
        display.innerText = res;
    }
}

function allClear(params) {
    display.innerText = "";
}