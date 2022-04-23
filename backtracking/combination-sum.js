const combinationSum = function(candidates, target) {
  const res = []

  function dfs(i, cur, total) {
    if (total === target) {
      let copy = [...cur]
      res.push(copy)
      return 
    }

    if (i >= candidates.length || total > target) {
      return 
    }

    cur.push(candidates[i])
    dfs(i, cur, total + candidates[i])
    cur.pop()
    dfs(i + 1, cur, total)
  }

  dfs(0, [], 0)

  return res
}

let candidates = [2,3,6,7], target = 7
// candidates = [2,3,5] 
// target = 8
// candidates [2]
// target = 1
console.log(combinationSum(candidates, target))