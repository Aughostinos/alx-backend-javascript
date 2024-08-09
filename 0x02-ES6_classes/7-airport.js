class Airport {
  constructor(name, code) {
    this._code = code;
    this._name = name;
  }

  // Getter
  get code() {
    return this._code;
  }

  toString() {
    return this._code;
  }
}
export default Airport;
