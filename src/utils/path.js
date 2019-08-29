/**
 * a.b.c
 * a.b[].c
 * a.b[1].c
 * a['attr'].b.c
 */
const parsePath = (path = '') => {
  return path.split('.').filter(v => v).map((node, index) => {
    node = node.trim()
    const startBraceIndex = node.indexOf('[')
    const endBraceIndex = node.indexOf(']')
    const isArray = startBraceIndex !== -1
    const arrayIndex = isArray ? node.substring(startBraceIndex + 1, endBraceIndex) : null
    const attribute = isArray ? node.substring(0, startBraceIndex) : node
    return {
      attribute,
      isArray,
      arrayIndex: arrayIndex ? +arrayIndex : null,
      level: index + 1
    }
  })
}

const resolvePath = (obj, path, options) => {
  const isResolvable = obj => obj !== null && obj !== undefined

  if (!isResolvable(obj)) {
    return undefined
  }

  const nodes = parsePath(path)
  const resolve = (obj, node) => {
    console.log('resolve', obj, node)
    let value
    if (node.isArray) {
      if (!Array.isArray(obj)) {
        return undefined
      }
      value = obj[node.arrayIndex || 0]
    } else {
      value = obj[node.attribute]
    }

    if (node.level === nodes.length) {
      console.log('解析到最后')
      return value
    } else if (!isResolvable(value) && node.level !== nodes.length) {
      console.log('无法继续解析')
      return undefined
    } else {
      console.log('继续解析')
      return resolve(value, nodes[level]) 
    }
  }
  return resolve(obj, nodes[0])
}