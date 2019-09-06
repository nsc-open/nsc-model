class Field {
  constructor () {
    this.name = ''
    this.path = ''     // path of definition, like: a.b[].c
    this.defOptions = {}  // the origin field definition options
    this.rules = []
  }
}