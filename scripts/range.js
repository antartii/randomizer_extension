//update on don't allow write a dot in the decimal input + don't allow write a dot on the max and min input while float checkbox isn't active

const minRangeInput = document.getElementById("minRange");
const maxRangeInput = document.getElementById("maxRange");
const startRangeButton = document.getElementById("rangeButton");
const rangeResultElement = document.getElementById("rangeResult");
const rangeSelectElement = document.getElementById("rangeSelect");
const floatCheckButton = document.getElementById("floatCheck");
const decimalsInput = document.getElementById("decimalsNumber");
const decimalsLabel = document.getElementById("decimalsLabel")

floatCheckButton.addEventListener("change", function(){
    if(floatCheckButton.checked){
        decimalsLabel.hidden = false;
    }
    else{
        decimalsLabel.hidden = true;
    }
})

// use jquery
// restrict bind

startRangeButton.addEventListener("click", function(){
    let min = 0;
    let max = parseInt(maxRangeInput.value);
    let rangeSelect = rangeSelectElement.options[rangeSelectElement.selectedIndex]
    let rangeSelectValue = rangeSelect.value;
    let isFloatActive = floatCheckButton.checked;
    let decimal = decimalsInput.value;

    if(isFloatActive){
        min = parseFloat(minRangeInput.value) * 10**decimal
        max = parseFloat(maxRangeInput.value) * 10**decimal
    }
    else{
        min = parseInt(minRangeInput.value)
        max = parseInt(maxRangeInput.value)
    }

    // Modifying the range according to what is asked to do
    if(rangeSelectValue === "bothExclusive"){
        min+=1;
        max-=1;
    }
    else if(rangeSelectValue === "minExclusive"){
        min+=1;
    }
    else if(rangeSelectValue === "maxExclusive"){
        max-=1;
    }

    // Calculating the result depending if we use float value or int value
    if(isFloatActive){
        let decimals = decimalsInput.value;
        result = randomFloatBothInclusive(min, max, decimals);
    }
    else{
        result = randomIntBothInclusive(min, max);
    }
    rangeResultElement.innerHTML = result;
    return;
})

function randomFloatBothInclusive(min, max, decimals){
    return Math.floor((Math.random() * (max - min + 1) + min)) / (10**decimals);
}

function randomIntBothInclusive(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}