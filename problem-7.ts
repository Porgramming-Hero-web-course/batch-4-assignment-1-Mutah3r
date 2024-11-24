class Car {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getCarAge = (): number => {
    const currYear = new Date().getFullYear();
    return currYear - this.year;
  };
}

const car = new Car("Honda", "Civic", 2018);
console.log(car.getCarAge());
