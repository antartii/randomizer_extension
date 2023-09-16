var coinFlipValue = 0;
const coinFlipResultElement = document.getElementById("coinFlipResult");
const coinFlipButtonElement = document.getElementById("coinFlipButton");
const edgeCheckbox = document.getElementById("edgeCheck");

coinFlipButtonElement.addEventListener("click", coinFlip);

isEdgeActive = edgeCheckbox.checked;

function coinFlip(){
    if(!isEdgeActive){
        coinFlipValue = Math.floor(Math.random()*12002)+1;
        if(coinFlipValue===0 || coinFlipValue===1){
            coinFlipResultElement.innerHTML = "Edge";
            return null;
        }
    }
    
    coinFlipValue = Math.floor(Math.random()*2);
    if(coinFlipValue===0){
        coinFlipResultElement.innerHTML = "Head";
    }
    else if(coinFlipValue===1){
        coinFlipResultElement.innerHTML = "Tail";
    }

    console.log(edgeCheckbox.checked);
    return null;
};

console.log("coinFlip script loaded");