function circleArea(radius){
    if(radius <= 0){
     console.log('Error');
    }
    const Pi = Math.PI * Math.pow(radius,2)
    const RoundedArea = Math.round( Pi * 100) / 100
    console.log(RoundedArea + ' + 0.01');
}
circleArea(68)


function addBinary(a,b,num){ 
    const number1 = parseInt(a,2)
    const number2 = parseInt(b,2)
    const sum = number1 + number2
     
    const binary = sum.toString(2)
    
    if(num = binary){
        console.log(`${number1} + ${number2} = ${sum} in decimal or ${binary} in binary`);
    }
    console.log(binary);
} 
addBinary(1,1)