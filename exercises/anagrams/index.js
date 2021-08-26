// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let charA = stringA.replace(/[^\w]/g, "").toLowerCase()
    let charB = stringB.replace(/[^\w]/g, "").toLowerCase()
 
    if (charA.split("").sort().join("") === charB.split("").sort().join("")){
        return true
    } else{
        return false
    }

}


module.exports = anagrams;
