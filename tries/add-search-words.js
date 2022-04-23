const TrieNode = function() {
  this.children = {}
  this.endOfWord = false
}

const WordDictionary = function() {
  this.root = new TrieNode()
}

WordDictionary.prototype.addWord = function(word) {
  let cur = this.root

  for (let i = 0; i < word.length; i++) {
    if (cur.children[word[i]] === undefined) {
      cur.children[word[i]] = new TrieNode()
    }

    cur = cur.children[word[i]]
  }

  cur.endOfWord = true

  return null
}

WordDictionary.prototype.search = function(word) {
  function dfs(index, root) {
    let cur = root

    for (let i = index; i < word.length; i++) {
      let c = word[i]
  
      if (c === '.') {
        for (child in cur.children) {
          if (dfs(i + 1, cur.children[child])) {
            return true
          }
        }
        
        return false
      } else {
        if (cur.children[c] === undefined) {
          return false
        }
  
        cur = cur.children[c]
      }
    }
    
    return cur.endOfWord
  }

  return dfs(0, this.root)
}

let wordDictionary = new WordDictionary()
console.log(wordDictionary)
console.log(wordDictionary.addWord('bad'))
console.log(wordDictionary.addWord('dad'))
console.log(wordDictionary.addWord('mad'))
console.log(wordDictionary.search('pad'))
console.log(wordDictionary.search('bad'))
console.log(wordDictionary.search('.ad'))
console.log(wordDictionary.search('b..'))