// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

    // revNum = parseInt(n.toString().split("").reverse().join(""))
    // I chose to extract this into a variable for easy to read
    
    let revString = n.toString().split("").reverse().join("")
    revNum = parseInt(revString)

    return Math.sign(n) * revNum
}

module.exports = reverseInt;
