function white() {
    document.getElementById("white-theme").style.visibility = "visible";
    document.getElementById("dark-theme").style.visibility = "collapse";
    
    $('body').addClass("bg-light");
    $('body').removeClass("bg-dark");

    $('#white-theme').prependTo('.body');
}

function dark() {
    document.getElementById("white-theme").style.visibility = "collapse";
    document.getElementById("dark-theme").style.visibility = "visible";
                
    $('body').addClass("bg-dark");
    $('body').removeClass("bg-light");

    $('#dark-theme').prependTo('.body');
}