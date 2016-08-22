let HashMap = require('./exercise.js')

/*
    ----- Question 1 -----
 Write an algorithm to check whether any permutation of a
 string is a palindrome (a string which reads the same forwards
 and backwards). For example, "madam", "amadm" and "cllci"
 should all return true, whereas "caabl" and "aaxxis" should
 return false.
*/

let isPermutationPalindrome = (string) => {
  let map = {}
  for(let i = 0; i < string.length; i++) {
    if(map[string.charAt(i)] === undefined) {
      map[string.charAt(i)] = 1
    } else {
      map[string.charAt(i)]++
    }
  }

  let oddCounter = 0
  for(let key in map) {
    // returns 1 if odd, 0 otherwise
    if(map[key] & 1) {
      oddCounter++;
    }
    if(oddCounter > 1) {
      return false
    }
  }
  return true
}

console.log('Following are palindromes')
console.log(isPermutationPalindrome('madam'))
console.log(isPermutationPalindrome('amadm'))
console.log(isPermutationPalindrome('cllci'))
console.log('Following are not palindromes')
console.log(isPermutationPalindrome('caabl'))
console.log(isPermutationPalindrome('aaxxis'))

/*
    ----- Question 2 -----
 Write an algorithm to group a list of words into anagrams.
 For example, if the input was ['east', 'cars', 'acre', 'arcs',
 'teas', 'eats', 'race'], the output should be: [['east',
 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']].
*/

let are_anagrams = (word1, word2) => {
  word1 = word1.split('').sort().join('')
  word2 = word2.split('').sort().join('')
  return word1 === word2
}

let find_anagrams = (words) => {
  let map = {}
  for(let i = 0; i < words.length; i++) {
    let key = words[i].split('').sort().join('')
    if(map[key] === undefined) {
      map[key] = [words[i]]
    } else {
      map[key].push(words[i])
    }
  }

  let array = []
  for(key in map) {
    array.push(map[key])
  }
  return array
}

console.log(find_anagrams(['east', 'cars', 'acre', 'arcs',
'teas', 'eats', 'race']))

// objArr = []
// masterArr =
// for (thru masterArr) {
//   for (thru objArr) {
//     if objArr.length === 0 {
//       masterArr[i]
//       { 'e', 'a', 's', 't'}
//     }
//     compares masterArr[i] to objArr[j]
//     counter to see
//   }
// }

/*
    ----- Question 3 -----
 Write a hash map implementation which uses separate chaining
*/
