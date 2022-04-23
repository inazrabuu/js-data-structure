const groupAnagrams = function(strs) {
  let output = []
      
  let stash = {}
  for (i = 0; i < strs.length; i++) {
      let sorted = strs[i].split('').sort().join('')
      if (stash[sorted] !== undefined) {
          stash[sorted].push(strs[i])
      } else {
          stash[sorted] = [strs[i]]
      }
  }

  for (keys in stash) {
    output.push(stash[keys])
  }
  
  return output
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
console.log(groupAnagrams([""]))
console.log(groupAnagrams(["a"]))