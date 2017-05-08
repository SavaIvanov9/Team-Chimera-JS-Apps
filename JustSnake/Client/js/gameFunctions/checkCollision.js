const checkCollision = (function(x, y, array) {
    for (var i = 0; i < array.length; i += 1) {
        if (array[i].x === x && array[i].y === y)
            return true;
    }
    return false;
}())
export { checkCollision }