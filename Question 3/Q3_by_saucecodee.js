function shortestPath(strArr) {
  let result = -1
  const numOfNodes = Number(strArr[0])
  const pathStartPoint = numOfNodes + 1
  const startPoint = strArr[1]
  const endPoint = strArr[numOfNodes]
  const paths = {}

  for (let i = pathStartPoint; i < strArr.length; i++) {
    const spitPath = strArr[i].split("-");

    const p1 = spitPath[0]
    const p2 = spitPath[1]

    if (paths[p1]) {
      paths[p1].push(p2)
    } else {
      paths[p1] = [p2]
    }

    if (paths[p2]) {
      paths[p2].push(p1)
    } else {
      paths[p2] = [p1]
    }
  }

  // console.log(paths)

  const visited = {}
  visited[startPoint] = true

  return checkPath(paths, visited, paths[startPoint], endPoint)
}

function checkPath(paths, visited, availablePaths, endPoint) {
  for (let i = 0; i < availablePaths.length; i++) {
    const path = availablePaths[i];
    visited[path] = true

    // availablePaths
    // console.log(paths[path])
    // visited
    // path
    // console.log(path)

    if (paths[path].includes(endPoint)) {
      // console.log(paths[path])
      return getPathFromVisted(visited, endPoint)
    }

    if (!visited[path]) {
      visited[path] = true
      checkPath(paths, visited, paths[path], endPoint)
    }
  }

  return getPathFromVisted(visited, endPoint)
}


function getPathFromVisted(visited, endPoint) {
  let result = ""
  for (const key in visited) {
    result = result + "-" + key
  }

  result = result + "-" + endPoint

  return result.substring(1, result.length)
}


console.log(shortestPath(["4", "A", "B", "C", "D", "A-B", "B-D", "B-C", "C-D"])) // A-B-D
// console.log(shortestPath(["4", "A", "B", "C", "D", "A-B", "B-D", "B-C", "C-D"])) 
console.log(shortestPath(["4","X","Y","Z","W","X-Y","Y-Z","X-W"])) // X-W