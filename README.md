```js
// define model
const User = NSCModel.define('User', {
  firstName: {
    dbColumn: 'first_name',
    displayName: '名',
    dataType: NSCModel.DataTypes.String,
    refType: NSCModel.XX,
    maxLength,
    minLength,
    range,
    regx,
    enum: [],
    cvt: 'cvtCode', // cvt code or a key-value pair generate function
    displayType: NSCModel.DisplayType.Input,
    format: v => v, // for display value
    parse: v => v, // for set value
    required: true, // true|false () => bool
    defaultValue: '',
    message: '', // error message
    xx: (ctx) => {

    }
  }
})

// use model
const { User, Company, Project, Product } = NSCModel
const userCvtFields = User.getFields({ deep: true }).filter(field => field.cvt)
userCvtFields.forEach(field => {
  const { _path, cvt } = field
  // find field in path of target object
  // _path = 'companies[].type'  => user.companies[1].type
  evaluatePath(obj, _path, ({ path, fieldName, fieldValue, obj }) => {
    // path: companies[0].type, field: type, value: '001', obj = company
    obj[`${fieldName}Label`] = getCvtLabel(field.cvt, fieldValue)

  })

})

import { toGraphQLSchema, toSequelizeModel } from 'nsc-model/adapters'
import { generateExcelTemplate, generateFormRules, validate } from 'nsc-model/utils'
```


```js
const path = 'a.b[].c.d'
const obj = {
  a: {
    b: [{ c: {} }, { c: { d: '123' } }, {}]
  }
}

resolvePath(obj, 'a.b[1].c.d')
executePath(obj, path, () => {

})

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

const resolvePath = (obj, path) => {
  if (!obj) {
    throw new Error()
  }

  const pathNodes = parsePath(path)
  let ctxObj = obj
  for (let i = 0; i < pathNodes.length; i ++) {
    const node = pathNodes[i]
    const value = ctxObj[node.attribute]
    if (value is object or array) {
      ctxObj = value
    } else {
      return undefined
    }
  }
}
```