module.exports = function reverse (n) {
    let arrN = String(Math.abs(n)).split('');
    return +arrN.reverse().join('');
}
