// Add your functions here

function map(array, funct) {
    let newArray = [];

    for (let i = 0; i < array.length; i++){
        let element = array[i];
        newArray.push(funct(element))
    }
    return newArray;
}


function reduce(array, funct, start) {
    let arr = (!!start) ? start : array[0]
    let i = (!!start) ? 0 : 1

    for (; i < array.length; i++) {
        arr = funct(array[i], arr)
    }
    return arr
}
