const navCoinFlipButton = document.getElementById("navCoinFlip");
const navDiceButton = document.getElementById("navDice");
const coinFlipDiv = document.getElementById("coinFlipDiv");
const diceDiv = document.getElementById("diceDiv");
const itemClass = document.getElementsByClassName("item");
const navRangeButton = document.getElementById("navRange");
const rangeDiv = document.getElementById("rangeDiv")
const navRouletteButton = document.getElementById("navRoulette")
const rouletteDiv = document.getElementById("rouletteDiv");

var popupState = "coinFlip";

navRouletteButton.addEventListener("click", function(){
    changeState("roulette");
    return;
})

navRangeButton.addEventListener("click", function(){
    changeState("range")
    return;
})

navCoinFlipButton.addEventListener("click", function(){
    changeState("coinFlip")
    return;
});

navDiceButton.addEventListener("click", function(){
    changeState("dice")
    return;
});

function changeState(newState){
    if(!popupState !== newState){
        popupState = newState;
        loadPopupState()
    }
    return;
}

function loadPopupState(){
    for(i=0; i<itemClass.length; i++){
        itemClass[i].hidden = true;
    }
    if(popupState == "coinFlip"){
        coinFlipDiv.hidden = false;
    }
    else if(popupState == "dice"){
        diceDiv.hidden = false;
    }
    else if(popupState == "range"){
        rangeDiv.hidden = false;
    }
    else if(popupState == "roulette"){
        rouletteDiv.hidden = false;
    }
    return;
}

console.log("popup script loaded")