
// create my array
var whatIDoBest = ["Jag är bra på att spela hockey",
                   "Jag är bra på att köra speedway",
                   "Jag är bra på HTML och CSS",
                   "Jag är bra på att ta hand om djur"];
                   console.log(whatIDoBest);

function writeMyStrengths() {
    // create div
    var createDiv = document.createElement("div");

    for(var i = 0; i < whatIDoBest.length; i++){
        var createParagraph = document.createElement("p");
        createParagraph.appendChild(document.createTextNode(whatIDoBest[i]));

        createDiv.appendChild(createParagraph);
    }
    return createDiv;
}

document.getElementById("myStrengths").appendChild(writeMyStrengths(whatIDoBest[0]));

