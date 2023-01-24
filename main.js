var cards = document.getElementsByClassName("card");

function remove_cards(x = "all") {
    if (x === "all") {
        for (var i = 0; i < cards.length; i++) {
            cards[i].style.display = null;
            if (!cards[i].parentElement.classList.contains("col-lg")){
                cards[i].parentElement.classList.add("col-lg");
            }
        }
    }
    else if (x === "personal"){
        hide_all();
        var personal = document.getElementsByClassName(x);
        for (var i = 0; i < personal.length; i++) {
            personal[i].style.display = null;
        }
    }
    else {
        hide_all();
        var collaborative = document.getElementsByClassName(x);
        for (var i = 0; i < collaborative.length; i++) {
            collaborative[i].style.display = null;
            if (collaborative[i].parentElement.classList.contains("col-lg")){
                collaborative[i].parentElement.classList.remove("col-lg");
            }
        }
    }
}

function hide_all() {
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.display = "none";
    }
}

function toggle_col(element) {
    if (element.classList.contains("col-lg")) {
            element.classList.remove("col-lg");
        }
    else {
        element.classList.add("col-lg");
    }
}

$(document).ready(function(){
    if (window.innerWidth <= 576) {
        var btns = document.getElementById("btn group");
        btns.classList.add("btn-group-sm");
    }
});

$(window).resize(function(){
    var btns = document.getElementById("btn group");
    if (window.innerWidth <= 576){
        btns.classList.add("btn-group-sm");
    }
    else {
        btns.classList.remove("btn-group-sm");
    }
});