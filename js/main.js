function scrollUp() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function makeScrollUpAppear() {
    var elements = document.getElementsByClassName("navbar-scroll-up");

    for(i = 0; i < elements.length; i++) {
        elements[i].style.display = "flex";
    }
}