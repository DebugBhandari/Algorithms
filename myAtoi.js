// var myAtoi = function(s) {
//     let sign = 1;
//     let result = 0;
//     let i = 0;
    
//     // Remove leading whitespace
//     while (s[i] === ' ') {
//         i++;
//     }
    
//     // Check for sign
//     if (s[i] === '-' || s[i] === '+') {
//         sign = s[i] === '-' ? -1 : 1;
//         i++;
//     }
    
//     // Convert digits to integer
//     while (i < s.length && s[i] >= '0' && s[i] <= '9') {
//         result = (result * 10) + (s[i] - '0');
//         i++;
//     }
    
//     // Apply sign and handle overflow
//     result = sign * result;
//     result = Math.max(Math.pow(-2, 31), Math.min(result, Math.pow(2, 31) - 1));
    
//     return result;
// };

let myAtoi = function(s) {
    const ans = Number.parseInt(s);
       if (ans) {
        if (ans <= -2147483648)return -2147483648;
        else if (ans >= 2147483647)return 2147483647;
        else return ans;
    }
    return 0;
  };

console.log(myAtoi("42")); // 42
console.log(myAtoi("   -42")); // -42
console.log(myAtoi("419657575675653 with words")); // 4193
console.log(myAtoi("21768686868747487gfmhfhmh3647")); // 0