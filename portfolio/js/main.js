/**
 * Write binary number converter Here!
 * 
 * When yúser bring mouse over the element and clicks 
 * it triggers binary number conversion.
 * 
 * Add click events for work thumbnails to bring the user to my blog.
 */

function binaryToString(str) {
    var newBin = str.split(" ");
    var binCode = [];
    for (i = 0; i < newBin.length; i++) {
        binCode.push(String.fromCharCode(parseInt(newBin[i], 2)));
    }
    return binCode.join("");

}

function giveAnswer() {
    let binary = document.getElementById("binary").dataset.value;
    let output = document.getElementById("output-text");
    output.innerHTML = binaryToString(binary)
}