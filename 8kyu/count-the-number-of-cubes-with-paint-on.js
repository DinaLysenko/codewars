// ❓DESCRIPTION:
// Upon arriving at an interview, you are presented with a solid blue cube.
// The cube is then dipped in red paint, coating the entire surface of the cube.
// The interviewer then proceeds to cut through the cube in all three dimensions a certain number of times.
// Your function takes as parameter the number of times the cube has been cut.
// You must return the number of smaller cubes created by the cuts that have at least one red face.
// To make it clearer, the picture below represents the cube after (from left to right) 0, 1 and 2 cuts have been made.
// Examples:
// If we cut the cube 2 times, the function should return 26
// If we cut the cube 4 times, the function should return 98
// ✅SOLUTION:

function countSquares(cuts) {
    if (cuts === 0) {
        return 1
    }
    let line = cuts + 1
    let totalCubes = (line) ** 3
    let blueCubes = (line ** 2 - cuts * 4) * (line - 2)
    return totalCubes - blueCubes
}

console.log('countSquares: ', countSquares(2))
console.log('countSquares: ', countSquares(4))
console.log('countSquares: ', countSquares(5))