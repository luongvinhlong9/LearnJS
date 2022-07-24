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
            output.push(this[index]);
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
    console.log(course);
}

Array.prototype.forEach2 = function(callBack){
    for(var index in this){
        if(this.hasOwnProperty(index)) //ham kiem tra trong array co phai phan tu thuc hay k
            callBack(this[index]);
    }
}

courses.forEach2(callBack);


