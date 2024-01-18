export default function extractDescription(htmlString) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(htmlString, 'text/html');
    if (doc.body.textContent) {
        let periodIndex = doc.body.textContent.trim().indexOf('.', 160);
        return doc.body.textContent.trim().substring(0, periodIndex + 1);
    }
    else {
        return "";
    }
}