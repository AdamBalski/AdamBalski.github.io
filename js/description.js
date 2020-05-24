function loadDescription() {
    var file = readTextFile("description.html");
    $('.description').css('display', 'none');
    $('.README-md').html(file);

    console.log(file);
}