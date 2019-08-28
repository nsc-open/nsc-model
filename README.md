```js
// define model
const User = NSCModel.define('User', {
  firstName: {
    dbColumn: 'first_name',
    displayName: '名',
    dataType: NSCModel.DataTypes.String,
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

// user model
const { User, Company, Project, Product } = NSCModel

import { toGraphQLSchema, toSequelizeModel } from 'nsc-model/adapters'
import { generateExcelTemplate, generateFormRules, validate } from 'nsc-model/utils'
```