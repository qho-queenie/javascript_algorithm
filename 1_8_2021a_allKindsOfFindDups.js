// just different ways to know if there is any duplicates in an array of numbers

var containsDuplicate = function(nums) {
    let newSet = new Set(nums);
    return newSet.size === nums.length? false:true;
};


var containsDuplicate = function(nums) {
    if (nums.length < 2){
        return false;
    }

    for(var i = 0; i < nums.length; i++){
        if(nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])){
            return true;
        }
    }
    return false;
};

var containsDuplicate = function(nums) {

    // -1 cause the last one is being checked by the inner loop
    for(var i = 0; i < nums.length -1; i++){

        let currentHead = nums[i];

        // j is always i + 1 because pos i doesnt need to be checked with pos i
        for(var j = i + 1; j < nums.length; j++){
            if(currentHead === nums[j]){
                return true;
            }
        }
    }
    return false;
};

var containsDuplicate = function(nums) {
    // with a hashmap;
    let hashObj = {};
    nums.forEach(x => hashObj.hasOwnProperty(x)? hashObj[x]++: hashObj[x] = 1);
    return Object.values(hashObj).filter(x => x > 1).length > 0? true:false;
};
