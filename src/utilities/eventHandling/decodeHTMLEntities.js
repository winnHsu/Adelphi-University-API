export default function decodeHTMLEntities(htmlString) {
    var textArea = document.createElement('textarea');
    textArea.innerHTML = htmlString;
    return textArea.value;
}