const diceResultElement = document.getElementById("diceResult")
const diceSelectElement = document.getElementById("diceSelect")
const rollDiceButton = document.getElementById("diceButton")

rollDiceButton.addEventListener("click", function(){
    const diceSelect = diceSelectElement.options[diceSelectElement.selectedIndex]
    const diceSelectValue = parseInt(diceSelect.value);

    diceResultElement.innerHTML =  rollDice(diceSelectValue)
})

function rollDice(diceType){
    return diceResult = Math.floor(Math.random() * diceType) + 1
}

console.log("dice script loaded")