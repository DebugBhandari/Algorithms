var reverse = function(x) {
let reversed = 0;
while (x !== 0) {  //123 12 1
    reversed = reversed * 10 + x % 10;  // 0 * 10 + 3 = 3 // 3 * 10 + 2 = 32 // 32 * 10 + 1 = 321
    x = (x / 10) | 0; // equivalent to Math.floor(x / 10) // 12 // 1 // 0
}
// JavaScript does not handle large integers well, so we need to check for overflow
if (reversed < Math.pow(-2, 31) || reversed > Math.pow(2, 31) - 1) {
    return 0;
}
return reversed;
};

console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(120)); // 21