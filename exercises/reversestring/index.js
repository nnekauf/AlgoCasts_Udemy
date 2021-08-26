// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

///// First possible solution
// fastes and most consise

// function reverse(str) {
//     return str.split("").reverse().join("")
// }

// second possible solution
// used if reverse method can not be used

// function reverse(str) {
//     let reversed = ""

//     for (let character of str) {
//         reversed = character + reversed
//     }
//     return reversed
// }

//third possible solution
// shows interviewer more of an understanding of what is going on
function reverse(str) {
    return str.split("").reduce((rev, char) =>  char + rev, "") // reduce takes all elements of an array and reduces it to a single value
}

module.exports = reverse;
