const INDENT = 4;

function replaceAllOccurrences(str, oldSubstring, newSubstring) {
    return str.split(oldSubstring).join(newSubstring);
}

function readTextFile(file, indent) {
    let result;

    let rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if(rawFile.readyState === 4) {
            if(rawFile.status === 200 || rawFile.status == 0) {
                result = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);

    indent = ' '.repeat(indent);
    content = result.split("\n").join("\n" + indent);

    return indent + content + "\n";
}