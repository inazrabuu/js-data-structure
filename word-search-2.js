const TrieNode = function() {
  this.children = {}
  this.endOfWord = false
}

const Trie = function() {
  this.root = new TrieNode()
}

Trie.prototype.addWord = function(word) {
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

const findWords = function(board, words) {
  let trie = new Trie()
  words.forEach(w => { 
    trie.addWord(w)
  })
  
  const ROWS = board.length,
        COLS = board[0].length

  let resMap = {},
      visit = {},
      res = []

  function dfs(r, c, node, words) {
    if (r < 0 || c < 0 || r === ROWS || c === COLS 
      || node.children[board[r][c]] === undefined 
      || visit[`${r}_${c}`] !== undefined) {
        return 
    }

    visit[`${r}_${c}`] = [r, c]
    node = node.children[board[r][c]]
    words += board[r][c]
    if (node.endOfWord) {
      resMap[words] = words
    }

    dfs(r + 1, c, node, words)
    dfs(r - 1, c, node, words)
    dfs(r, c + 1, node, words)
    dfs(r, c - 1, node, words)

    delete visit[`${r}_${c}`]
  }

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      dfs(r, c, trie.root, '')
    }
  }

  for (r in resMap) {
    res.push(r)
  }

  return res
}

let board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], 
    words = ["oath","pea","eat","rain"]

console.log(findWords(board, words))

board = [["a","b"],["c","d"]] 
words = ["abcb"]

console.log(findWords(board, words))