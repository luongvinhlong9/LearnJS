Array.prototype.map2 = function(callBack){
    var arrayLength = this.length;
    var output =[];
    for(var index in this){
        var result = callBack(this[index],index);
        output.push(result);
    }
    return output;
};

Array.prototype.find2= function(callBack){
    var arrayLength = this.length;
    for(var index in this){
        var result = callBack(this[index],index)
        if(result)
            return this[i];
    }
}

Array.prototype.filter2= function(callBack){
    var arrayLength = this.length;
    var output =[];
    for(var index in this){
        var result = callBack(this[index],index)
        if(result)
            output.push(this[i]);
    }
    return output;
}

Array.prototype.every2 = function(callBack){
    var arrayLength = this.length;
    var sum = 0;
    for(var index in this){
        var result = callBack(this[index],index)
        if(result)
            sum++;
    }
    if(sum === arrayLength){
        return true;
    } else return false;
}

Array.prototype.some2 = function(callBack){
    var arrayLength = this.length;
    var sum = 0;
    for(var index in this){
        var result = callBack(this[index],index)
        if(result)
            sum++;
    }
    if(sum >0){
        return true;
    } else return false;
}

var courses = [
    'Java',
    'PHP',
    'Ruby',
    'C',
    'Golang',
    'Java'
];

function callBack(course){
    return course==='Java';
}

console.log(courses.filter2(callBack));