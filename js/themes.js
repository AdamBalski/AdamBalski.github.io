function light() {
    document.getElementById("light-theme").style.display = "block";
    document.getElementById("dark-theme").style.display = "none";
    
    $('body').addClass("bg-light");
    $('body').removeClass("bg-dark");
}

function dark() {
    document.getElementById("light-theme").style.display = "none";
    document.getElementById("dark-theme").style.display = "block";
                
    $('body').addClass("bg-dark");
    $('body').removeClass("bg-light");
}