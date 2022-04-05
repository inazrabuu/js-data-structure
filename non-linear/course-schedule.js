const canFinish = function(numCourses, prerequisites) {
  const preMap = {}
  for (let i = 0; i < numCourses; i++) {
    preMap[i] = []
  }

  prerequisites.map((n) => preMap[n[0]].push(n[1]))
  const visit = {}

  function dfs(course) {
    if (visit[course] !== undefined) {
      return false
    }

    if (preMap[course] === []) {
      return true
    }

    visit[course] = true

    for (pre in preMap[course]) {
      if (!dfs(preMap[course][pre])) {
        return false
      }
    }

    delete visit[course]
    preMap[course] = []
    return true
  }

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) {
      return false
    }
  }

  return true
}

console.log(canFinish(2, [[1,0]]))
console.log(canFinish(2, [[1,0],[0,1]]))