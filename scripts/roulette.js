const optionDivList = document.getElementsByClassName("optionDiv");
const rouletteResultElement = document.getElementById("rouletteResult");
const addRouletteButtonList = document.getElementsByClassName("addRouletteButton");
const delRouletteButtonList = document.getElementsByClassName("delRouletteButton");
const labelOptionInputList = document.getElementsByClassName("labelOptionInput");
const optionInputList = document.getElementsByClassName("optionInput");
const startRouletteButton = document.getElementById("startRoulette")

for(let i=0; i<optionDivList.length; i++){
    addRouletteButtonList[i].addEventListener("click", function(){
        optionDivList[i].insertAdjacentElement("afterend", createRouletteDiv())
        reloadPlacementOption();
    })
    delRouletteButtonList[i].addEventListener("click", function(){
        optionDivList[i].parentNode.removeChild(optionDivList[i])
        reloadPlacementOption();
    })
}

function createRouletteDiv(){
    let newDiv = document.createElement("div");
    newDiv.className="optionDiv";

    let newLabelOptionName = document.createElement("label");
    newLabelOptionName.className="labelOptionName";
    newLabelOptionName.innerHTML = "option";

    let newOptionInput = document.createElement("input");
    newOptionInput.className="optionInput";
    newOptionInput.type="text";

    let newAddRouletteButton = document.createElement("button");
    newAddRouletteButton.className="addRouletteButton";
    newAddRouletteButton.innerHTML="add";

    newAddRouletteButton.addEventListener("click", function(){
        newDiv.insertAdjacentElement("afterend", createRouletteDiv())
        reloadPlacementOption();
    })

    let newDelRouletteButton = document.createElement("button");
    newDelRouletteButton.className="delRouletteButton";
    newDelRouletteButton.innerHTML="delete";

    newDelRouletteButton.addEventListener("click", function(){
        newDiv.parentNode.removeChild(newDiv)
        reloadPlacementOption();
    })

    newDiv.appendChild(newLabelOptionName);
    newDiv.appendChild(newOptionInput);
    newDiv.appendChild(newAddRouletteButton);
    newDiv.appendChild(newDelRouletteButton);
    return newDiv;
}

function reloadPlacementOption(){
    for(i=0; i<optionDivList.length; i++){
        optionDivList[i].querySelector(".labelOptionName").innerHTML = "option " + String(i+1);
    }

    if(optionDivList.length===1){
        optionDivList[0].getElementsByClassName("delRouletteButton")[0].hidden = true;
    }

    if(optionDivList.length>1){
        optionDivList[0].getElementsByClassName("delRouletteButton")[0].hidden = false;
    }
}

function startRoulette(options){
    let result='';
    let resultValue = Math.floor(Math.random() * options.length)
    result = options[resultValue];
    return result;
}

startRouletteButton.addEventListener("click", function(){
    let options = []
    for(i=0; i<optionInputList.length; i++){
        options.push(optionInputList[i].value)
    }
    console.log(startRoulette(options))
    rouletteResultElement.innerHTML = startRoulette(options);
})