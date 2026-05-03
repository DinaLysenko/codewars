// ❓DESCRIPTION:
/*
Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

    Examples
booleans = [True, True, False], operator = "AND"
True AND True -> True
True AND False -> False
return False
booleans = [True, True, False], operator = "OR"
True OR True -> True
True OR False -> True
return True
booleans = [True, True, False], operator = "XOR"
True XOR True -> False
False XOR False -> False
return False
Input
an array of Boolean values (1 <= array_length <= 50)
a string specifying a logical operator: "AND", "OR", "XOR"
Output
A Boolean value (True or False).*/

// ✅SOLUTION:

function logicalCalc(array, op) {
    switch (op) {
        case "AND": {
            return array.every(Boolean)
        }
        case "OR": {
            return array.some(Boolean)
        }
        case "XOR": {
            return array.filter(Boolean).length % 2 !== 0
        }
    }
}

console.log('logicalCalc: ', logicalCalc([true, true, true, false], "AND"))
console.log('logicalCalc: ', logicalCalc([true, true, true, false], "OR"))
console.log('logicalCalc: ', logicalCalc([true, true, true, false], "XOR"))
console.log('logicalCalc: ', logicalCalc([true, true, false, false], "AND"))
console.log('logicalCalc: ', logicalCalc([true, true, false, false], "OR"))
console.log('logicalCalc: ', logicalCalc([true, true, false, false], "XOR"))
console.log('logicalCalc: ', logicalCalc([true, false, false, false], "AND"))
console.log('logicalCalc: ', logicalCalc([true, false, false, false], "OR"))
console.log('logicalCalc: ', logicalCalc([true, false, false, false], "XOR"))
console.log('logicalCalc: ', logicalCalc([true, true], "AND"))
console.log('logicalCalc: ', logicalCalc([true, true], "OR"))
console.log('logicalCalc: ', logicalCalc([true, true], "XOR"))
console.log('logicalCalc: ', logicalCalc([false, false], "AND"))
console.log('logicalCalc: ', logicalCalc([false, false], "OR"))
console.log('logicalCalc: ', logicalCalc([false, false], "XOR"))
console.log('logicalCalc: ', logicalCalc([false], "AND"))
console.log('logicalCalc: ', logicalCalc([false], "OR"))
console.log('logicalCalc: ', logicalCalc([false], "XOR"))
console.log('logicalCalc: ', logicalCalc([true], "AND"))
console.log('logicalCalc: ', logicalCalc([true], "OR"))
console.log('logicalCalc: ', logicalCalc([true], "XOR"))