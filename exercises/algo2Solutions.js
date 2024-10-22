const arr = [1, 7, 2, 2, 4, 6, 5, 8, 3, 9, 1, 2];

// Exercise 1:
// Return an array of strings instead of numbers

const strArr =  arr.map(el => el.toString());

// Exercise 2:
// Return an array with only the even numbers
const evenNumbersArr = arr.filter(el => el % 2 === 0);

// Exercise 3:
// Return an array without the duplicates. It should be an array of strings
function removeDuplicates(arr) {
    let newArr = [];
    for (el of arr) {
        if (!newArr.includes(el)) {
            newArr.push(el);
        }
    }
    return newArr.map(el => el.toString());
}

const arrWithoutDuplicates = removeDuplicates(arr);

// const arrWithoutDuplicates = [...new Set(arr)];

// Exercise 4:
// Try to figure out how do you get from our original array to this one: [48, 2]
// Then return that array

const headSum = arr.slice(0, arr.length -1).reduce((acc, element) => acc + element, 0);
const headSumAndTail = [headSum, arr.at(-1)];

//Exercise 5
// add() which can invoked as add(2, 3) and add(2)(3) and will return 5 for both

function add(a, b) {
    if (b !== undefined) {
        return a + b
    }

    return (c) => a + c
}

add(2, 3)
add(2)(3)
