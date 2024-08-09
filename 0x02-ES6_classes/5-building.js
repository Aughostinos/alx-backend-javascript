class Building {
  constructor(sqft) {
    if (new.target !== Building && new.target.prototype.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  // getter
  get sqft() {
    return this._sqft;
  }
}
export default Building;
