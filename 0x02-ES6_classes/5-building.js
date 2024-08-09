class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  // getter
  get sqft() {
    return this._sqft;
  }

  // setter
  set sqft(value) {
    if (typeof value !== 'number') {
      throw new Error('sqft must be a number');
    }
    this._sqft = value;
  }

  evacuationWarningMessage() {
    if (this instanceof Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
export default Building;
