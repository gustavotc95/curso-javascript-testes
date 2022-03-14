module.exports.sum = (num1, num2) => {
  if(num1[1] || num2[1]){
    if(Number.isNaN(intNum1) || Number.isNaN(intNum2)){
      throw new Error("Please check your input, they must be a number")
    }
  }

  const intNum1 = parseInt(num1, 10);
  const intNum2 = parseInt(num2, 10);

  console.log(intNum1);

  if(Number.isNaN(intNum1) || Number.isNaN(intNum2)){
    throw new Error("Please check your input, they must be a number")
  }

  return intNum1 + intNum2;
};