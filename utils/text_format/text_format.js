const textFormat = (str, length) => {
    //Recieve string and return first two words
    //or one word limited by length in uppercase
    str = str.toUpperCase();
    if (str.split(" ").length > 1) {
        let firstWord = str.split(" ")[0];
        let secondWord = str.split(" ")[1];
        if (firstWord.length > length && secondWord.length < length) {
            str = firstWord.substring(0, length) + "... " + secondWord;
        }
        if (firstWord.length < length && secondWord.length > length) {
            str = firstWord + " " + secondWord.substring(0, length) + "...";
        }
        if (firstWord.length > length && secondWord.length > length) {
            str = firstWord.substring(0, length) + "... " + secondWord.substring(0, length) + "...";
        }
        if (firstWord.length < length && secondWord.length < length && str.length > length * 2) {
            str = firstWord + " " + secondWord + "...";
        }
    }
    if (str.length > length && str.split(" ").length === 1) {
        str = str.substring(0, length) + "...";
    }

    return str;
}

export default textFormat;