const input = require('readline-sync');
let operation;

//find the absolute value using Math.abs()
function absoluteValue(numVal){
    return Math.abs(numVal);
}

//find the x^y value using Math.pow()
function powerCalculation(val1, val2){
    return Math.pow(val1, val2);
}

//find the square root of 2 value using Math.sqrt()
function sqrtFinder(numVal){
    return Math.sqrt(numVal);
}

//find the maximum and minimum value using Math.max() & Math.min()
function findMaxMin(numbers){
    //(... numbers) -> spread the array elements into individual values.
    return `The maximum values is ${Math.max(...numbers)} and minimum value is ${Math.min(...numbers)}`;
}

//find the random number using Math.random() between 2 numbers
function randomNum(r1, r2){
    //the random number is multiplied with ending range and rounds to the nearest integer and the result is added by starting range.
    return Math.round(Math.random() * r2) +r1;     
}

//Round the number to 2 decimal places using Math.round().
function roundToTwo(floatVal){
    // multiply the number with 100 and divide the result by 100, to round off to 2 deciaml places. 
   return  (Math.round(floatVal * 100)) / 100;
}

function calculator(){

//Use do-while loop to display the operations until the user  enters 7 (for exit).
    do{

    // use questionInt to get the input(operations) from the user    
    operation = input.questionInt(`Operation:
1. Absolute Value Calculation 
2. Power Calculation
3. Square Root Finder
4. Maximum and Minimum Finder
5. Random Number Generator
6. Custom Rounding
7. Exit
Enter your choice(1-7): `);
  
//1 is for Absolute Value Calculation 
    if (operation === 1){
    let num = input.questionFloat("Please enter number: ");
    console.log(`The absolute value of ${num} is: ${absoluteValue(num)}`);
   }

   //2 is for Power Calculation
   else if (operation === 2){
    let num1 = input.questionInt("Please enter number1: ");
    let num2 = input.questionInt("Please enter number2: ");
    console.log(`Raise ${num1} to the power of ${num2} is: ${powerCalculation(num1, num2)}`);
    }

    //3 is for Square Root Finder
    else if (operation === 3){
        let num = input.questionInt("Please enter number: ");
        console.log(`The square root of ${num} is ${sqrtFinder(num)}`);
    }

    //4 is for Maximum and Minimum Finder
    else if (operation === 4){
        let arr = input.question("Please enter set of numbers (separated by space): ");
        let numArr = arr.split(" ").map(Number);
        console.log(findMaxMin(numArr));
    }

    //5 is for Random Number Generator
    else if (operation === 5){
        let range1 = input.questionInt("Please enter starting range number: ");
        let range2 = input.questionInt("Please enter ending range number: ");
        console.log(`The random number between ${range1} and ${range2} is ${randomNum(range1, range2)}`);
    }    

    //6 is for Custom Rounding
    else if (operation === 6){
        let floatNum = input.questionFloat("Please enter the decimal number: ");
        console.log(`The number rounded to 2 decimal places is ${roundToThree(floatNum)}`);
    }  

    }while(operation !== 7); 

}
 //calling the function 
calculator();


/*Output:
Operation:
1. Absolute Value Calculation 
2. Power Calculation
3. Square Root Finder
4. Maximum and Minimum Finder
5. Random Number Generator
6. Custom Rounding
7. Exit
Enter your choice(1-7): 1
Please enter number: -45.67
The absolute value of -45.67 is: 45.67
Operation:
1. Absolute Value Calculation 
2. Power Calculation
3. Square Root Finder
4. Maximum and Minimum Finder
5. Random Number Generator
6. Custom Rounding
7. Exit
Enter your choice(1-7): 2
Please enter number1: 5
Please enter number2: 3
Raise 5 to the power of 3 is: 125
Operation:
1. Absolute Value Calculation 
2. Power Calculation
3. Square Root Finder
4. Maximum and Minimum Finder
5. Random Number Generator
6. Custom Rounding
7. Exit
Enter your choice(1-7): 3
Please enter number: 144
The square root of 144 is 12
Operation:
1. Absolute Value Calculation 
2. Power Calculation
3. Square Root Finder
4. Maximum and Minimum Finder
5. Random Number Generator
6. Custom Rounding
7. Exit
Enter your choice(1-7): 4
Please enter set of numbers (separated by space): 3 78 -12 0.5 27
The maximum values is 78 and minimum value is -12
Operation:
1. Absolute Value Calculation 
2. Power Calculation
3. Square Root Finder
4. Maximum and Minimum Finder
5. Random Number Generator
6. Custom Rounding
7. Exit
Enter your choice(1-7): 5
Please enter starting range number: 1
Please enter ending range number: 50
The random number between 1 and 50 is 38
Operation:
1. Absolute Value Calculation 
2. Power Calculation
3. Square Root Finder
4. Maximum and Minimum Finder
5. Random Number Generator
6. Custom Rounding
7. Exit
Enter your choice(1-7): 6
Please enter the decimal number: 23.67891
The number rounded to 2 decimal places is 23.68
Operation:
1. Absolute Value Calculation 
2. Power Calculation
3. Square Root Finder
4. Maximum and Minimum Finder
5. Random Number Generator
6. Custom Rounding
7. Exit
Enter your choice(1-7): 7 */