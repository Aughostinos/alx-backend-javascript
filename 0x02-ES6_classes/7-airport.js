class Airport {
  constructor(name, code) {
    this._code = code;
    this._name = name;
  }

  toString() {
    return this._code;
  }
}
export default Airport;
