function dom (input) {
    var length = input.length;
    //convert to array below;
    var array = input.split("\n");
    console.log(array);
    var not_dom = [];
    for (var j = 1 ; j < length; j+=4){
        for (var i = j; i <length; i+=4){
            if (array[i][0] > array[i + 1][0] && array[i][2] > array[i + 1][2]){
                not_dom[i] = 1;
                not_dom[i + 1] = 0;
            }
            else if (array[i][0] < array[i + 1][0] && array[i][2] < array[i + 1][2]){
                not_dom[i] = 0;
                not_dom[i + 1] = 1;
            }
        }
    }
    return not_dom.reduce(function(sum, number){
        return sum + number;
    });
};

var test = "5\n2 4\n1 9\n6 10\n5 10\n7 5";
dom(test);