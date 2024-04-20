// var longestPalindrome = function(s) {
//     const isPali = (c) => {
//         const copy = [...c]; // Create a copy of the input array before reversing it
//         return (copy.join('') === copy.reverse().join('')); // Fix missing semicolon
//     };
//     const paliArray = [];
//     const sArray = s.split('');
//     if(sArray.length === 1){ paliArray.push(s) }
//     for(let i = 0; i < sArray.length; i++){
//         for(let j = i + 1; j < sArray.length+1; j++){
//             let subArray = sArray.slice(i, j);
//             if(isPali(subArray)){
//                 paliArray.push(subArray.join(''));
//             }
//         }; 
//     };
//     return paliArray.reduce((a, b) => {
//         return a.length >= b.length ? a : b;
//     }, ''); // return the longest palindrome
// };


// var longestPalindrome = function(s) {
//         const isPali = (c) => {
//         const copy = [...c]; // Create a copy of the input array before reversing it
//         return (copy.join('') === copy.reverse().join('')); // Fix missing semicolon
//     };
//     let longest=0;
//     const endResult=s.split('').reduce((acc,currValue,currIndex)=>{
//         if(acc.includes(currValue)){
//                 if(acc.length>longest){
//         longest=acc.length;
//         }   
//         const includedFirstIndex=acc.indexOf(currValue);
//         return `${acc.slice(includedFirstIndex+1)}${currValue}`
//     }

//     return`${acc}${currValue}`},'').length
//     return Math.max(endResult,longest)

// };

var longestPalindrome = function (s) {
    // Update the string to put hash "#" at the beginning, end and in between each character
    let updatedString = getUpdatedString(s);
    console.log(updatedString);
    // Length of the array that will store the window of palindromic substring
    const length = 2 * s.length + 1;
    // Array to store the length of each palindrome centered at each element
    let p = new Array(length);
    p.fill(0);
    // Current center of the longest palindromic string
    console.log(p);
    let c = 0;
    // Right boundary of the longest palindromic string
    let r = 0;
    // Maximum length of the substring
    let maxLength = 0;
    // Position index
    let position = -1;
    for (let i = 0; i < length; i++) {
        // Mirror of the current index
        let mirror = 2 * c - i;
        // Check if the mirror is outside the left boundary of current longest palindrome
        if (i < r) {
            p[i] = Math.min(r - i, p[mirror]);
        }
        // Indices of the characters to be compared
        let a = i + (1 + p[i]);
        let b = i - (1 + p[i]);
        // Expand the window
        while (a < length && b >= 0 && updatedString[a] === updatedString[b]) {
            p[i]++;
            a++;
            b--;
        }
        // If the expanded palindrome is expanding beyond the right boundary of
        // the current longest palindrome, then update c and r
        if (i + p[i] > r) {
            c = i;
            r = i + p[i];
        }
        if (maxLength < p[i]) {
            maxLength = p[i];
            position = i;
        }
    }
    let offset = p[position];
    let result = "";
    for (let i = position - offset + 1; i <= position + offset - 1; i++) {
        if (updatedString[i] !== '#') {
            result += updatedString[i];
        }
    }
    return result;
};

function getUpdatedString(s) {
    let sb = "";
    for (let i = 0; i < s.length; i++) {
        sb += "#" + s[i];
    }
    sb += "#";
    return sb;
}
console.log(longestPalindrome("babad")); // "bab" or "aba"
console.log(longestPalindrome("cbbd")); // "bb"
console.log(longestPalindrome("a")); // "a"
console.log(longestPalindrome("bb")); // "bb"