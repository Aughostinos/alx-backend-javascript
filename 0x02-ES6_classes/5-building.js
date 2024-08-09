class Building {
  constructor(sqft) {
    if(new.target === Building){
        throw new Error('Cannot instantiate class')
    }
    this._sqft = sqft;
  }

  // getter
  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    if (this instanceof Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
export default Building;
