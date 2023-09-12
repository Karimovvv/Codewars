function circleArea(radius){
    if(radius <= 0){
     console.log('Error');
    }
    const Pi = Math.PI * Math.pow(radius,2)
    const RoundedArea = Math.round( Pi * 100) / 100
    console.log(RoundedArea);
}
circleArea(68)


function addBinary(a,b){ 
    const number1 = parseInt(a,2)
    const number2 = parseInt(b,2)
    const sum = number1 + number2
     
    const binary = sum.toString(2)

    console.log(`${number1} + ${number2} = ${sum} in decimal or ${binary} in binary`);
} 
addBinary(1,1)

function sumTwoSmallestNumber(number){
   const sortNumbers = number.sort((a,b) => a - b)
   const sum = sortNumbers[0] + sortNumbers[1]
  console.log(sum);
} 
sumTwoSmallestNumber([10, 343445353, 3453445, 3453545353453])

function twoInteger(num1 , num2) {
   const sum = num1 + num2
  if(num1 === num2){
    console.log(`${num1} the same numbers ${num2}`);
  }
  let sum2 = 0;
  for (let i = num1; i <= num2; i++){
    sum2 +=i
  }
   
console.log(sum2)
}
twoInteger(1,1)
