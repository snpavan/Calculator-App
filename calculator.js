let value = ''; 

function appendDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    try {
        let display = document.getElementById("display");
        display.value = eval(display.value);  
    } catch (error) {
        display.value = "Error";
    }
}
