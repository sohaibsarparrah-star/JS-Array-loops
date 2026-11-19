  // 1. Array of fruits using a loop
        let fruits = ["apple", "banana", "cherry"];

        for (let i = 0; i < fruits.length; i++) {
            console.log(fruits[i]);
        }


        // 2. Array of colors and display in paragraph
        let colors = ["red", "green", "blue"];

        document.getElementById("colors").textContent =
            colors.join(", ");


        // 3. Print numbers from 1 to 10 using for loop
        for (let i = 1; i <= 10; i++) {
            console.log(i);
        }


        // 4. Print numbers from 5 to 1 using while loop
        let num = 5;

        while (num >= 1) {
            console.log(num);
            num--;
        }


        // 5. Array of names separated by commas
        let names = ["Ali", "Sara", "Ahmed"];

        let nameText = "";

        for (let i = 0; i < names.length; i++) {
            nameText += names[i];

            if (i < names.length - 1) {
                nameText += ", ";
            }
        }

        document.getElementById("names").textContent = nameText;


        // 6. Change paragraph text to Loading
        let status = document.querySelector("#status");

        status.textContent = "Loading...";


        // 7. Calculate sum of array numbers
        let numbers = [5, 10, 15];

        let sum = 0;

        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }

        document.getElementById("sum").textContent =
            "Sum = " + sum;


        // 8. Array of cities and display as a single string
        let cities = ["Karachi", "Lahore", "Quetta"];

        let cityText = "";

        for (let i = 0; i < cities.length; i++) {
            cityText += cities[i] + " ";
        }

        document.getElementById("cities").textContent =
            cityText;


        // 9. Print even numbers from 1 to 20
        for (let i = 1; i <= 20; i++) {

            if (i % 2 === 0) {
                console.log(i);
            }

        }


        // 10. Find the largest number in an array
        let values = [45, 22, 89, 100];

        let largest = values[0];

        for (let i = 1; i < values.length; i++) {

            if (values[i] > largest) {
                largest = values[i];
            }

        }

        document.getElementById("max").textContent =
            "Largest Number = " + largest;


        // 11. Change text using querySelector
        let result = document.querySelector("#result");

        result.textContent = "Task Complete";


        // 12. Calculate average temperature
        let temperatures = [30, 35, 32, 40];

        let total = 0;

        for (let i = 0; i < temperatures.length; i++) {
            total += temperatures[i];
        }

        let average = total / temperatures.length;

        document.getElementById("averageTemp").textContent =
            "Average Temperature = " + average;


        // 13. Calculate sum from 1 to 100
        let totalSum = 0;

        for (let i = 1; i <= 100; i++) {
            totalSum += i;
        }

        document.getElementById("totalSum").textContent =
            "Total Sum = " + totalSum;


        // 14. Display all animals in one paragraph
        let animals = ["dog", "cat", "bird"];

        let animalText = "";

        for (let i = 0; i < animals.length; i++) {
            animalText += animals[i] + " ";
        }

        document.getElementById("animals").textContent =
            animalText;
              // 15. Change heading text using querySelector
        let title = document.querySelector("#title");
        title.textContent = "Welcome to JavaScript";


        // 16. Print numbers divisible by 5 between 1 and 50
        for (let i = 1; i <= 50; i++) {
            if (i % 5 === 0) {
                console.log(i);
            }
        }


        // 17. Count scores above 75
        let scores = [80, 60, 90, 70];

        let count = 0;

        for (let i = 0; i < scores.length; i++) {
            if (scores[i] > 75) {
                count++;
            }
        }

        document.querySelector("#highScores").textContent =
            "High Scores Count: " + count;


        // 18. Change message using querySelector
        let message = document.querySelector("#message");

        message.textContent = "Updated successfully";


        // 19. Display subjects using a loop
        let subjects = ["Math", "Science", "English"];

        let subjectText = "";

        for (let i = 0; i < subjects.length; i++) {
            subjectText += subjects[i] + " ";
        }

        document.querySelector("#subjectsList").textContent =
            subjectText;


        // 20. Print numbers from 10 down to 1
        let givenNumbers = [5, 10, 15, 20];

        for (let i = 10; i >= 1; i--) {
            console.log(i);
        }

        // Calculate sum of given array
        let sum = 0;

        for (let i = 0; i < givenNumbers.length; i++) {
            sum += givenNumbers[i];
        }

        document.querySelector("#givenNumbers").textContent =
            "Sum of Array: " + sum;


        // 21. Find the largest number
        let numbers = [45, 67, 12, 89, 34];

        let largest = numbers[0];

        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] > largest) {
                largest = numbers[i];
            }
        }

        console.log("Largest Number:", largest);


        // 22. Count even numbers in an array
        let values = [3, 8, 6, 1, 9, 2];

        let evenCount = 0;

        for (let i = 0; i < values.length; i++) {
            if (values[i] % 2 === 0) {
                evenCount++;
            }
        }

        document.querySelector("#evenCount").textContent =
            "Even Numbers Count: " + evenCount;


        // 23. Calculate average of numbers
        let marks = [20, 30, 40, 50];

        let total = 0;

        for (let i = 0; i < marks.length; i++) {
            total += marks[i];
        }

        let average = total / marks.length;

        console.log("Average:", average);


        // 24. Create a new array with values multiplied by 2
        let originalArray = [2, 4, 6, 8, 10];

        let newArray = [];

        for (let i = 0; i < originalArray.length; i++) {
            newArray.push(originalArray[i] * 2);
        }

        document.querySelector("#newArray").textContent =
            "New Array: " + newArray.join(", ");


        // 25. Count numbers greater than 4
        let numbers25 = [1, 3, 5, 7, 9];

        let greaterCount = 0;

        for (let i = 0; i < numbers25.length; i++) {
            if (numbers25[i] > 4) {
                greaterCount++;
            }
        }

        document.querySelector("#greaterCount").textContent =
            "Numbers Greater Than 4: " + greaterCount;


        // 26. Add numbers divisible by 5
        let numbers26 = [10, 15, 20, 25, 30];

        let divisibleSum = 0;

        for (let i = 0; i < numbers26.length; i++) {
            if (numbers26[i] % 5 === 0) {
                divisibleSum += numbers26[i];
            }
        }

        console.log("Divisible by 5 Sum:", divisibleSum);


        // 27. Check if array contains 25
        let numbers27 = [10, 20, 30, 40, 25];

        let found = false;

        for (let i = 0; i < numbers27.length; i++) {
            if (numbers27[i] === 25) {
                found = true;
                break;
            }
        }

        if (found) {
            console.log("25 Found!");
        } else {
            console.log("25 Not Found!");
        }


        // 28. Add corresponding elements of two arrays
        let array1 = [1, 2, 3];
        let array2 = [4, 5, 6];

        let result = [];

        for (let i = 0; i < array1.length; i++) {
            result.push(array1[i] + array2[i]);
        }

        document.querySelector("#correspondingSum").textContent =
            "Corresponding Sum: " + result.join(", ");


        // 29. Find second-largest number
        let numbers29 = [10, 99, 23, 87, 56];

        let largestNumber = -Infinity;
        let secondLargest = -Infinity;

        for (let i = 0; i < numbers29.length; i++) {

            if (numbers29[i] > largestNumber) {
                secondLargest = largestNumber;
                largestNumber = numbers29[i];

            } else if (
                numbers29[i] > secondLargest &&
                numbers29[i] < largestNumber
            ) {
                secondLargest = numbers29[i];
            }
        }

        document.querySelector("#secondLargest").textContent =
            "Second Largest: " + secondLargest;


        // 30. Reverse array manually using a loop
        let original = [1, 2, 3, 4, 5];

        let reversed = [];

        for (let i = original.length - 1; i >= 0; i--) {
            reversed.push(original[i]);
        }

        document.querySelector("#reversedArray").textContent =
            "Reversed Array: " + reversed.join(", ");


        // 31. Find all prime numbers between 1 and 50
        for (let num = 2; num <= 50; num++) {

            let isPrime = true;

            for (let j = 2; j < num; j++) {

                if (num % j === 0) {
                    isPrime = false;
                    break;
                }

            }

            if (isPrime) {
                console.log(num);
            }
        }
        // 32. Find the difference between largest and smallest numbers

let numbers32 = [11, 4, 9, 2, 47];

let largest = numbers32[0];
let smallest = numbers32[0];

for (let i = 1; i < numbers32.length; i++) {

    if (numbers32[i] > largest) {
        largest = numbers32[i];
    }

    if (numbers32[i] < smallest) {
        smallest = numbers32[i];
    }
}

let difference = largest - smallest;

console.log("Difference:", difference);


// 33. Count negative numbers in an array

let numbers33 = [0, -1, -5, 6, 8, -3];

let negativeCount = 0;

for (let i = 0; i < numbers33.length; i++) {

    if (numbers33[i] < 0) {
        negativeCount++;
    }
}

console.log("Negative Numbers:", negativeCount);


// 34. Create a new array containing only odd numbers

let numbers34 = [2, 4, 7, 9, 11];

let oddNumbers = [];

for (let i = 0; i < numbers34.length; i++) {

    if (numbers34[i] % 2 !== 0) {
        oddNumbers.push(numbers34[i]);
    }
}

console.log("Odd Numbers:", oddNumbers);


// 35. Remove all zeros from an array

let numbers35 = [0, 1, 0, 3, 0, 5];

let nonZeroNumbers = [];

for (let i = 0; i < numbers35.length; i++) {

    if (numbers35[i] !== 0) {
        nonZeroNumbers.push(numbers35[i]);
    }
}

console.log("Without Zeros:", nonZeroNumbers);


// 36. Swap the first and last elements

let numbers36 = [1, 2, 3, 4, 5, 6];

let temp = numbers36[0];

numbers36[0] = numbers36[numbers36.length - 1];

numbers36[numbers36.length - 1] = temp;

console.log("After Swapping:", numbers36);


// 37. Check whether all numbers are even

let numbers37 = [2, 4, 6, 8];

let allEven = true;

for (let i = 0; i < numbers37.length; i++) {

    if (numbers37[i] % 2 !== 0) {
        allEven = false;
        break;
    }
}

if (allEven) {
    console.log("All numbers are even");
} else {
    console.log("Not all numbers are even");
}


// 38. Count numbers greater than or equal to average

let numbers38 = [5, 10, 15, 20, 25];

let total = 0;

// Calculate sum
for (let i = 0; i < numbers38.length; i++) {
    total += numbers38[i];
}

// Calculate average
let average = total / numbers38.length;

let count = 0;

// Count numbers >= average
for (let i = 0; i < numbers38.length; i++) {

    if (numbers38[i] >= average) {
        count++;
    }
}

console.log("Average:", average);
console.log("Count:", count);


// 39. Check whether all array elements are equal

let numbers39 = [2, 2, 2, 2, 2];

let allEqual = true;

for (let i = 1; i < numbers39.length; i++) {

    if (numbers39[i] !== numbers39[0]) {
        allEqual = false;
        break;
    }
}

if (allEqual) {
    console.log("All elements are equal");
} else {
    console.log("All elements are not equal");
}