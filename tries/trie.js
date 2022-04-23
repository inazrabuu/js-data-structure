function TrieNode() {
  this.children = {}
  this.endOfWord = false
}

const Trie = function() {
  this.root = new TrieNode()
}

Trie.prototype.insert = function(word) {
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

Trie.prototype.search = function(word) {
  let cur = this.root

  for (let i = 0; i < word.length; i++) {
    if (cur.children[word[i]] === undefined) {
      return false
    }

    cur = cur.children[word[i]]
  }

  return cur.endOfWord
}

Trie.prototype.startsWith = function(word) {
  let cur = this.root

  for (let i = 0; i< word.length; i++) {
    if (cur.children[word[i]] === undefined) {
      return false
    }

    cur = cur.children[word[i]]
  }

  return true
}

let trie = new Trie()
console.log(trie.insert('apple'))
console.log(trie.search('apple'))
console.log(trie.search('app'))
console.log(trie.startsWith('app'))
console.log(trie.insert('app'))
console.log(trie.search('app'))