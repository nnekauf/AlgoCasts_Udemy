// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let arr = str.split(" ")
    let newStr = ""
    for (let word of arr){
        newStr +=  word[0].toUpperCase() + word.slice(1) + " "
          
    }
     
    return newStr.slice(0, -1)
}

module.exports = capitalize;
