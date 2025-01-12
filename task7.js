function combine(array1, array2) {
    let answer = [];
    let i = 0;

    while (i < array1.length && i < array2.length) {
        answer.push(array1[i]);
        answer.push(array2[i]);
        i++;
    }

    while (i < array1.length) {
        answer.push(array1[i]);
        i++;
    }

    while (i < array2.length) {
        answer.push(array2[i]);
        i++;
    }

    return answer;
}

module.exports = { combine };
