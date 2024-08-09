class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const NewCar = Object.getPrototypeOf(this).constructor;
    return new NewCar(this._brand, this._motor, this._color);
  }
}
export default Car;
