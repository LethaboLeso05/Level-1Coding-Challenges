function square(num, char = '#') {
    for (let i = 0; i < num; i++) {
      let row = '';
      for (let j = 0; j < num; j++) {
        row += char;
      }
      console.log(row);
    }
  }
module.exports = { square };
