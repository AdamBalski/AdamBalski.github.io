function getHeight() {
    return $(document).height();
}

function scrollTo(position) {
    document.body.scrollTop = position; // For Safari
    document.documentElement.scrollTop = position; // For Chrome, Firefox, IE and Opera
}

function scrollUp() {
    scrollTo(0);
}

function scrollDown() {
    scrollTo(getHeight());
}

function makeScrollUpAppear() {
    $('.navbar-scroll-up').css('display', 'flex');
}

function makeScrollUpDisappear() {
    $('.navbar-scroll-up').css('display', 'none');
}

function description() {
    makeScrollUpDisappear();

    $('.description').css('display', 'block');
    $('.main-content').css('display', 'none');

    $('#html').css('scroll-behavior', 'initial');
    
    scrollUp();

    $('#html').css('scroll-behavior', 'smooth');

}

function mainContent() {
    $('.description').css('display', 'none');
    $('.main-content').css('display', 'block');

    scrollDown();
}