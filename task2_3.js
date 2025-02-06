function columns(strings) {
    const maximumLength = Math.max(...strings.map(word => word.length));
    for (let i = 0; i < maximumLength; i++) {
        let row = strings.map(word => word[i] || ' ');
        console.log(row.join(' '));
    }
}
module.exports = { columns };
