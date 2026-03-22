// 1. Reverse a string without using built in functions.
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    return reversed
}

console.log(reverseString('HELLOWORLD'))
// ---------------------------------------------------------------------------------------------------
// 2. Check if a string is a palindrome.
function checkPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(checkPalindrome('RACECAR'))
// ---------------------------------------------------------------------------------------------------
// 3. Find duplicate items from an array
const original = [21, 3, 4, 56, 4, 16, 21, 43];
function findDuplicates(arr) {
    let duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                // Check if already stored
                let alreadyExists = false;
                for (let k = 0; k < duplicates.length; k++) {
                    if (duplicates[k] === arr[i]) {
                        alreadyExists = true;
                        break;
                    }
                }
                if (!alreadyExists) {
                    duplicates.push(arr[i]);
                }
            }
        }
    }
    return duplicates;
}
console.log(findDuplicates(original));
// ---------------------------------------------------------------------------------------------------
// 4. Find minimum and maximum from an array
const arr = [3, 5, 1, 8, 2];
function findMinMax(arr) {
    let min = arr[0];
    let max = arr[0];
    arr.forEach(element => {
        if (element > max) {
            max = element
        }

        if (element < min) {
            min = element
        }
    });
    console.log(min)
    console.log(max)
}

// ---------------------------------------------------------------------------------------------------
// 5. Flatten a nested array
const nestedArray = [1, [2, 3], [4, [5, 6]]];
console.log(nestedArray.flat(2))

function flattenArray(arr) {
    let result = [];
    arr.forEach(item => {
        if (Array.isArray(item)) {
            result = result.concat(flattenArray(item));
        } else {
            result.push(item)
        }
    })
    return result;
}
// ---------------------------------------------------------------------------------------------------
// 6. Flatten a nested object
const userProfile = {
    id: 101,
    name: "Alex",
    isActive: true,
    contact: {
        email: "alex@example.com",
        phone: {
            countryCode: "+1",
            number: "5551234567"
        }
    },
    address: {
        street: "123 Main St",
        city: "New York",
        geo: {
            lat: 40.7128,
            lng: -74.006
        }
    },
    roles: ["admin", "editor"],
    preferences: {
        theme: "dark",
        notifications: {
            email: true,
            sms: false
        }
    }
};

function flattenObject(obj, parentKey = "", result = {}) {
    for (let key in obj) {
        const newKey = parentKey ? `${parentKey}.${key}` : key;

        if (
            typeof obj[key] === "object" &&
            obj[key] !== null
        ) {
            flattenObject(obj[key], newKey, result);
        } else {
            result[newKey] = obj[key];
        }
    }

    return result;
}

// function flattenObject(obj, parentKey = "") {
//   return Object.keys(obj).reduce((acc, key) => {
//     const newKey = parentKey ? `${parentKey}.${key}` : key;
//     const value = obj[key];

//     if (typeof value === "object" && value !== null) {
//       Object.assign(acc, flattenObject(value, newKey));
//     } else {
//       acc[newKey] = value;
//     }

//     return acc;
//   }, {});
// }

const flattened = flattenObject(userProfile);
console.log(flattened);

// ---------------------------------------------------------------------------------------------------
// 7. Deep clone a nested object
function deepClone(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item));
    }

    const cloned = {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloned[key] = deepClone(obj[key]);
        }
    }

    return cloned;
}

const clone = deepClone(userProfile);


// ---------------------------------------------------------------------------------------------------
// 8. Check if a number is prime
function checkPrime(number) {
    if (number <= 1) {
        return false
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false
        }
    }

    return true
}
// ---------------------------------------------------------------------------------------------------
// 9. Add all the digits of a given number
function sumOfDigits(num) {
    let sum = 0;
    while (num) {
        sum += num % 10;
        num = parseInt(num / 10);
    }
    return sum;
}
// ---------------------------------------------------------------------------------------------------
// 10. Fibonacci upto N terms
function fibonacciUpTo(limit) {
    let a = 0, b = 1;
    while (a <= limit) {
        console.log(a);
        let next = a + b;
        a = b;
        b = next;
    }
}
// ---------------------------------------------------------------------------------------------------
// 11. Sum of all even digits in a number
function addEven(num) {
    let evenSum = 0;
    while (num > 0) {
        let digit = num % 10;
        if(digit % 2 === 0) {
            evenSum += digit
        }
        num = Math.floor(num / 10);
    }
    console.log(Math.floor(evenSum))
}
// ---------------------------------------------------------------------------------------------------
// 12. Find second highest element in array
function secondHighest(arr) {
    if (arr.length < 2) {
        return null;
    }

    let highest = arr[0];
    let secondHighest = null;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > highest) {
            secondHighest = highest;
            highest = arr[i];
        } else if (arr[i] < highest) {
            if (secondHighest === null || arr[i] > secondHighest) {
                secondHighest = arr[i];
            }
        }
    }

    return secondHighest;
}

console.log(secondHighest([10, 5, 8, 20, 15])); 
// ---------------------------------------------------------------------------------------------------

