/**
 * Write binary number converter Here!
 * 
 * When yúser bring mouse over the element and clicks 
 * it triggers binary number conversion.
 * 
 * Add click events for work thumbnails to bring the user to my blog.
 */

function binaryToString(str) {
    var bin = str.split(" ");
    var binCode = [];
    for (i = 0; i < bin.length; i++) {
        binCode.push(String.fromCharCode(parseInt(bin[i], 2)));
    }
    return binCode.join("");

}

function giveAnswer() {
    let binary = document.getElementById("binary").dataset.value;
    let output = document.getElementById("output-text");
    output.innerHTML = binaryToString(binary);
}