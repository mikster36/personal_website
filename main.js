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

function readMore() {
    var dots = document.getElementById("readMoreDots");
    var moreText = document.getElementById("more");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        moreText.style.display = "inline";
    }
}

// Modal stuff

document.addEventListener('DOMContentLoaded', function () {
    var mediaLinks = document.querySelectorAll('.media-link');
    var mediaModal = new bootstrap.Modal(document.getElementById('mediaModal'));

    mediaLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            var fileSrc = this.getAttribute('href');
            var fileType = getFileType(fileSrc);

            if (fileType === 'image') {
                document.querySelector('#mediaModal .modal-body').innerHTML = '<img src="' + fileSrc
                + '" class="img-fluid">';
            } else if (fileType === 'pdf') {
                document.querySelector('#mediaModal .modal-body').innerHTML = '<embed src="' + fileSrc
                + '" type="application/pdf" class="embed-responsive-item" height="500" width="100%">';
            }

            mediaModal.show();
        });
    });

    mediaModal._element.addEventListener('hidden.bs.modal', function () {
        document.querySelector('#mediaModal .modal-body').innerHTML = '';
    });

    function getFileType(fileSrc) {
        var fileExtension = fileSrc.split('.').pop().toLowerCase();
        if (fileExtension === 'png' || fileExtension === 'jpg' || fileExtension === 'jpeg' || fileExtension === 'gif') {
            return 'image';
        } else if (fileExtension === 'pdf') {
            return 'pdf';
        } else {
            return 'unknown';
        }
    }
});
