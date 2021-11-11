//Side 5

var items = document.querySelectorAll(".timeline li"); //Det visuelle af viewporten

//Tjekker om funktionen er i viewport (det som brugeren ser)
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

//Loop function. 
function callbackFunc() { //Starter i værdien 0 
    for (var i = 0; i < items.length; i++) {// mindre end længden skal loopet fortsætte
        if (isElementInViewport(items[i])) {
            items[i].classList.add("in-view");
        }
    }
}
window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);