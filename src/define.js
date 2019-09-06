const defineModel = (name, definitions) => {
  if (!name) {
    throw new Error('name is required')
  }

  const fields = []

  Object.keys(definitions).forEach(fieldName => {
    const def = definitions[fieldName]
  })

  return {
    getFields: (deep = false) => {
      return fields
    },
    validate: (value) => {

    },
    shape: (value) => {

    }
  }
}