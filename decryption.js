var encryptedString = utf8Encode("Hello");
console.log(encryptedString); //genrated encryption String:  swBX2r1Av2tKpdN7CYisMg==
alert(encryptedString);

function utf8Encode(str) {
    try {
        return new TextEncoder().encode(str, 'utf-8').reduce((prev, curr) => prev + String.fromCharCode(curr), '');
    } catch (e) { // no TextEncoder available?
        return unescape(encodeURIComponent(str)); // monsur.hossa.in/2012/07/20/utf-8-in-javascript.html
    }
}

function hexBytesToString(hexStr) { // convert string of hex numbers to a string of chars (eg '616263' -> 'abc').
    const str = hexStr.replace(' ', ''); // allow space-separated groups
    return str == '' ? '' : str.match(/.{2}/g).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
}