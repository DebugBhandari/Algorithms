//If sum of Two Numbers equals to the target, gives index of the numbers

var twoSum = function(nums, target) {
    let res = [];
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
           let test = nums[i] + nums[j];
           if(test === target){
               res.push(i);
               res.push(j);
           }
        }
    }
    return res;
};

console.log(twoSum([2,7,11,15], 9)); // [0,1]
console.log(twoSum([3,2,4], 6)); // [1,2]
console.log(twoSum([3,3], 6)); // [0,1]
