function showOrHideProperties(e) {
    var element = e.getElementsByClassName("properties")[0];
    var content = element.innerHTML;
    if (element.classList.contains("hidden")) {
        element.innerHTML = "";
        disableOthers(e);
        element.classList.remove("hidden");
        e.className += " selected";
        element.style.animation = "2.5s show";
        setTimeout(function () {
            element.innerHTML = content;
            element.getElementsByClassName("text")[0].style.animation = "1s showText";
        }, 2499);
    }
    else {
        element.getElementsByClassName("text")[0].style.animation = "1s hideText";
        setTimeout(function () {
            element.innerHTML = "";
            element.style.animation = "2.5s hide";
            setTimeout(function () {
                element.className += " hidden";
                element.innerHTML = content;
                e.classList.remove("selected");
                enableAll();
            }, 2250);
        }, 1000);
    }
}
function disableOthers(e) {
    var elements = document.getElementsByClassName("element");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.pointerEvents = "none";
    }
    e.style.pointerEvents = "all";
}
function enableAll() {
    var elements = document.getElementsByClassName("element");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.pointerEvents = "all";
    }
}