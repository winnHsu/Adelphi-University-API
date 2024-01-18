export default function extractTime(string) {
    let startIndex = string.indexOf(' - ');
    let endIndex = string.indexOf(' | ');
    if (startIndex === -1 || endIndex === -1) {
        return "";
    }
    let dateTime = string.substring(startIndex + 3, endIndex).replace('@', '•');
    let date = dateTime.substring(0, dateTime.indexOf('•'));
    let index = date.indexOf(' - ');
    if (index === -1) {
        return dateTime;
    }
    else {
        date = "Now - " + date.substring(index + 3);
        return date + dateTime.substring(dateTime.indexOf('•'));
    }
}