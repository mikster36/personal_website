var cards = document.getElementsByClassName("card");

function remove_cards(x = "all") {
    if (x === "all") {
        for (var i = 0; i < cards.length; i++) {
            cards[i].style.display = null;
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
        }
    }
}

function hide_all() {
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.display = "none";
    }
}