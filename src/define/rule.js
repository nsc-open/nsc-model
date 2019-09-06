const NSCModel = require('nsc-model')

// rule should be like a plugin, can be defined with hooked functions
// to be involved in field parse process

NSCModel.defineRule('dbName', {
  type: 'buildin', // buildin or extend rule of field
  validate: ruleValue => {

  },
  exec: () => {

  },

  
})