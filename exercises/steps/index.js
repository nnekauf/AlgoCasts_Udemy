// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    // n = the amount of lines 
    // number of #s per line = the lines order number
    // the amount of spaces in each line = n - number of #s
    // for each amount of lines (n amount of times) -> console log
    for (let i = 1; i<=n; i++){ 
        console.log('#'.repeat(i)+ " ".repeat(n-i)) 
    }

    // console.log("#".repeat(3-1) + "1")
    
}

module.exports = steps;
