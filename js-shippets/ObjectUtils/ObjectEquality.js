
function ObjectUtils() {

    this.IsPropertyEqual = function (obj1, obj2) {

        var obj1keys = Object.keys(obj1);
        var obj2keys = Object.keys(obj2);

        var propCount = 0;
        var isEqual = true;

        obj2keys.forEach(function(key) { {
            
            propCount++;
            
            if (obj1keys.indexOf(key) >= 0) {
                isEqual = isEqual && obj1[key] === obj2[key]
            }

        });

        return propCount>0 && isEqual;
    }
}