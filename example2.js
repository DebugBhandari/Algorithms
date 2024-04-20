//My solution (96ms) 
//var lengthOfLongestSubstring = function(s) {
//     let maxLength = 0;
//     for(let i = 0; i < s.length; i++){
//         let set = new Set();
//         let length = 0;
//         for(let j = i; j < s.length; j++){
//             if(set.has(s.charAt(j))){
//                 break;
//             }
//             set.add(s.charAt(j));
//             length++;
//         }
//         maxLength = Math.max(maxLength, length);
//     }
//     return maxLength;
// };

//Best solution (75ms)
var lengthOfLongestSubstring = function(s) {
    let longest=0;
    
    const endResult=s.split('').reduce((acc,currValue,currIndex)=>{
            if(acc.includes(currValue)){
                    if(acc.length>longest){
            longest=acc.length
            }   
            const includedFirstIndex=acc.indexOf(currValue);
            return `${acc.slice(includedFirstIndex+1)}${currValue}`
        }

        return`${acc}${currValue}`},'').length
        return Math.max(endResult,longest)
};

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
//console.log(lengthOfLongestSubstring("bbbbb")); // 1
//console.log(lengthOfLongestSubstring("pwwkew")); // 3

//EXPLORE MORE