// ❓DESCRIPTION:
// Your task is to add up letters to one letter.
//
//     The function will be given a variable amount of arguments, each one being a letter to add.
//
//     Notes:
// Letters will always be lowercase.
//     Letters can overflow (see second to last example of the description)
// If no letters are given, the function should return 'z'
// Examples:
//     addLetters('a', 'b', 'c') = 'f'
// addLetters('a', 'b') = 'c'
// addLetters('z') = 'z'
// addLetters('z', 'a') = 'a'
// addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
// addLetters() = 'z'

// ✅SOLUTION:

function addLetters(...letters) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    let sum = 0;
    for (let letter of letters) {
        sum += alphabet.indexOf(letter) + 1;
    }

    if (sum === 0) return 'z';

    let finalIndex = (sum - 1) % 26;

    return alphabet[finalIndex];
}
console.log('addLetters: ', addLetters('a', 'b', 'c'))
console.log('addLetters: ', addLetters('a', 'b'))
console.log('addLetters: ', addLetters('z'))
console.log('addLetters: ', addLetters('z', 'a'))
console.log('addLetters: ', addLetters('y', 'c', 'b'))
console.log('addLetters: ', addLetters())
