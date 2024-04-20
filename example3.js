//4. Median of Two Sorted Arrays
// My solution (103ms)
var findMedianSortedArrays = function(nums1, nums2) {
    const merged = [...nums1, ...nums2].sort((a,b) => a-b);
    const half = Math.floor(merged.length/2);
    return(merged.length % 2
    ? merged[half]
    : (merged[half-1]+ merged[half])/2);
};
console.log(findMedianSortedArrays([1,3], [2])) // 2
console.log(findMedianSortedArrays([1,2], [3,4])) // 2.5


//Best solution (61ms)
// var findMedianSortedArrays = function(nums1, nums2) {

//     let new1= (nums1.concat(nums2))
//     new1.sort((a,b)=>a-b)
//     let mid =new1.length/2
//     if( mid == Number(mid.toFixed())){
//         return (new1[mid]+new1[mid-1])/2
//     }
//     else{
//         return new1[Number(mid.toFixed())-1]
//     }
    
    
// };