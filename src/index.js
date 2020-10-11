module.exports = function check(str, bracketsConfig) {
    str = str.split('')
    for (let i = 0; i < str.length - 1; i++) {
        for (let item of bracketsConfig) {
            if (str[i] === item[0] && str[i + 1] === item[1]) {
                str.splice(i, 2)
                i -= 2
            }
        }
    }
    return str.length === 0;
}
