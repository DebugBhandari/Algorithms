/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows == 1) return s;

    let res = [];
    let cycleLen = 2 * numRows - 2;

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j + i < s.length; j += cycleLen) {
            res.push(s[j + i]);
            if (i != 0 && i != numRows - 1 && j + cycleLen - i < s.length)
                res.push(s[j + cycleLen - i]);
        }
    }

    return res.join("");
};

console.log(convert("PAYPALISHIRING", 3)); // "PAHNAPLSIIGYIR"
console.log(convert("PAYPALISHIRING", 4)); // "PINALSIGYAHRPI"
console.log(convert("A", 1)); // "A"