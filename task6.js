function longest(array) {
    let arr = 0;
    let long_strings = [];
    
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > arr) {
            arr = array[i].length;
            long_strings = [array[i]]; 
        } else if (array[i].length === arr) {
            long_strings.push(array[i]); 
        }
    }
    
    console.log(long_strings.join(", "));
}

module.exports = { longest };
