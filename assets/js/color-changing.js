/*Constant color change Event via mouse move*/
document.addEventListener('mousemove', function () {
    randomColor('mouse-move-color-change');
});

/*Random color*/
function randomColor(elementID) {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let rgbRandom = `rgb(${r},${g},${b})`;
    document.getElementById(elementID).style.background = rgbRandom;
}

    