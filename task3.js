function isSixtyFive(num1, num2){
    if (num1 === 65 || num2 === 65 || (num1+num2) === 65){
      return true;
    }
    return false;
  }
  
module.exports = { isSixtyFive };
