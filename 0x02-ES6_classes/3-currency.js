class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // getters
  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  // setters
  set code(value) {
    if (typeof value !== 'string') {
      throw new Error('code must be a string');
    }
    this._code = value;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new Error('name must be a string');
    }
    this._name = value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
export default Currency;
