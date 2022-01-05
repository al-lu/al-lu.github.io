/**
 * Write binary number converter Here!
 * 
 * Binary conversion could be done with other ways too. 
 * Now I'm thinking that should I just replace the binary numbers by their text equivalent. 
 * Or just just leave it like it is by just appending the converted text beneath the numbers.
 * 
 * When user bring mouse over the element and clicks, 
 * it triggers binary number conversion.
 * 
 * Add click events for work thumbnails to bring the user to my blog. 
 * Going to do this later because I have to actually write something first.
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

// Click event for redirecting user to selected game page.

$(".work-seven").click(function () {
    window.location = $(this).find("a").attr("href");
    return false;
});
