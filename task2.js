function hasThree(num1, num2){
    if (num1 === 3 || num2 === 3){
      let sum = num1 + num2;
      return sum.toString().includes('3');
    }
    return false;
  }
  
module.exports = { hasThree };
