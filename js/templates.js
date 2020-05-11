function readTextFile(file)
{
    var result;

    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                result = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);

    return result;
}

function setContent(file) {
    var content = readTextFile('templates/' + file + '-template.html');
    $('.content').html(content);
}

function setTitle(title) {
    $('title').text(title);
}

function setContentAndTitle(file, title) {
    setContent(file);
    setTitle(title);
}