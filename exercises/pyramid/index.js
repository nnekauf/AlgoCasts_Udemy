// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    // #s in each row = odd numbers starting with one. -
    // number of spaces in the first line on each side of #= (n-1) 
    // number of spaces on each side in the rest of the lines = (n-1) - (how many rows away from first row)
    // let sign = ""
    // let space = ""
    // for (let i =1; i<= n; i += 2 ){
    //     sign = "#".repeat(i)

    //     for (let j =1; j<= n; j ++ ){
    //         space = " ".repeat(n-j)
    //         // return sign
    //         console.log(space + sign + space)
    //         // console.log(sign)
    //     }
        // console.log(" ".repeat(n-j) + "#".repeat(i) + " ".repeat(n-j))
        // console.log(" ".repeat(n-i) + "#".repeat(i) + " ".repeat(n-i))
    // }
    

    
}

module.exports = pyramid;
