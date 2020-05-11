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

content = readTextFile('templates/index-template.html');
$('.content').html(content);