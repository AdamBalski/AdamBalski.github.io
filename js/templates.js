var names = ["article1", "article2", "article3", "article4", "kontakt"];
var navbar = [true, true, true, true, false];
var articles = new Map();
articles.set("index", readTextFile("articles/index-article.html"));

for(let i = 0; i < names.length; i++) {
    let current = readTextFile("articles/" + names[i] +"-article.html", INDENT);
    articles.set(names[i], current);
}

function setContent() {
    let lightContent = getContent(names, "light");
    let darkContent = getContent(names, "dark");

    $('#light-content').html(lightContent);
    $('#dark-content').html(darkContent);
}

function getContent(names, theme) {
    let result = getIntroBar(theme, names) + "\n";

    for(i = 0; i < names.length; i++) {
        result = result + getArticle(names[i], theme) + "\n";
        if(navbar[i]) {
            result = result + getNavbar(theme, names) + "\n";
        }
    }

    return result;
}

function getIntroBar(theme, names) {
    return getArticle("index", theme) + getNavbar(theme, names);
}

function getArticle(name , theme) {
    let content = articles.get(name);
    let result = 
    '<div class="article" id="#NAME#-#THEME#">'  + 
    '<div class="row col-12">' +
    '<div class="col-6 col-md-6 col-lg-3" style="height: 40px;"></div>' +
    '<div class="col-6 col-md-6 col-lg-3" style="height: 40px;"></div>' +
    '<div class="col-6 col-md-6 col-lg-3" style="height: 40px;"></div>' +
    '<div class="col-6 col-md-6 col-lg-3" style="height: 40px;"></div>' +
    '</div>' +
    '<div class="row col-12" style="height: 15px;"></div>' +
    '#CONTENT#'  + 
    '</div>' ; 

    result = replaceAllOccurrences(result, "#THEME#", theme);
    result = replaceAllOccurrences(result, "#NAME#", name);
    result = replaceAllOccurrences(result, "#CONTENT#", content);

    return result + "\n";
}

function getNavbar(theme, names) {
    let buttons = getButtons(theme, names, INDENT);
    let navbar =
    '<nav class="navbar navbar-#THEME# nav-links navbar-expand row nav-#THEME#-links">  '  + 
    '   <button class="btn scroll-icon scroll-#THEME#-icon" onclick="scrollUp();">' +
    '       <svg class="bi bi-arrow-up" width="1em" height="1em" viewBox="0 0 16 16" fill="#COLOR#" xmlns="http://www.w3.org/2000/svg">  '  + 
    '           <path fill-rule="evenodd" d="M8 3.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V4a.5.5 0 01.5-.5z" clip-rule="evenodd"/>  '  + 
    '           <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8 3.707 5.354 6.354a.5.5 0 11-.708-.708l3-3z" clip-rule="evenodd"/>  '  + 
    '       </svg>  ' +
    '   </button>' +
    '   <div class="links">  '  + 
    '' + buttons + 
    '   </div>  '  + 
    '</nav>  ';

    navbar = replaceAllOccurrences(navbar, "#COLOR#", theme == "dark" ? "#FFF" : "#000");
    navbar = replaceAllOccurrences(navbar, "#THEME#", theme);

    return navbar;
}

function getButtons(theme, names, indent) {
    let result = '';

    for(j = 0; j < names.length; j++) {
        result += getButton(theme, names[j], indent) + '\n';
    }

    return result;
}

function getButton(theme, name, indent) {
    let button = ''.repeat(indent) + '<a href = "##NAME#-#THEME#" class="link btn btn-#THEME# link-#THEME#">#NAME#</a>';

    button = replaceAllOccurrences(button, "#THEME#", theme);
    button = replaceAllOccurrences(button, "#NAME#", name);

    return button;
}