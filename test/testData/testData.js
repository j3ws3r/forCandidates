exports.randomNumber = function number(min, max) {
    return Math.floor(Math.random() * (+max - + min)) + +min;
}
exports.randomWord = function words() {
    var wordArrray = ["first", "second", "third", "fourth", "fifth"];
    
    var min=0;
    var max=wordArrray.length;
    var random = Math.floor(Math.random() * (+max - +min)) + +min;
    var wordFromArray= wordArrray[random];
    
    return wordFromArray;
}
/*
In this file you can create&use personal functions, arrays, etc.
**/