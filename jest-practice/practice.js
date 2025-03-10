function sum(a, b) {
    return a + b;
}

function capitalize(str) {
    return String(str).charAt(0).toUpperCase() + String(str).slice(1);
}

function reverseString(str) {
    return str.split('').reverse().join('');
}
    module.exports = { sum, capitalize, reverseString };