let numbers = [17, 31, 77, 20, 63];
let spanEl = document.getElementById("indexOfNumber");

function findIndexOfNumber() {
    let userInputEl = document.getElementById("userInput");
    let userInputValue = parseInt(userInputEl.value);
    let index = numbers.findIndex(function(i) {
        if (i === userInputValue) {
            return true;
        }
        return false;
    });
    spanEl.textContent = index;
}
