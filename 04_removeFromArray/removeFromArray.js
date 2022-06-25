const removeFromArray = function(arg, ...arr) {
 for(let i = 0; i < arr.length; i++){
    if(arr[i] === arg){
        arr[i].splice(i, 1);
    }
 }
};

// Do not edit below this line
module.exports = removeFromArray;
