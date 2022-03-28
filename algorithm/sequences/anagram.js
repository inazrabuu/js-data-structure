var isAnagram = function(s, t) {
    let mapS = stringToMap(s)
    let mapT = stringToMap(t)

    if (Object.keys(mapS).length !== Object.keys(mapT).length)
      return false

    let anagram = true
    for (m in mapT) {
      if (mapT[m] !== mapS[m]) {
        anagram = false
        break
      }
    }

    return anagram
};

function stringToMap(s) {
    let map = {}
    for (i = 0; i < s.length; i++) {
        if (map[s[i]] !== undefined) {
            map[s[i]] += 1
        } else {
          map[s[i]] = 1
        }
    }

    return map
}

console.log(isAnagram('anagram', 'nagaram'))
console.log(isAnagram('rat', 'car'))
console.log(isAnagram('ab', 'a'))