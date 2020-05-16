/*Numbers Up and Down*/
function numUp() {
    let num = parseInt(document.getElementById("numberP").innerHTML);
    document.getElementById("numberP").innerHTML = num + 5;
}

function numDown() {
    let num = parseInt(document.getElementById("numberP").innerHTML);
    document.getElementById("numberP").innerHTML = num - 5;
}