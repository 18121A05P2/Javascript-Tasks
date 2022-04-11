Array.prototype.square = function() {
    return this.map(function(item) {
        return Math.pow(item, 2);
    });
}

Array.prototype.cube = function() {
    return this.map(function(item) {
        return Math.pow(item, 3);
    });
}

Array.prototype.average = function() {
    if(this.length==0){return NaN}
    return this.reduce(function(p, c) {return p+c;}) / this.length;
}

Array.prototype.sum = function() {
    if(this.length==0){return 0}
    return this.reduce(function(p, c) {
        return p+c;
    });
}

Array.prototype.even = function() {
    return this.filter(function(item) {
        return item%2==0;
    });
}

Array.prototype.odd = function() {
    return this.filter(function(item) {
        return item%2==1;
    });
}
