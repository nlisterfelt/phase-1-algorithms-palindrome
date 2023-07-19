function isPalindrome(word) {
  const length = word.length
  let halfLength
  let palindromeTruth = true
  if(length%2===0){
    halfLength = length/2 + 1
  } else {
    halfLength = length/2 + 0.5
  }
  for(let i = 0; i<halfLength; i++){
    if(word.charAt(i)!==word.charAt(length-i-1)){
      console.log(word.charAt(i)+word.charAt(length-i-1))
      palindromeTruth = false
    }
  }
  console.log(word)
  return palindromeTruth
}

/* 
  Add your pseudocode here
  Use charAt to find the first letter and last letter. 
  Check if equal.
  Keep trying until the counter equals the length/2 rounded up. 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: false");
  console.log("=>", isPalindrome("racebar"));
 
  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
 
  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("roob"));
  
  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("roor"));
}

module.exports = isPalindrome;
